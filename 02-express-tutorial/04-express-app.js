const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar-app'))


// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname,"./navbar-app/index.html"))
// })

// app.get('/about', (req, res)=>{
//     res.send("hi")
// })

app.get('*', (req, res)=>{
    res.status(404).send("<h1>Resourse Not Found </h1>")
})

app.listen(5001, ()=>{
    console.log("Server is listening on port 5001...")
})