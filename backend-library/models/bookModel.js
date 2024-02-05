const inMemoryBooks = [];

const addBook = (newBook) => {
  const addedBook = { id: inMemoryBooks.length + 1, ...newBook };
  inMemoryBooks.push(addedBook);
  return addedBook;
};

const getAllBooks = () => {
  return inMemoryBooks;
};

module.exports = {
  addBook,
  getAllBooks,
};
