let mongoose=require("mongoose");
let urlSchema=new mongoose.Schema({
  originalUrl:{
    type:String,
    require:true
  },
  shortId:{
     type:String,
    require:true,
    unique:true,
    index:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
},{timestamps:true})

module.exports= mongoose.model("Url",urlSchema);