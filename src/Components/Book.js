import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless component that displays a book's
 * thumbnail, title, and list of authors
 */
 const Book = ({ book, onUpdateShelf }) => {
     const thumbnail = book.imageLinks ?
         book.imageLinks.thumbnail :
         "http://books.google.com/books/content?id=fh2k4f5FvhIC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
     ;
     const options = [
        {
            val: 'currentlyReading',
            title: 'Currently Reading'
        } ,
        {
            val: 'wantToRead',
            title: 'Want to Read'
        },
        {
            val: 'read',
            title: 'Read'
        },
        {
            val: 'none',
            title: 'None'
        }
     ];
     return (
         <li>
             <div className="book">
                 <div className="book-top">
                     {/*
                         If the book has a thumbnail display it,
                         otherwise display an empty thumbnail
                     */}
                     <div
                         className="book-cover"
                         style={{
                             width: 128,
                             height: 193,
                             backgroundImage: `url(${thumbnail})`
                         }}
                     ></div>
                     <div className="book-shelf-changer">
                         {/*
                             When the book shelf is changed,
                             update the shelf and state
                         */}
                         <select
                             value={book.shelf}
                             onChange={(event) => (
                                 onUpdateShelf(book, event.target.value)
                             )}
                         >
                             <option value="invalid" disabled>
                                 Move to...
                             </option>
                             {/*
                                 For each option, if the option
                                 matches the current book shelf,
                                 display a tick mark next ito it
                             */}
                             {options.map((option, index) => (
                                book.shelf === option.val ?
                                    <option key={ index } value={ option.val }>
                                        &#10003;&nbsp;
                                        { option.title }
                                        &nbsp;&nbsp;
                                    </option> :
                                    <option key={ index } value={ option.val }>
                                        &nbsp;&nbsp;&nbsp;
                                        { option.title }
                                        &nbsp;&nbsp;
                                    </option>
                             ))}
                         </select>
                     </div>
                 </div>
                 <div className="book-title">{ book.title }</div>
                 <ol className="book-authors">
                     {/*
                         If the book has authors, display each author
                     */}
                     {book.authors ? book.authors.map((author, index) => (
                         <li key={ index }>{ author }</li>
                     )) : null}
                 </ol>
             </div>
         </li>
     );
 };

 Book.propTypes = {
     book: PropTypes.object.isRequired,
     onUpdateShelf: PropTypes.func.isRequired
 };

export default Book;
