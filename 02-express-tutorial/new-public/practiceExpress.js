const express = require('express')
const path = require('path')
const app = express()

 app.get("/", (req, res)=>{
     res.sendFile(path.join(__dirname,"./index.html"))
})

app.get('/sample', (req, res)=>{
    res.send("This is working just fine")
})

app.get('*', (req, res)=>{
    res.status(404).send("<h1>Resourse Not Found </h1>")
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000...")
})