const mongoose= require('mongoose');

let connectDB=async ()=>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/shorturlAPI');
  console.log("Mongodb connected successfully");
  }
  catch(err)
  {
    console.log("Database connection error "+err.message);
    
  }
  
  
}
module.exports=connectDB;