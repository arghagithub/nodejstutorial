const fs= require('fs');
const os=require('os');
const path=require('path');
const oper=require('./script');
const {add,sub,mul}=oper;
const chalk= require('chalk');
const validator = require('validator');
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


// console.log(os.type());
// console.log(os.arch());
// console.log(os.platform());
// console.log(`${os.totalmem()/1024/1024/1024}`);
// console.log(`${os.freemem()/1024/1024/1024}`);
// console.log(os.tmpdir());


// console.log(path.dirname("E:/bmicalculatormernproject/Backend/middleware/fetchadmin.js"));
// console.log(path.extname("E:/bmicalculatormernproject/Backend/middleware/fetchadmin.js"));
// console.log(path.basename("E:/bmicalculatormernproject/Backend/middleware/fetchadmin.js"));
// const data=path.parse("E:/bmicalculatormernproject/Backend/middleware/fetchadmin.js");
// console.log(data.root);

// console.log(add(5,2));
// console.log(sub(5,1));
// console.log(mul(5,2));

// console.log(validator.isEmail('foobar@gmail.com')?chalk.green.inverse('true'):chalk.red.bold.italic.underline.inverse('false'));



//video 14: module wrapper function

/*(function (exports, require, module, __filename, __dirname) {  
       
    
 });
*/

(function(){
    console.log("My name is khan");
    console.log(__filename);
    console.log(__dirname);
})();