let Url=require('../models/urlModel')
let User=require('../models/userModel');
let {nanoid}=require('nanoid')


//Create short Url
exports.createShortUrl=async(req,res)=>{
  let{originalUrl,userId}=req.body;

  let shortId=nanoid(6);
  let newUrl=await Url.create({
    originalUrl,
    shortId,
    userId
  })
  res.json({
    message:"Short url is created",
    shortUrl:`http://localhost:5000/api/urls/${shortId}`
  })
}

//Redirect Url
exports.redirectUrl=async(req,res)=>{
  let{shortId}=req.params;
  let user=await Url.findOne({shortId});

  if(!user) return res.status(404).json({message:"User Not Found"})

    res.redirect(Url.originalUrl);
}
//  Get Urls
exports.getUrls=async(req,res)=>{
  let {userId}=req.body;
  let user=await User.findById(userId);
  if(!user) return res.status(404).json({message :"User Not Found"});
  let urls;
  if(user.role==="admin")
  {
    urls=await Url.find().populate('userId',"name email role");
  }
  else
  {
   urls =await Url.find({userId})
  }
  res.json(urls);
}