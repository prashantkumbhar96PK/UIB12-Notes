let http=require('http');
let fs=require('fs');
let server=http.createServer((req,res)=>{
  console.log("New request is received");
  if(req.url=== "/favicon.ico") return res.end();
  let log=`${Date.now()} : ${req.url} \n`
  fs.appendFile("logs.txt",log,(err,data)=>{
    if(err) return res.end('error is occured')
  switch(req.url)
  {
    case "/": res.end('This is Home Page');
    break;

    case '/login': res.end('This is Login Page');
    break;

    case '/aboutUs' : res.end('This is About Us Page')
    break;

    case 'contactUs': res.end('This is Our Contact')
    break;
  }
    
  })

 
  
});

server.listen(8001,()=>console.log("Server is running on port 8001")
)