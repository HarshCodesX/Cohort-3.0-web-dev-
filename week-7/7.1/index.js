const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "secret@123";

const {userModel, todoModel} = require("./db");

app.use(express.json());

mongoose.connect("mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/todo-app-database");

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    await userModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        message: "Signed up!"
    })                                                                                                                                                     
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await todoModel.create({
        title: title,
        userId: userId,
        done: done
    })

    res.json({
        userId: userId
    })
});

app.get("/todos", auth, async function(req, res){
    const userId = req.userId;
    const todos = await todoModel.find({
        userId: userId
    })
    res.json({
        userId: userId
    })
});

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000);