const Task = require('../models/Tasks');

class TasksController{
    async store(req, res){
        const { name, hour } = req.body;

        const task = await Task.create(name, hour);

        return res.json({ task });
    }

    async index(req, res){
        const tasks = await Task.find();

        return res.json({tasks});
    }

    async destroy(req, res){
        
    }
}

module.exports = new TasksController();