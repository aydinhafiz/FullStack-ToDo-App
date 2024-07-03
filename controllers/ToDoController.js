const ToDoModel = require("../models/ToDoModel");

module.exports.getToDO = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  const ipAddress = req.ip;

  ToDoModel.create({ text, ipAddress }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  const ipAddress = req.ip;

  ToDoModel.findByIdAndUpdate(_id, { text, ipAddress })
    .then(() => res.status(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

// module.exports.deleteToDo = async (req, res) => {
//   const { _id } = req.body;
//   const ipAddress = req.ip;

//   ToDoModel.findByIdAndDelete(_id)
//     .then(() => res.status(201).send("Deleted Successfully..."))
//     .catch((err) => console.log(err));
// };
