let express=require('express')
let users=require('./MOCK_DATA.json');
let app=express();

app.get('/api/users',(req,res)=>{
  return res.json(users);
})

app.get('/api/users/:id',(req,res)=>{
  let id=Number(req.params.id);
  let user=users.find((u)=> u.id===id);
  if(user)
  {
          return res.json(user);
  }
  else
  {
    return res.json({error:"User is Not Exist"})
  }



})
app.listen(8001,()=>console.log(`Server is running on port 8001`))