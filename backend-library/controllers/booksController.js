const bookModel = require('../models/bookModel');
const validator = require('validator');


const validateBook = (book) => {
  if (
    !book ||
    typeof book.title !== 'string' ||
    typeof book.author !== 'string' ||
    typeof book.price !== 'number' ||
    typeof book.stockQuantity !== 'number'
  ) {
    throw new Error('Invalid book data');
  }
};


const addBook = (req, res) => {
  try {
    const newBook = req.body;
    validateBook(newBook);

    const addedBook = bookModel.addBook(newBook);
    res.status(201).json(addedBook);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(400).json({ error: 'Invalid book data' });
  }
};

const getAllBooks = (req, res) => {
  try {
    const books = bookModel.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error getting books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addBook,
  getAllBooks,
};