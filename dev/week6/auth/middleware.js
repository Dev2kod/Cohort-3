const jwt = require("jsonwebtoken")
const jwt_secret = "8329616635"

const auth=(req,res,next)=>{
    const token = req.headers.authorization;
 
    if(!token){
        res.status(403).send({
            msg : "unauthorized, token not found"
        })
    }

    if(token){
        jwt.verify(token,jwt_secret,(err,decoded)=>{
            if(err){
                res.status(403).json({
                    msg: "unauthorised, token verification failed"
                })
            }else{
                req.user = decoded;
                next()
            }

        })
    }
}

module.exports = {auth}