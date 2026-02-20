let mongoose=require("mongoose");
let UserSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  age:Number
})
let UserModel=mongoose.model("User",UserSchema);

module.exports=UserModel;