const mongoose = require("mongoose")

const connectdb = async() => {
    console
    try{
        await mongoose.connect(process.env.MONGOOSE_STRING)
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }       
}

module.exports = {connectdb}
