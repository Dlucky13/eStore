import React from "react";
import  withBookstoreService  from '../hoc/with-bookstore-service'
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import { Route, Switch} from "react-router-dom";
import ShopHeader from "../shop-header/shop-header";
import './app.css'

const App = ({service}) => {
   return (
      <main role='main' className='container'>
         <ShopHeader numItems={5} total={230}/>
         <Switch>
            <Route path='/home/' component={HomePage}/>
            <Route path='/cart' component={CartPage}/>
         </Switch>
      </main>
   )
}

export default withBookstoreService()(App);