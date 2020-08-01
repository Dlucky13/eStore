import React from "react";
import  withBookstoreService  from '../hoc/with-bookstore-service'
import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";
import {Link, Route, Switch} from "react-router-dom";
import BookListItem from "../book-list-item/book-list-item";
import BookList from "../book-list/book-list";

const App = ({service}) => {
   return (
      <div>
         <ul>
            <li>
               <Link to='/home/'>Home</Link>
            </li>
            <li>
               <Link to='/card'>Card</Link>
            </li>
         </ul>
         <Switch>
            <Route path='/home/:id' component={BookListItem}/>
            <Route path='/home/' component={HomePage}/>
            <Route path='/card' component={CardPage}/>
         </Switch>

      </div>
   )
}

export default withBookstoreService()(App);