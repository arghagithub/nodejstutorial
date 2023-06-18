const fs = require('fs');
const os = require('os');
const path = require('path');
const oper = require('./script');
const { add, sub, mul } = oper;
const chalk = require('chalk');
const validator = require('validator');
const http = require('http');
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

// (function(){
//     console.log("My name is khan");
//     console.log(__filename);
//     console.log(__dirname);
// })();



//create my own server

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url === '/') {
//         res.end("Hello from home side");
//     }
//     else if (req.url === '/about') {
//         res.end("Hello from about side");
//     }
//     else if (req.url === '/contact') {
//         res.end("Hello from contact side");
//     }
//     else if (req.url === '/api') {
//         const data = fs.readFileSync(`${__dirname}/UserApi/example.json`, 'utf-8');
//         res.writeHead(200,{"Content-type":"application/json"});
//         res.end(data);
//     }
//     else {
//         res.writeHead(404, { "Content-type": "text/html" });
//         res.end("<h1>page does not exists</h1>")
//     }
// })

// now how i sure of that server is listening our request or not

// server.listen(80, '127.0.0.1', () => {
//     console.log('server is listening on the port 80');
// })



// Play wit json
//create a js object and convert it json
// const biodata = {
//     name: 'Argha Golui',
//     rollno: 'ECE2019/062',
//     department: 'ECE'
// }
// console.log("step 1:",biodata);
// const jsondata= JSON.stringify(biodata);
// console.log(jsondata);

// write it to another file

// fs.writeFileSync('json.txt',jsondata,'utf-8');
// console.log("step 2: data is written on the file");

// read the data from the file

// const data= fs.readFileSync('json.txt','utf-8');
// console.log("step 2: data is read from the file",data);


// convert it js object

// const objdata= JSON.parse(data);
// console.log("step 4",objdata);



//Event module

//all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

// to include the built in module in pur project we use require
const events= require('events');
const event= new events.EventEmitter();
event.on("HiArgha",()=>{
    console.log("Emi: Hello Argha, how are you?");
})

event.on("HiArgha",()=>{
    console.log("Argha : I am fine ");
})

event.on("HiArgha",()=>{
    console.log("Emi: Do you love me??");
})

event.on("HiArgha",()=>{
    console.log("Argha: Yes, I love you");
})

event.on("checkPage",(sc,msg)=>{// for one event we call severel callbacks
    console.log(`status code is ${sc} and page is ${msg}`);
})

event.emit("checkPage",200,"ok");//we send multiple arguments

event.emit("HiArgha");