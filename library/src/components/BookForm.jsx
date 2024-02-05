import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from '../services/apiService';

const BookForm = () => {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        price: 0.0,
        stockQuantity: 0,
        description: '',
        genre: '',
        publishedYear: 0,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const processedValue = type === 'number' ? parseFloat(value) : value;
        setNewBook({ ...newBook, [name]: processedValue });
    };


    const onAddBook = async () => {
        try {
            const addedBook = await ApiService.addBook(newBook);

            setNewBook({
                title: '',
                author: '',
                price: 0,
                stockQuantity: 0,
                description: '',
                genre: '',
                publishedYear: 0,
            });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleAddBook = () => {
    
        const areFieldsFilled = Object.values(newBook).every((value) => value !== '');
    
        if (!areFieldsFilled) {
          setErrorMessage('All fields are required');
          return;
        }
        onAddBook(newBook);
    
        setNewBook({
          title: '',
          author: '',
          price: 0,
          stockQuantity: 0,
          description: '',
          genre: '',
          publishedYear: 0,
        });
    
        setErrorMessage('');
      };

    return (
        <>
            <h2>Add new book</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter author"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                value={newBook.price}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formStockQuantity">
                            <Form.Label>Stock Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter stock quantity"
                                name="stockQuantity"
                                value={newBook.stockQuantity}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                name="description"
                                value={newBook.description}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter genre"
                                name="genre"
                                value={newBook.genre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formPublishedYear">
                            <Form.Label>Published Year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter published year"
                                name="publishedYear"
                                value={newBook.publishedYear}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button  className="mt-2" variant="primary" onClick={handleAddBook}>
                    Add Book
                </Button>
                {errorMessage && <Alert className="mt-2" variant="danger">{errorMessage}</Alert>}
            </Form>
        </>
    );
};

export default BookForm;
