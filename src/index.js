import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

<<<<<<< HEAD
const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZALIST':
        return action.payload; 

        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
=======

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



>>>>>>> e572995a1f22cccf24c74d4e6f0a624f9651a6f4
