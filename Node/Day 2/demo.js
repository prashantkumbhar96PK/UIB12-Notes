
let fs=require('fs')
fs.writeFileSync("data.txt","This is module session");
console.log("Data.txt file is created");

let path=require('path')
console.log(path.basename('data'));
console.log(path.dirname('A.txt'));

let os=require('os');
console.log(os.platform());
console.log(os.totalmem());


