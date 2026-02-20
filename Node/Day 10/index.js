let express=require("express");
let mongoose=require("mongoose");
let User=require('./models/User')
let app=express();

mongoose.connect("mongodb://127.0.0.1:27017/practice").then(()=>{
  console.log("Mongodb is connected");
}).catch((err)=>{
  console.log(err);
})

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Create User
app.post('/api/users',async (req,res)=>{
  let user=await User.create(req.body);
  return  res.status(201).json(user);
  if(!user) return res.json({status:"Something is wrong..."})
})

//Get User By ID
app.get('/api/users/:id',async (req,res)=>{
        let user=await  User.findById(req.params.id);
        if(!user) return res.status(404).json({message:"User not Found"})
        return res.json(user);
})

// Get all Data
app.get('/api/users',async(req,res)=>{
  let allUsers=await User.find();
  return res.json(allUsers);
})

// Update Data
app.put('/api/users/:id',async(req,res)=>{
  let updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
  return res.json(updatedUser);
})


// Delete Data
app.delete('/api/users/:id',async(req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  return res.json({status:"User is deleted successfully"})
})
app.listen(8001,()=>{
  console.log("The server is running on port no 8001");
  
})