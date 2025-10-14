const express = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const Router = express.Router;
const {JWT_SECRET} = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup", async function(req, res){

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
        });
        return;
    }

    const {email, password, firstName, lastName} = req.body;
    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch (error) {
        errorThrown = true;
        res.json({
            message: "User already exists"
        })
    }

    if(!errorThrown){
        res.json({
            message: "signed up successfully"
        })
    }
})

userRouter.post("/signin", async function(req, res){

    const {email, password} = req.body;
    const user = await userModel.findOne({
        email: email
    })

    if(!user){
        res.status(403).json({
            message: "user does not exist!"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            "message": "here is your token",
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect password"
        })
    }

    res.json({
        message: "loggedin successfully"
    })
})

userRouter.get("/purchases", userMiddleware, async function(req, res){
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId: userId
    })

    const courseData = await courseModel.find({
        _id: {$in: purchases.map(x => x.courseId)}
    })
    res.json({
        message: "purchased courses",
        purchases: courseData
    })
})

module.exports = {
    userRouter: userRouter
}