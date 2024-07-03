const { Router } = require("express");
const {
  getToDO,
  saveToDo,
  // deleteToDo,
  updateToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDO);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
// router.post("/delete", deleteToDo);

module.exports = router;
