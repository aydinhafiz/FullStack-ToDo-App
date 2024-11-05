const ToDoModel = require("../models/ToDoModel");

module.exports.getToDO = async (req, res) => {
  try {
    const userId = req.userId;
    const toDo = await ToDoModel.find({ userId });
    res.send(toDo);
  } catch (err) {
    res.status(500).send("Error fetching todos");
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  const ipAddress = req.ip;
  const userId = req.userId;

  try {
    const todo = await ToDoModel.create({ text, ipAddress, userId });
    res.send(todo);
  } catch (err) {
    res.status(500).send("Error adding todo");
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  const ipAddress = req.ip;

  ToDoModel.findByIdAndUpdate(_id, { text, ipAddress })
    .then(() => res.status(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  const ipAddress = req.ip;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.status(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
