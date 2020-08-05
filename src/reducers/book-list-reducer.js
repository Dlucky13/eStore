const updateBookList = (state, action) => {

   if(state === undefined) {
      return {
         books: [],
         loading: true,
         error: null
      }
   }

   switch (action.type) {
      case 'FETCH_BOOKS_REQUESTED':
         return {
            ...state,
            books: [],
            loading: true,
         };

      case 'FETCH_BOOKS_LOADED':
         return {
            ...state,
            books: action.payload,
            loading: false,
         };

      case 'FETCH_BOOKS_ERROR':
         return {
            books: [],
            loading: false,
            error: action.payload
         };
      default :
         return state.bookList;

   }
}

export default updateBookList