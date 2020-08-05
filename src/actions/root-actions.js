
const booksLoaded = (newBooks) => {
   return {
      type: 'FETCH_BOOKS_LOADED',
      payload: newBooks
   };
};

const booksRequested = () => {
   return {
         type: 'FETCH_BOOKS_REQUESTED'
      }
   }

const booksError = (error) => {
   return {
      type: 'FETCH_BOOKS_ERROR',
      payload: error
   }
}

const bookAddedToCart = (bookId) => {
   return {
      type: 'BOOK_ADDED_TO_CART',
      payload: bookId
   }
}

const bookCountDecrease = (bookId) => {
   return {
      type: 'BOOK_COUNT_DECREASE',
      payload: bookId
   }
}

const bookDeleteFromCart = (bookId) => {
   return {
      type: 'BOOK_DELETE_FROM_CART',
      payload: bookId
   }
}


const fetchBooksOld = (service, dispatch) => () => {
   dispatch(booksRequested());
   service.getBooks()
      .then( (data)=> dispatch(booksLoaded(data)) )
      .catch( (err) => dispatch(booksError(err)) )
}

const fetchBooks = (service) => () => (dispatch) => {
   dispatch(booksRequested());
   service.getBooks()
      .then( (data)=> dispatch(booksLoaded(data)) )
      .catch( (err) => dispatch(booksError(err)) )
};

export {
   fetchBooks,
   bookAddedToCart,
   bookCountDecrease,
   bookDeleteFromCart
};