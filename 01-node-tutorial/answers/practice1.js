
const { writeFile} = require("fs")
const os = require('os');
const sentence = require('./practice2')


writeFile( "./content/practice.txt", `${sentence}. By: ${os.userInfo().username}`, (err, res)=>{
    if (err){
        console.log("Could not write the file, Error occurd.")
        return
    } else{
        console.log("wrote file successfully")
    }
})
