 const jwt=require('jsonwebtoken');
 const authMiddleWare=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader===null || authHeader===undefined){
        return res.status(401).json({status:401,message:"unauthorized"})
    }
    const token=authHeader.split(" ")[1];
    // verify token
    jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(401).json({status:401,message:"invalid token"})
        req.user=user;
        next();
    })
}
module.exports={
    authMiddleWare
}