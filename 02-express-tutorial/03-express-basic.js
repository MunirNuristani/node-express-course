const express = require('express')
const app = express();

app.get("/", (req, res)=>{
    console.log("Home Page")
    res.status(200).send("Home Page")
})

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})
app.all('*', (req, res)=>{
    res.status(404).send("<h1> Resourse not found </h1>")
})




app.listen(5001, ()=>{
    console.log("listening on port 5001")
})



//app.get
//app.ppost
//app.put 
//app.delete
//app.all
//app.use
//app.listen