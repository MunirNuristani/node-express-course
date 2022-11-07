const EventEmitter = require('events')
const customEmitter = new EventEmitter();

customEmitter.on('response', (userName, id, grade)=> {
    console.log(`Student name: ${userName} \nStudent age: ${id} \nStudent grade: ${grade}`)
})

customEmitter.emit('response', 'Alina', 5, 2)
customEmitter.emit('response', 'Musa', 10, 5)