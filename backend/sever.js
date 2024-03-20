const express = require("express");
const app = express();
const userRouter = require("./Router/userRouter.js");
const connectToDb= require("./db/db.js");

connectToDb();

app.use('/',userRouter)

app.listen(5000,()=>{
    console.log("server is running ")
})