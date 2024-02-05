import React, { useState, useEffect } from 'react';
import ApiService from '../services/apiService';
import { Alert, Col, Row, Card, ListGroup } from 'react-bootstrap';

const BookList = ({ onAddBook }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const booksData = await ApiService.getAllBooks();
                setBooks(booksData);
                onAddBook(booksData);
            } catch (error) {
                console.error('Error getting books:', error);
            }
        };

        fetchData();
    }, [onAddBook]);

    return (
        <>
            <div>
                <h1>Books List</h1>
                {books.length === 0 ? (
                    <Alert>No books avaliables!</Alert>
                ) : (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {books.map((book) => (
                            <Col key={book.id}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Price: ${book.price}</ListGroup.Item>
                                            <ListGroup.Item>Stock: {book.stockQuantity}</ListGroup.Item>
                                            <ListGroup.Item>Year: {book.publishedYear}</ListGroup.Item>
                                            <ListGroup.Item>Genre: {book.genre}</ListGroup.Item>
                                            <ListGroup.Item>Desc: {book.description}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </>
    );
};

export default BookList;
