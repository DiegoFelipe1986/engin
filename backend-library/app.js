const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksController = require('./controllers/booksController');

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

app.post('/api/books', booksController.addBook);
app.get('/api/books', booksController.getAllBooks);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });