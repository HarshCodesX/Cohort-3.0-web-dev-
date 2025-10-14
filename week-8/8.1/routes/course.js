const express = require("express");
const { courseModel } = require("../db");
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "successfully purchased a course"
    })
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}