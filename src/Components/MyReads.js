import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

/**
 * Stateless component that displays bookshelves for books
 * that the user is reading, wants to read, or has read.
 */
class MyReads extends React.Component {
    constructor(props) {
        super(props);
        this.shelves = [
            {title: 'Currently Reading'},
            {title: 'Want to Read'},
            {title: 'Read'}
        ];
    }

    static propTypes = {
        reading: PropTypes.array.isRequired,
        toRead: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    /**
     * Determines which array of books to return from props
     *
     * @param {object} shelf
     * @returns {array} of book objects
     */
    getBookList = (shelf) => {
        if (shelf.title === 'Currently Reading') {
            return this.props.reading;
        } else if (shelf.title === 'Want to Read') {
            return this.props.toRead;
        } else {
            return this.props.read;
        }
    }

    render () {
        const { onUpdateShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/*
                            Map through each of the book shelf types
                            and render the book shelf component
                        */}
                        {this.shelves.map((shelf, index) => (
                            <BookShelf
                                key={index}
                                title={shelf.title}
                                bookList={this.getBookList(shelf)}
                                onUpdateShelf={onUpdateShelf}
                            />
                        ))}
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
