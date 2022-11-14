//search for other ways to do it, and found this method in Node.js documentation. 
const fs = require('fs').promises
function lines(){
    let str = ''
    for(let i =1; i<=10; i++){
        str = str.concat('This is line '+ i + '\n')
    }
    return str
}

async function makeFile () {
    let filehandle = null
    try {
       filehandle = await fs.open("./content/practice2.txt", 'r+')
       await filehandle.write(lines())
    }
    catch (error) {
        console.log("Encourntered Error", error)
    }
    finally {
        if (filehandle){
            await filehandle.close()
        }
    }
}

makeFile()