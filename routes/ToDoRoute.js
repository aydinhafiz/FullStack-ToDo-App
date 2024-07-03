const { Router } = require("express");
const {
  getToDO,
  saveToDo,
  deleteToDo,
  uptadeToDo,
} = require("../controllers/ToDoController");
const logIP = require("../middlewares/logIP");

const router = Router();

router.get("/", getToDO);
router.post("/save", logIP, saveToDo);
router.post("/update", logIP, uptadeToDo);
router.post("/delete", logIP, deleteToDo);

module.exports = router;
