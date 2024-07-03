const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toDoRoutes = require('./routes/ToDoRoute');

const app = express();
const port = 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.json());

// Route'lar
app.use('/api/todo', toDoRoutes);

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
