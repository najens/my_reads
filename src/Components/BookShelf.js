import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
 * Stateless component that displays a bookshelf
 */
class BookShelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        bookList: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render () {
        const { title, bookList, onUpdateShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*
                            Map through each book in the shelf
                            and render the book component
                        */}
                        {bookList.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onUpdateShelf={onUpdateShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
