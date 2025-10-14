const express = require("express");
// const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

const users = [];
const JWT_SECRET = "iamharsh123";

// app.use(cors());
app.use(express.json());

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }
    else{
        res.json({
            message: "You are not logged in"
        })
    }
}

function logger(req, res, next){
    console.log(`${req.method} request came`);
    next();
}

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    });
    console.log(users);
    res.json({
        message: "You are signed up"
    })
})

app.post("/signin", logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => {
        if(user.username == username && user.password == password){
            return user;
        }
    })

    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
    }
    else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
})

app.get("/me", auth, logger, function(req, res){
        let foundUser = users.find((user) => {
            if(user.username == req.username){
                return user;
            }
        })

        res.json({
        username: foundUser.username,
        password: foundUser.password
        })
    })

app.listen(3000);