import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context'

const WithBookstoreService = () => (Wrapped) => {

   return (props) => {
      return(
         <BookstoreServiceConsumer>
            {
               (bookstoreService) => {
                  return <Wrapped {...props} service={bookstoreService}/>
               }
            }
         </BookstoreServiceConsumer>
      );
   }
};

export default WithBookstoreService;