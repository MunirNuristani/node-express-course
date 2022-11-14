const http = require('http')

const server =  http.createServer()

server.on('request', (req, res)=>{
    res.end("Server reached")
})

server.listen(5000)
