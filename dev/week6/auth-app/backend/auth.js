const jwt = require("jsonwebtoken")
const secret = "1234567890"
const checkJwt = (req,res,next)=>{
    const token = req.headers.Authorization;
    if(!token){
        res.status(403).send({
            msg : "unauthorized"
        })
        return;
    }

    const user = jwt.verify(token,secret);
    if(!user){
        res.status(403).send({
            msg : "unauthorized"
        })
        rseturn;
    }
    req.user = user.username
    next()
}