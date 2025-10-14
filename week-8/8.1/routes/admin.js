const express = require("express");
const { adminModel } = require("../db");
const Router = express.Router;

const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin signed up successfully"
    })
})

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "admin loggedin successfully"
    })
})

adminRouter.post("/course", function(req, res){
    res.json({
        message: "course added successfully"
    })
})

adminRouter.put("/edit/course", function(req, res){
    res.json({
        message: "course updated successfully"
    })
})

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "all the courses are here"
    })
})

module.exports = {
    adminRouter: adminRouter
}