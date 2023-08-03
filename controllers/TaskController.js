const TaskModel = require('../models/TaskModel')


//get all tasks
module.exports.getTask = async (req,res) => {
    const Task = await TaskModel.find()
    res.send(Task)
}


//create task
module.exports.saveTask = async (req,res) => {
    const {title , description} = req.body
    TaskModel
    .create({title, description})
    .then((data)=>{
        console.log("Added task into the DB");
        console.log(data);
        res.send(data);
    })
    .catch((err)=> console.log(err));
}


//update task
module.exports.updateTask = async(req,res) =>{
    const {_id, title,description} = req.body
    TaskModel
    .findByIdAndUpdate(_id , {title,description})
    .then(()=> res.send("Updated Task"))
    .catch((err)=> console.log(err))
}

//delete tasks
module.exports.deleteTask = async(req,res) =>{
    const {_id} = req.body
    TaskModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Task"))
    .catch((err)=> console.log(err))
}