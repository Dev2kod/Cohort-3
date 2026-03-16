const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email:{type:String,unique:true},
    password: {type:String,required:true}
})

const todoSchema = new Schema({
    userId: Object,
    title: String,
    done: Boolean
})

const userModel = mongoose.model("user",userSchema)
const todoModel = mongoose.model("todo",todoSchema)

module.exports = {
    userModel,
    todoModel
}