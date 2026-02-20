const { log } = require('console');
let fs=require('fs');
/*
//Write File sync
fs.writeFileSync("data.txt","Hello This is from Data file");
console.log("File written successfully...");

// Write file async
fs.writeFile('Info.txt',"Hello this is from Info file",(err)=>{
  if(err)
  {
    console.log("Error occur in File writing"); 
  }
  else{
    console.log("File is written successfully");
  }
})


//Read file async
fs.readFile("./Info.txt","utf8",(err,data)=>{
if(err)
{
  console.log("Error occur in File reading");
  
}
else{
  console.log(data);
  
}
})


//Read file sync
let data=fs.readFileSync("./data.txt","utf8");
console.log(data);



// append data sync
fs.appendFileSync('./data.txt',"\nThis data is appended");
console.log("Data appended successfully");

//append data async
fs.appendFile('./Info.txt',"\nThis data is appended in Info.txt file",(err)=>{
  if(err)
  {
    console.log("Error is occured while Appending Data");
    
  }
  else{
    console.log("Data is appended successfully...");
    
  }
})

// Rename file sync
fs.renameSync('./A.txt','AA.txt');
console.log("File rename successfully to AA.txt");

//Rename file async
fs.rename('./AA.txt',"BB.txt",(err)=>{
  if(err)
  {
    console.log("Error is occured while rename the file");
    
  }
  else{
    console.log("File renamed succfully to BB.txt");
    
  }
})

// Check File exist or not sync
if(fs.existsSync('BBB.txt'))
{
  console.log("File is exists");
  
}
else{
  console.log("File doesnt exists");
  
}


//// Check File exist or not async
fs.access('BBB.txt',fs.constants.F_OK,(err)=>{
  if(err)
  {
    console.log("File doesnt exists");
  }
  else{
  console.log("File is exists");
  
}
})


//Create folder sync
fs.mkdirSync('Sample');
console.log("Folder is created");

//Create folder sync
fs.mkdir('Sample_2',(err)=>{
   if(err)
  {
    console.log("Error while folder creation");
  }
  else{
  console.log("Folder created...");
  
}
})

//Delete file sync
fs.unlinkSync('BB.txt');
console.log("File deleted successfully");

*/
//Delete file async
fs.unlink('Info.txt',(err)=>{
  if(err)
  {
    console.log("Error occured while file deletion");
    
  }
  else{
    console.log("File deleted successfully");
    
  }
})



