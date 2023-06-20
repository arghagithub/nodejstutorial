//video 1: introduction on express js
// const express = require('express')
// const app = express()
// const port = 80

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about',(req,res)=>{
//     res.send("Hello world from about")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




//video 2: express js routing
// const express = require('express')
// const app = express()
// const port = 80

// app.get('/', (req, res) => {
//   res.send('Welcome to home page');
// })

// app.get('/about',(req,res)=>{
//     res.send("Welcome to about page")
// })

// app.get('/contact',(req,res)=>{
//     res.status(200).send("Welcome to contact page");
// })

// app.get('/temp',(req,res)=>{
//     res.send("Welcome to temperature page")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// video 3: send html and json data

// const express = require('express')
// const app = express()
// const port = 80

// app.get('/', (req, res) => {
//   res.write('<h1>Welcome to home page</h1>');
//   res.write('<h1>Welcome to home page again</h1>');
//   res.send();
// })

// app.get('/about',(req,res)=>{
//     res.send("Welcome to about page")
// })

// app.get('/contact',(req,res)=>{
//     res.status(200).send("Welcome to contact page");
// })

// app.get('/temp',(req,res)=>{
//     res.json(undefined)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// video 4: serve html,css file
// const path=require('path');
// const express = require('express')
// const app = express()
// const port = 80;

// const staticpath=path.join(__dirname,'public');
// // console.log(staticpath);

// app.use(express.static(staticpath));// ami home page e oi html,css r file tay deploy kore debo

// app.get('/hello',(req,res)=>{
//     res.send('Hello world');
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// video 6: template engine
// const path=require('path');
// const express = require('express')
// const app = express()
// const port = 80;

// app.set('view engine','hbs');
// app.get('/',(req,res)=>{
//     res.render('index',{
//         name:"Argha Golui"
//     });
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// video 7: customize the views directory
const path=require('path');
const express = require('express');
const app = express()
const port = 80;
const templatepath= path.join(__dirname,'templates');

app.set('view engine','hbs');
app.set('views',templatepath);
app.get('/',(req,res)=>{
    res.render('index',{
        name:"Argha Golui"
    });
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})