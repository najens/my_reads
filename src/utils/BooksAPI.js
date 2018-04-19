
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/** Gets a single book currently stored in the bookshelves.
 *
 * @param {string} bookId
 * @returns {object} of the book's attributes
 */
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)


/** Gets a collection of all books currently stored in the bookshelves.
 *
 * @returns {array} containing a collection of book objects
 */
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

/**
 * Updates the shelf of a book stored in the bookshelves.
 *
 * @param {object} book containing at minimum an `id` attribute
 * @param {string} shelf contains one of ["wantToRead", "currentlyReading", "read", "none"]
 * @returns {object} containing the response data of the POST request
 */
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

/**
 * Gets a collection of book objects based off the query parameter
 *
 * @param {string} query must contain part of or exact string of one of the allowed search terms
 * @returns {array} of no more than 20 results containing a collection of book objects
 */
export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
