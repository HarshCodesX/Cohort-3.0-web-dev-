const express = require("express");
const app = express();

app.get("/sum/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({result: a + b});
})

app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a * b});
})

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a / b});
})

app.get("/subtract", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({result: a - b});
})

app.listen(3000);