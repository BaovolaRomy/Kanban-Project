const { Task } = require('../models');
const sanitizeHtml = require("sanitize-html");

const taskController = {

    listTasks: async function (req, res) {
     const listTasks = await Task.findAll();
     res.status(200).json(listTasks);
    },

    createTask: async function(req, res){
        const name = req.body.name;

        if (! name || typeof name !== "string") {
            return res.status(400).json({ error: "Missing body parameter: name" });
        };

        const task = await Task.create({
            name: sanitizeHtml(name),
          });
    res.status(201).json(task);
    },

    updateTask: async function(req, res){
        const name = req.body.name;
        const taskId = parseInt(req.params.id);

        if (name === undefined) {
            return res.status(400).json({ "error": "Invalid body. Should provide at least a 'name' property" });
          }

        if (name && typeof name !== "string") {
            return res.status(400).json({ "error": "Invalid body parameter 'name'. Should provide a string." });
        }

        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ error: "Task not found. Please verify the provided id." })
        }

        if (name) {
            task.name = name;
        }

        await task.save();
        res.status(200).json(task);
    },

    deleteTask : async function(req, res){
        const taskId = parseInt(req.params.id);

        if (isNaN(taskId)) {
            return res.status(404).json({ error: "Task not found. Please verify the provided id." });
        };

        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ error: "Task not found. Please verify the provided id." });
        }
        await task.destroy();
        res.status(204).end(); 
        
    }
};

module.exports = taskController;
