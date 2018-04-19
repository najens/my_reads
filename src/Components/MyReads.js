import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

/**
 * Stateless component that displays bookshelves for books
 * that the user is reading, wants to read, or has read.
 */
class MyReads extends React.Component {
    static propTypes = {
        reading: PropTypes.array.isRequired,
        toRead: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render () {
        const { reading, toRead, read, onUpdateShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {reading.map((book) => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {toRead.map((book) => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book) => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default MyReads;
