import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

import reducer from "./reducers/root-reducer";

const logMiddleware = (store) => (dispatch) => (action) => {
   console.log(action.type);
   return dispatch(action)
};

const stringMiddleware = (store) => (dispatch) => (action) => {
   if (typeof action === 'string') {
      return dispatch( {
         type: action
      });
   }

   return dispatch(action)
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware,stringMiddleware,logMiddleware));

const delayedAC = (timeout) => (dispatch) => {
   setTimeout(() => dispatch({
      type: 'DELAYED_AC'
   }), timeout);
};


store.dispatch(delayedAC(2000))

export default store;