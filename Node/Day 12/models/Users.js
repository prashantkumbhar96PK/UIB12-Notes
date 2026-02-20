const mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age:Number
})

module.exports=mongoose.model("User",userSchema);