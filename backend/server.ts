import express from "express";
const app = express();
import userRouter from "./Router/userRouter.js";
import connectToDb from "./db/db.js";

connectToDb();

app.use('/',userRouter)

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000")
})