const express = require("express");
const { adminModel, courseModel } = require("../db");
const { z } = require("zod");
const Router = express.Router;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_ADMIN } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const admin = require("../middleware/admin");

const adminRouter = Router();

adminRouter.post("/signup", async function(req, res){
    const requiredBody = z.object({
        email: z.string().min(5).max(70).email(),
        password: z.string().min(4).max(30),
        firstName: z.string().min(4).max(20),
        lastName: z.string().min(4).max(20),
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error.message
        })
        return;
    }

    const {email, password, firstName, lastName} = req.body;
    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch(error){
        errorThrown = true;
        res.json({
            message: error.message
        })
    }

    if(!errorThrown){
        res.json({
            message: "signed up successfully"
        })
    }
})

adminRouter.post("/signin", async function(req, res){
    const {email, password} = req.body;
    const admin = await adminModel.findOne({
        email: email
    })

    if(!admin){
        res.status(403).json({
            message: "user does not exist!"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if(passwordMatch){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect password"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const {title, description, imageUrl, price} = req.body;
    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId: adminId
    })
    res.json({
        message: "course added successfully",
        courseId: course._id
    })
})

adminRouter.put("/edit/course", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const {title, description, imageUrl, price, courseId} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })
    res.json({
        message: "course updated successfully",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const courses = await courseModel.find({
        creatorId: adminId
    })
    res.json({
        message: "all the courses are here",
        creatorId: adminId,
        courses: courses
    })
})

module.exports = {
    adminRouter: adminRouter
}