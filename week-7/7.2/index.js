//Improving code written in 7.1

const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const app = express();
const JWT_SECRET = "secret@123";

const {userModel, todoModel} = require("./db");

app.use(express.json());

mongoose.connect("mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/todo-app-database");

app.post("/signup", async function(req, res){

    const requiredBody = z.object({
        email: z.string().min(3).max(80).email(),
        password: z.string().min(3).max(70),
        name: z.string().min(3).max(30)
    })

    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error.message
        })
        return;
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            email: email, 
            password: hashedPassword,
            name: name
        });
    } catch (error) {
        errorThrown = true;
        res.json({
            message: "User already exists"
        })
    }
    
    if(!errorThrown){
        res.json({
            message: "Signed up!"
        }) 
    }                                                                                                                                                    
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
    })

    if(!user){
        res.status(403).json({
            message: "User does not exist!"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log(user);

    if(passwordMatch){
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