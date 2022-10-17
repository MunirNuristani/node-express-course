const amt = 22

console.log(
    `This node app will print: ${amt < 10 ?
        "Small Number" :
        "Large Number"
    }`)

if (amt < 10) {
    console.log('Small Number')
} else {
    console.log('Large Number')
}