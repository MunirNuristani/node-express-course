const express = require('express')
const app = express()
app.use(express.json())

const consoleLog = (req, res, next) =>{
    console.log('the middleware was reached and logged this line')
    console.log(req.body)
    next()
}

app.get('/', consoleLog, (req, res)=>{
    res.status(200).json({name:'Munir Nuristani', job:"intern"})
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001....')
})