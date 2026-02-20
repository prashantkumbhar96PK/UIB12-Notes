
let jwt=require('jsonwebtoken');
let verifytoken=(req,res,next)=>{
 let token= req.headers.authorization?.split(" ")[1];
 if(!token) return res.status(401).json({message:"No Token is Provided"});

 try{
  let decoded=jwt.verify(token,"secretkey");
  req.user=decoded;
  next();
 }
 catch(err)
 {
  return res.status(401).json({message:"Invalid Token"});
 }
}
module.exports=verifytoken;