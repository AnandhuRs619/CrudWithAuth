const mongoose = require("mongoose");

const conn = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/CrudDatabase")
         
        console.log("database is connected ")
    } catch (error) {
        console.error(error)
    }

} 

module.exports = conn ;