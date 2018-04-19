import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';
import * as BooksAPI from '../utils/BooksAPI';

/**
 * Main component for the application. It contains the routes that make it
 * possible to navigate throughout the different parts of the application.
 */
class App extends Component {
    state = {
        books: [],
        reading: [],
        toRead: [],
        read: []
    }

    /**
     * Get all books currently stored in the bookshelves and
     * set state based on each book's current shelf
     */
    getBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({
                    books: books,
                    reading: books.filter((book) => book.shelf === 'currentlyReading'),
                    toRead: books.filter((book) => book.shelf === 'wantToRead'),
                    read: books.filter((book) => book.shelf === 'read')
                });
            })
    }

    /**
     * After component mounts, get all books and update state
     */
    componentDidMount() {
        this.getBooks();
    }

    /**
     * Send API request to update book shelf and update state
     *
     * @param {object} book containing at minimum an `id` attribute
     * @param {string} shelf contains one of ["wantToRead", "currentlyReading", "read", "none"]
     */
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                book.shelf = shelf;
                this.updateBookStatus(book);
            })
    }

    /**
     * Update the state for all books and the bookshelves
     *
     * @param {object} book
     */
    updateBookStatus = (book) => {
        const books = this.state.books;
        const bookIndex = books
            .findIndex((item) => item.id === book.id);

        if (bookIndex !== -1) {
            if (book.shelf === 'none') {
                books.splice(bookIndex, 1);
            } else {
                books[bookIndex] = book;
            }
        } else {
            books.push(book);
        }

        this.setState({
            books: books,
            reading: books.filter((book) => book.shelf === 'currentlyReading'),
            toRead: books.filter((book) => book.shelf === 'wantToRead'),
            read: books.filter((book) => book.shelf === 'read')
        });
    };

    /**
     * Checks if book is on shelf in bookshelves and returns shelf or none
     *
     * @param {string} bookId
     * @returns {string} current shelf of book or none
     */
    getBookShelf = (bookId) => {
        let foundBook = this.state.books
            .find((book) => book.id === bookId);
        return foundBook ? foundBook.shelf : 'none';
    };

    render() {
        const { reading, toRead, read } = this.state;

        return (
            <div className="App">
                <Route exact path='/' render={() => (
                    <MyReads
                        reading={reading}
                        toRead={toRead}
                        read={read}
                        onUpdateShelf={this.updateShelf}
                    />
                )} />
                <Route path='/search' render={() => (
                    <SearchBooks
                        onUpdateShelf={this.updateShelf}
                        getBookShelf={this.getBookShelf}
                    />
                )} />
            </div>
        );
    }
}

export default App;
