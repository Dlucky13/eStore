import React from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";

import withBookstoreService from '../hoc/with-bookstore-service'
import {booksLoaded} from "../../actions/root-actions";
import compose from "../../utils/compose";

class BookList extends React.Component {

   componentDidMount() {
      const { service, booksLoaded } = this.props;
      const data = service.getBooks();
      booksLoaded(data);
   }

   render () {
      const { books } = this.props;
      return (
         <ul>
            {
               books.map( (book) => {
                  return (
                     <li key={book.id}>
                        <BookListItem book={book}/>
                     </li>
                  )
               })
            }
         </ul>
      )
   }
}

const mapStateToProps = ({books}) => {
   return { books };
}

const mapDispatchToProps = {
   booksLoaded
}

export default compose (
   withBookstoreService(),
   connect(mapStateToProps,mapDispatchToProps)
)(BookList);


