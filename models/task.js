const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: String,
  category: {type: Number, enum:[1,2,3,4,5]},
  dueDate: {type: Date, default: Date.now},
  recurringDate: {type: Date},
  priority: {type: String, enum:["low","med","high"]},
  subTask: {type: String},
  notes: {type: String}
});

const task_model = mongoose.model('task', taskSchema);

module.exports.task = task_model;
