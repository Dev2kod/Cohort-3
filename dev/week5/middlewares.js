let i = 0;

const apiCount=(req,res,next)=>{
    i= i+1;
    next();
}

const getCount = ()=>{
    return i
}


module.exports = {getCount,apiCount}