# Inventory Management System

## Project Structure

The project is organized into the following folders:

- **/controllers:** Contains controllers handling business logic and interactions with the server.
- **/models:** Defines the data structure.
- **/node_modules:** Contains project dependencies.
- **app.js:** Main project file.

## Technology Choices

- **React:** Used for the frontend due to its efficiency in creating interactive user interfaces.

## State Management

State is managed locally in React components to maintain simplicity in data management.

## Server Communication (API)

API calls are primarily made in React controllers, using functions from the `apiService` to interact with the server. Received data is processed and updated locally.

## Validation and Error Handling

Validation logic is implemented on the frontend to ensure correct data. Server errors are handled with clear messages.

## Data Storage

An in-memory data storage system is used to simplify implementation. Changes are reflected directly in local state.

## Developer Workflow

Developers are expected to follow naming conventions and maintain modularity when adding new features.

## Assumptions Made

- Stable connection to the API is assumed.
- Server data follows a specific format.

# Backend

## Technology Choices

- **NodeJS:** Chosen for backend development due to its non-blocking, event-driven architecture.
- **Express:** Used as the web application framework for its simplicity and flexibility.

## API Design

API endpoints are designed to support basic CRUD operations:

- **GET /books:** Retrieve the list of books.
- **POST /books:** Add a new book.
.

## In-Memory Data Storage

For simplicity, an in-memory data storage solution is implemented on the backend, eliminating the need for a database.

## Developer Notes

Developers should ensure that the backend is running and accessible before testing the frontend. Detailed API documentation can be generated to assist with integration and testing.


## Install Dependencies
Make sure you have Node.js installed on your machine. Then, navigate to the frontend and backend directories and run:


```bash 
npm install

```
## Frontend
To run the frontend, use the following command in the frontend directory:

```bash 
npm start

```

This will start the React application, accessible in your browser at http://localhost:3000.

## Backend
To run the backend, use the following command in the backend directory:

```bash 
node app

```

Or, if you have nodemon installed:
```bash 
nodemon app

```