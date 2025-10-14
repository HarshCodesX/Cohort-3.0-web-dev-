const express = require("express");
const { userModel } = require("../db");
const Router = express.Router;

const userRouter = Router();

userRouter.post("/signup", function(req, res){
    res.json({
        message: "signed up successfully"
    })
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "loggedin successfully"
    })
})

userRouter.get("/purchases", function(req, res){
    res.json({
        message: "purchased courses"
    })
})

module.exports = {
    userRouter: userRouter
}