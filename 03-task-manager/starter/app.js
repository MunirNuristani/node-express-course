const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectToDB = require('./db/connect')
//middleware

app.use(express.json())


app.get('/hello', (req, res) => {

})

app.use('/api/v1/tasks', tasks)


const port = 3000;

const startServer = async () => {
    try {
        await connectToDB()
        app.listen(port, console.log("Listening on port 3000"))

    } catch (error) {
        console.log("error encountered: ", error)
    }
}
startServer()