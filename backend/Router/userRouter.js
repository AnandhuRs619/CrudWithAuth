const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel.js")


userRouter.get('/signup',async(req,res)=>{
 try {
    let userEmail = req.body.email
    const users = await User.findOne({ email: userEmail })
    if (users) {
        res.json({ status: "userRegistered", error: "user already registered" })
    }
    

} catch (err) {
    console.log("err", err)
    res.json({ status: 'error', error: "Duplicae email" })
 }

})

module.exports = userRouter;