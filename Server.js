const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const toDoRoutes = require("./routes/ToDoRoute");
const authRoutes = require("./routes/AuthRoute");
const authMiddleware = require("./middleware/auth");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());

app.set("trust proxy", true); // IP-Adresse für Proxy vertrauen

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/todos", authMiddleware, toDoRoutes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
