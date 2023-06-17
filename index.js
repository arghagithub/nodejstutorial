const fs= require('fs');
const os=require('os');
// fs.writeFile('hello.txt','My name is Argha Golui','utf-8',(err)=>{
//     if(!err){
//         console.log("data is written on the file successfully");
//     }
//     else{
//         console.log(err.message);
//     }
// })

// fs.appendFile('hello.txt','\nI am an ECE student','utf-8',(err)=>{
//     if(!err){
//         console.log("data is appended on the file successfully");
//     }
//     else{
//         console.log(err.message);
//     }
// })

// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(!err){
//         console.log(data)
//     }
//     else{
//         console.log(err.message);
//     }
// })

// console.log("Asynchorus javascript");


console.log(os.type());
console.log(os.arch());
console.log(os.platform());
console.log(`${os.totalmem()/1024/1024/1024}`);
console.log(`${os.freemem()/1024/1024/1024}`);
console.log(os.tmpdir());