const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toDoRoutes = require('./routes/ToDoRoute');

// MongoDB bağlantı dizesi
const mongoURI = 'mongodb+srv://hafizaydin01:aydin2006@todo-app.0n4i5ys.mongodb.net/todoapp?retryWrites=true&w=majority&appName=todo-app';

// Express uygulamasını başlat
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB'ye bağlan
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Route'lar
app.use('/api/todo', toDoRoutes);

// Sunucuyu dinlemeye başla
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
