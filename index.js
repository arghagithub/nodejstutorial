console.log("Welcome to node js");

const fs= require('fs');
//write to any non existent file
// fs.writeFileSync('read.txt',"Hello, I am Argha Golui",'utf-8');

//update the file

// fs.writeFileSync('read.txt',"Hello, I am Argha Golui, who are you?",'utf-8');

//append in the file

// fs.appendFileSync('read.txt'," \n John Dahl");

// const data= fs.readFileSync('read.txt','utf-8');
// console.log(data);

fs.renameSync('read.txt','readwrite.txt');

