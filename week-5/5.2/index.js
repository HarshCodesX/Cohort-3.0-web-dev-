const express = require("express");
const app = express();
const cors = require("cors");

let requestCount = 0;

app.use(cors());

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    console.log(`Total number of request: ${requestCount}`);
    next();
}

function logger(req, res, next){
    console.log(`Method is ${req.method}`);
    console.log(`route is ${req.url}`);
    console.log(`host is ${req.hostname}`);
    console.log(new Date());
    next();
}

app.use(logger);
app.use(express.json());

app.get("/sum/:a/:b", requestIncreaser, function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({result: a + b});
})

app.post("/postsum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ans: a + b});
})

app.get("/multiply", requestIncreaser, function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a * b});
})

app.get("/divide", requestIncreaser, function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a / b});
})

app.get("/subtract", requestIncreaser, function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a - b});
})

app.get("/admin", function(req, res){
    res.json({msg: `Total number of req is ${requestCount}`});
})

app.listen(3001);