import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


/** TODO: import REDUX **/
import {  createStore, combineReducers, applyMiddleware } from 'redux';

// Importing the Provider component from react-redux. This
// plugs our React app into Redux-land:
import { Provider } from 'react-redux'


// Importing Redux logger to make life easier:
import logger from 'redux-logger'
/** TODO: Add REDUCERS */
const pizzaCart = (state=[{id: 1, order_id: 1, pizza_id: 1}], action ) => {
    if(action.type === 'SHOW_CART') {
        console.log('in the CREATE_ORDER if block:', action);

    }
    return state;
}




/** TODO: Create store */
const reduxStore = createStore(
    combineReducers({
        pizzaCart
    }),
        applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.


ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);



