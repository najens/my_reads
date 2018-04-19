import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless component that displays a book's
 * thumbnail, title, and list of authors
 */
class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render () {
        const { book, onUpdateShelf } = this.props;

        return (
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
        );
    }
}

export default Book;
