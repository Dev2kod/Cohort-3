const jwt = require("jsonwebtoken")
const JWT_SECRET = "123456"

const authMiddleware = (req,res,next)=>{
    const token = req.headers.token
    if(!token){
        return res.json({
            msg: "Unauthorised"
        })
    }
    const decoded = jwt.verify(token)
    
    if(decoded){
        req.userId = decoded.userId
        console.log("authorised")
        next();
    }
}

module.exports={authMiddleware}