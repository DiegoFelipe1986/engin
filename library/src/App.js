import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/ui/Navbar';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = async (newBook) => {
    try {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (error) {
      console.error('Error al agregar el libro:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row className='mt-5'>
          <Col md={6}>
            <BookList onAddBook={handleAddBook} />
          </Col>
          <Col md={6}>
            <BookForm onAddBook={handleAddBook} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
