const os = require('os');

const user = os.userInfo();
console.log("User: ", user)

const upTime = os.uptime();


console.log(`on time: ${upTime} seconds`)

const currentOS = {
    Name: os.type(),
    Release: os.release(),
    TotalMem: os.totalmem(),
    FreeMem: os.freemem(),
  }
  console.log("Current Operating System Info: ",currentOS)
  
