import mongoose from "mongoose";


 const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,"username required"],
        unique:[true,"username should be unique"]
    },
    email:{
        type: String,
        required:[true,"email required"],
        unique:[true,"email should be unique"]
    },
    password:{
        type: String,
        required:[true,"password required"],
    }
 })

 const userModel = mongoose.model("users",userSchema)

 export default userModel