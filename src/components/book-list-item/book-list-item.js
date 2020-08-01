import React from 'react';

const BookListItem = ({book}) => {

   return (
      <>
         <h3>{book.title}</h3>
         <span>{book.author}</span>
      </>
   )
}

export default BookListItem;