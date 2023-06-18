const fs=require('fs');
const http= require('http');

const server=http.createServer();
const port=80;

server.on('request',(req,res)=>{
    //1st way
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(!err){
    //         res.end(data);
    //     }
    //     else{
    //         res.end('<h1>404 bad request</h1>');
    //     }
    // })



    //2nd way
    // const rstream=fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     res.end("page not found")
    //     console.log(err);
    // })



    //3rd way
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res);//je speed e read korbe, sei speed e dhana dhan write korbe

})

server.listen(port,'127.0.0.1',()=>{
    console.log(`server is listening on the port ${port}`);
})