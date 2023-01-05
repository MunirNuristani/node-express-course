const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectToDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//middleware


app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDB()
    app.listen(port, console.log("Listening on port 3000"))

  } catch (error) {
    console.log("error encountered: ", error)
  }
}
startServer()