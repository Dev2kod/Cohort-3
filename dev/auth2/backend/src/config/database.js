import mongoose from "mongoose"
import config from "./config.js"


const connectdb=async() =>{
    try {

        await mongoose.connect(config.MONGO_URI)
        console.log("DB CONNECTED")

    } catch (error) {
        console.log(`ERROR : ${error}`)
    }
}

export default connectdb