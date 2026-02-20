
let express=require('express');
let app=express();

app.get('/',(req,res)=>{
  return res.send('Hello from Home Page')
});

app.get('/aboutUs',(req,res)=>
{
return res.send('This is Our Information')
});

app.get('/aboutUs/profile',(req,res)=>{
  return res.send(`Hello ${req.query.name} Nice to meet you`);
})

app.listen(8001,()=>console.log("Server is running on port 8001")
)