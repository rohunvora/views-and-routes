const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/views/index.html");
})

app.get('/about', (req, res)=>{
  res.sendFile(__dirname + "/views/about.html");
})

app.get('/:input', (req, res)=>{
  res.sendFile(__dirname + "/views/blog-directory.html");
})

app.listen(8000, ()=>{
  console.log("listening to the port")
})
