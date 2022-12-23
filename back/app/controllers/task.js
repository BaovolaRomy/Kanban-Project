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
    }
};

module.exports = taskController;
