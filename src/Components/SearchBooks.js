import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../utils/BooksAPI';
import Book from './Book';
import { searchTerms } from '../utils/SearchTerms';
import { DebounceInput } from 'react-debounce-input';

/**
 * Component that handles search input and renders the
 * collection of books returned by the API request.
 */
class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchBooks: [],
            validQuery: false
        };
    }
    static propTypes = {
        onUpdateShelf: PropTypes.func.isRequired,
        getBookShelf: PropTypes.func.isRequired
    }

    /**
     * Checks if query contains part of or
     * exact match of available search terms.
     *
     * @param {string} query
     * @returns {boolean}
     */
    isValidQuery = (query) => {
        if (query === '') {
            return false
        } else {
            const availableSearchTerms = searchTerms.map((term) => (
                term.toLowerCase().includes(query.toLowerCase())
            ));
            return availableSearchTerms.includes(true);
        }
    }

    /**
     * Updates state to re-render component as query changes.
     * If the query is valid an api request will be sent.
     *
     * @param {string} query
     */
    updateQuery = (query) => {
        if (this.isValidQuery(query)) {
            this.setState(() => ({
                query: query,
                validQuery: true
            }));
            this.searchBooks(query);
        } else {
            this.setState(() => ({
                query: query,
                searchBooks: [],
                validQuery: false
            }));
        }
    }

    /**
     * Sends an api request to get books that match
     * the query, gets the shelf for each book, and sets state
     *
     * @param {string} query
     * @returns {array} collection of book objects
     */
    searchBooks(query) {
        search(query)
            .then((searchResults) => {
                if (searchResults.error) {
                    return;
                }
                let resultsWithShelves = searchResults.map((book) => {
                    book.shelf = this.props.getBookShelf(book.id);
                    return book;
                })
                this.setState({
                    searchBooks: resultsWithShelves
                });
            })
    }

    render () {
        const { query, searchBooks, validQuery } = this.state;
        const { onUpdateShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                            When query changes update
                            state and send API request
                        */}
                        <DebounceInput
                            type='text'
                            placeholder='Search by title or author'
                            value={ query }
                            onChange={(event) => (
                                this.updateQuery(event.target.value)
                            )}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    {/*
                        If the query is valid, display collection of book
                        results, otherwise, display invalid query message
                    */}
                    {validQuery ? (
                        <ol className="books-grid">
                            {/*
                                Map over each book and
                                display book component
                            */}
                            {searchBooks.map((book) => (
                                <Book
                                    key={ book.id }
                                    book={ book }
                                    onUpdateShelf={ onUpdateShelf }
                                />
                            ))}
                        </ol>
                    ) : <div className="books-grid">
                            Please enter a valid query
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SearchBooks;
