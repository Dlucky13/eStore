import React from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";

import {bindActionCreators} from "redux";
import './book-list.css'
import withBookstoreService from '../hoc/with-bookstore-service'
import {bookAddedToCart, fetchBooks} from "../../actions/root-actions";
import compose from "../../utils/compose";
import Loader from "../loader/loader";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({books, onAddedToCart}) => {
   return (
      <ul className='book-list'>
         {
            books.map( (book) => {
               return (
                  <li key={book.id}>
                     <BookListItem
                        book={book}
                        onAddedToCart={() => onAddedToCart(book.id)}/>
                  </li>
               )
            })
         }
      </ul>
   )
}

class BookListContainer extends React.Component {

   componentDidMount() {
      this.props.fetchBooks()
   }

   render () {
      const {loading, error, books, onAddedToCart} = this.props;

      if (loading) return <Loader/>
      if (error) return <ErrorIndicator/>

      return <BookList books={books} onAddedToCart={onAddedToCart}/>
   }
}

const mapStateToProps = ({bookList :{books, loading, error}}) => {
   return {
      loading, books, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
   const { service } = ownProps
   return bindActionCreators({
      fetchBooks: fetchBooks(service),
      onAddedToCart: bookAddedToCart
   }, dispatch)
}

export default compose (
   withBookstoreService(),
   connect(mapStateToProps,mapDispatchToProps)
)(BookListContainer);


