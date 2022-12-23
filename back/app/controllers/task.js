const { Task } = require('../models');

const taskController = {

    listTasks: async function (req, res) {
     const listTasks = await Task.findAll();
     res.status(200).json(listTasks);
    }
};

module.exports = taskController;
