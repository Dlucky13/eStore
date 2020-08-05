
const updateCartItems = (index, newItem, items) => {

   if(newItem.count === 0) {
      return [
         ...items.slice(0, index),
         ...items.slice(index + 1)
      ]
   }

   if (~index) {
      return [
         ...items.slice(0, index),
         newItem,
         ...items.slice(index + 1)
      ];
   }
   return [
      ...items,
      newItem
   ]
}

const updateCartItem = (book, item = {}, quantity) => {

   const {
      id = book.id,
      count = 0,
      title = book.title,
      total = 0 } = item

   return {
      id,
      title,
      count: count + quantity,
      total: total + book.price * quantity
   };
};

const updateOrder = (state , bookId, quantity) => {
   const { bookList: { books }, shoppingCart: { cartItems } } = state;
   const book = books.find( book => book.id === bookId);
   const itemIndex = cartItems.findIndex( item => item.id === bookId);
   const item = cartItems[itemIndex];

   const newItem = updateCartItem(book, item, quantity);

   return {
      orderTotal: 0,
      cartItems: updateCartItems(itemIndex, newItem, cartItems)
   }
}


const updateShoppingCart = (state, action) => {
   if (state === undefined) {
      return {
         cartItems: [],
         orderTotal: 0
      }
   }

   switch(action.type) {
      case 'BOOK_ADDED_TO_CART':
         return updateOrder(state, action.payload, 1)

      case 'BOOK_COUNT_DECREASE':
         return updateOrder(state, action.payload, -1)

      case 'BOOK_DELETE_FROM_CART':
         const item = state.shoppingCart.cartItems.find( item => item.id === action.payload)
         return updateOrder(state, action.payload, -item.count)
      default:
         return state.shoppingCart
   }
}

export default updateShoppingCart;