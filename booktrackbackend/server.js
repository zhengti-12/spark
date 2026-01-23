const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let bookstorage =[];

app.get('/api/books', (req, res) => {
  res.json(bookstorage);
});

app.post('/api/books', (req, res) => {
  const newbook = req.body;
  bookstorage.push(newbook);
  res.status(201).json({ message: "Book saved!" });
});

app.listen(5001)