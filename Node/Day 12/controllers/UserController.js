let User=require('../models/Users');

//Get All Users
exports.showUsers=async(req,res)=>{
  let users=await User.find();
  return res.render("users/index",{users});
}

// Show Add User Form
exports.showAddForm=(req,res)=>{
  res.render('users/add')
}

//Add new User
exports.addUser=async(req,res)=>{
 await User.create(req.body);
 res.redirect("/users")
}
