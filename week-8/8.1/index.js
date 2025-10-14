const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function connectDb(){
    await mongoose.connect("mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/coursera-app");
    app.listen(3000, () => {
        console.log("server started on port 3000");
    })
}
connectDb();