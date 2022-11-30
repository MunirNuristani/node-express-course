const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@nodeexpressproject.xemzlcm.mongodb.net/${process.env.PROJECTNAME}?retryWrites=true&w=majority`

const connectToDB = () => {
    mongoose.connect(connectionString)
}
module.exports = connectToDB