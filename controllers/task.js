const TaskModel = require('../models/task');
const Task = TaskModel.task;

exports.addTask = (req, res, next) => {
  const description = req.body.description;
  const category = req.body.category;
  const dueDate = req.body.dueDate;
  const recurringDate = req.body.recurringDate;
  const priority = req.body.priority;
  const subTask = req.body.subTask;
  const notes = req.body.notes;

  task = new Task({
    description,
    category,
    dueDate,
    recurringDate,
    priority,
    subTask,
    notes
  });

  task.save((err, task) => {
    if(err) { return next(err); }
    Task.find({}, null, (err, tasks) => {
      res.json({tasks});
    });
  });
};

exports.getTasks = (req, res, next) => {
  Task.find({}, null, (err, tasks) => {
    if(err) { return next(err); }
    res.json({tasks});
  });
};
