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

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
