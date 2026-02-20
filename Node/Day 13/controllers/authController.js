let User =require('../models/userModel');
let bcrypt=require('bcryptjs');
let jwt=require('jsonwebtoken');

// Register
let register=async(req,res)=>{
  let {name,email,password,role}=req.body();

  let hashPassword=await bcrypt.hash(password,10);

  await User.create({
    name,
    email,
    password:hashPassword,
    role
  })
  res.json({message:"User is Registered successfully"})
}

//Login
let login=async(req,res)=>{
  let {email,password}=req.body();
  let user=await User.findOne({email});
  if(!user) return res.status(404).json({message:"User Not Found"})
   let match= await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({message:"Inavlid Credentials"})

    let token=jwt.sign({
      id:user._id,
      role:user.role
    },
  "secretkey",{expiresIn:"5d"});
  res.json({token});
}
