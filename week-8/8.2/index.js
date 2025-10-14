//8.2 is the continuation of 8.1 (course selling application)
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function connectDb(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => {
        console.log("server started on port 3000");
    })
}
connectDb();