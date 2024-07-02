const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


app.use(express.json());


mongoose.connect('mongodb://localhost:27017/lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/', (req, res) => {
  res.send('Hello, LMS!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
