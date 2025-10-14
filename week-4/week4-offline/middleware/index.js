const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({msg: "sorry you are under age"});
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res){
    res.json({msg: "You have successfully riden the ride 1!"});
})

app.get("/ride2", function(req, res){
    res.json({msg: "You have successfully riden the ride 2!"});
})

app.listen(3000);