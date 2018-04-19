import React, { Component } from 'react';
import * as BooksAPI from '.utils/BooksAPI';

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
                })
            })
    }

    /**
     * After component mounts, get all books and update state
     */
    componentDidMount() {
        this.getBooks()
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
                book.shelf = shelf
                this.updateBookStatus(book)
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

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
