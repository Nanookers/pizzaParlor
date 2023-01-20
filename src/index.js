import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZALIST':
        return action.payload; 

        default:
            return state;
    }
}

// const pizzaCart = (state = [], action ) => {
//     if(action.type === 'FETCH_CART') {
//         console.log('in the CREATE_ORDER if block:', action);

//     }
//     return state;
// }

const orderList = (state= {}, action) => {
    if(action.type === "FETCH_CART"){
        return action.payload[0];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaList,
        // pizzaCart, 
        orderList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
