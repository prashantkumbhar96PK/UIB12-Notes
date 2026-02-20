let User=require('../models/userModel');

//Create User
exports.createUser=async (req,res)=>{
  let user=await User.create(req.body);
  res.json(user);
}

//Get all Users
exports.getAllUsers=async (req,res)=>{
 let users= await User.find();
 res.json(users);
}