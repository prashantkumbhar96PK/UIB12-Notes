let User=require('../models/Users');

//Get All Users
exports.showUsers=async(req,res)=>{
  let users=await User.find();
  return res.json(users);
}


//Add new User
exports.addUser=async(req,res)=>{
 await User.create(req.body);
 return res.json({status:"User is created successfully"})
 
}