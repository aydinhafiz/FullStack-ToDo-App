const { Router } = require("express");
const {
  getToDO,
  saveToDo,
  deleteToDo,
  uptadeToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDO);
router.post("/save", saveToDo);
router.post("/update", uptadeToDo);
router.post("/delete", deleteToDo);

module.exports = router;
