const fs=require('fs');
const http= require('http');

const server=http.createServer();
const port=80;

server.on('request',(req,res)=>{
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(!err){
    //         res.end(data);
    //     }
    //     else{
    //         res.end('<h1>404 bad request</h1>');
    //     }
    // })
    const rstream=fs.createReadStream('input.txt');
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        res.end("page not found")
        console.log(err);
    })
})

server.listen(port,'127.0.0.1',()=>{
    console.log(`server is listening on the port ${port}`);
})