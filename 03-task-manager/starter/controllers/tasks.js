const Task = require('../modals/tasks')


const getAllTasks = async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({ task })

} 

const createTask = async(req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = async(req, res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req, res)=>{
    res.json({update: req.params.id})
}

const deleteTask = (req, res)=>{
    res.json({Deleted: req.params.id })
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}