const express = require("express");
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function(req, res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId: userId,
        courseId: courseId
    })
    res.json({
        message: "successfully purchased a course"
    })
})

courseRouter.get("/preview", async function(req, res){
    const courses = await courseModel.find({});
    res.json({
        message: "here are all the courses",
        courses: courses
    })
})

module.exports = {
    courseRouter: courseRouter
}