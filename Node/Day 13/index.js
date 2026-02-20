const express= require('express');
const connectDB =require('./config/db');

let userRoutes=require('./routes/userRoutes');
let urlRoutes=require('./routes/urlRoutes');
let authRoutes=require('./routes/authRoutes')



const app=express();

// Connect Database
connectDB();

// Middlewares
app.use(express.json());
app.use('/api/auth',authRoutes);

//Routes
app.use('/api/users',userRoutes);
app.use('/api/urls',urlRoutes);

app.listen(5000,()=>{
  console.log("Server is running on http://localhost:5000");
  
})
