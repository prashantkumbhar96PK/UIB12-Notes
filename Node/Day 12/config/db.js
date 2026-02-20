
let mongoose=require('mongoose');
let connectDB=async ()=>{
await mongoose.connect("mongodb://127.0.0.1:27017/mvc");
console.log("MongoDB is Connected");
}

module.exports=connectDB;