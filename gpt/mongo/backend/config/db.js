import mongoose from "mongoose";

const connectdb =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    } catch (error) {
        console.error("DATABASE NOT CONNECTED ERROR")
        console.error(error.message)
        process.exit(1)
    }
}

export default connectdb