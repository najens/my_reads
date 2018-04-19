import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div
                                                        className="book-cover"
                                                        style={book.imageLinks ? {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                        } : {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url("http://books.google.com/books/content?id=fh2k4f5FvhIC&printsec=frontcover&img=1&zoom=1&source=gbs_api")`
                                                        }}
                                                    ></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(event) => onUpdateShelf(book, event.target.value)}>
                                                            <option value="invalid" disabled>Move to...</option>
                                                            {book.shelf === "currentlyReading" ?
                                                                <option value="currentlyReading">&#10003; Currently Reading &nbsp; &nbsp;</option> :
                                                                <option value="currentlyReading">&nbsp; &nbsp; Currently Reading &nbsp; &nbsp;</option>
                                                            }
                                                            {book.shelf === "wantToRead" ?
                                                                <option value="wantToRead">&#10003; Want to Read</option> :
                                                                <option value="wantToRead">&nbsp; &nbsp; Want to Read</option>
                                                            }
                                                            {book.shelf === "read" ?
                                                                <option value="read">&#10003; Read</option> :
                                                                <option value="read">&nbsp; &nbsp; Read</option>
                                                            }
                                                            {book.shelf === "none" ?
                                                                <option value="none">&#10003; None</option> :
                                                                <option value="none">&nbsp; &nbsp; None</option>
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <ol className="book-authors">
                                                    {book.authors ? book.authors.map((author, index) => (
                                                        <li key={index}>{author}</li>
                                                    )) : null}
                                                </ol>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {toRead.map((book) => (
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div
                                                        className="book-cover"
                                                        style={book.imageLinks ? {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                        } : {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url("http://books.google.com/books/content?id=fh2k4f5FvhIC&printsec=frontcover&img=1&zoom=1&source=gbs_api")`
                                                        }}
                                                    ></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(event) => onUpdateShelf(book, event.target.value)}>
                                                            <option value="invalid" disabled>Move to...</option>
                                                            {book.shelf === "currentlyReading" ?
                                                                <option value="currentlyReading">&#10003; Currently Reading &nbsp; &nbsp;</option> :
                                                                <option value="currentlyReading">&nbsp; &nbsp; Currently Reading &nbsp; &nbsp;</option>
                                                            }
                                                            {book.shelf === "wantToRead" ?
                                                                <option value="wantToRead">&#10003; Want to Read</option> :
                                                                <option value="wantToRead">&nbsp; &nbsp; Want to Read</option>
                                                            }
                                                            {book.shelf === "read" ?
                                                                <option value="read">&#10003; Read</option> :
                                                                <option value="read">&nbsp; &nbsp; Read</option>
                                                            }
                                                            {book.shelf === "none" ?
                                                                <option value="none">&#10003; None</option> :
                                                                <option value="none">&nbsp; &nbsp; None</option>
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <ol className="book-authors">
                                                    {book.authors ? book.authors.map((author, index) => (
                                                        <li key={index}>{author}</li>
                                                    )) : null}
                                                </ol>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book) => (
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div
                                                        className="book-cover"
                                                        style={book.imageLinks ? {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                        } : {
                                                            width: 128,
                                                            height: 193,
                                                            backgroundImage: `url("http://books.google.com/books/content?id=fh2k4f5FvhIC&printsec=frontcover&img=1&zoom=1&source=gbs_api")`
                                                        }}
                                                    ></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(event) => onUpdateShelf(book, event.target.value)}>
                                                            <option value="invalid" disabled>Move to...</option>
                                                            {book.shelf === "currentlyReading" ?
                                                                <option value="currentlyReading">&#10003; Currently Reading &nbsp; &nbsp;</option> :
                                                                <option value="currentlyReading">&nbsp; &nbsp; Currently Reading &nbsp; &nbsp;</option>
                                                            }
                                                            {book.shelf === "wantToRead" ?
                                                                <option value="wantToRead">&#10003; Want to Read</option> :
                                                                <option value="wantToRead">&nbsp; &nbsp; Want to Read</option>
                                                            }
                                                            {book.shelf === "read" ?
                                                                <option value="read">&#10003; Read</option> :
                                                                <option value="read">&nbsp; &nbsp; Read</option>
                                                            }
                                                            {book.shelf === "none" ?
                                                                <option value="none">&#10003; None</option> :
                                                                <option value="none">&nbsp; &nbsp; None</option>
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <ol className="book-authors">
                                                    {book.authors ? book.authors.map((author, index) => (
                                                        <li key={index}>{author}</li>
                                                    )) : null}
                                                </ol>
                                            </div>
                                        </li>
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
