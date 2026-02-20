let http=require('http');

let server=http.createServer((req,res)=>{
  console.log("Request is received "+req);
  console.log("This is the response"+res);
  
  
});
server.listen(8001,()=>{
  console.log("Server is running on port 8001");
  
})
