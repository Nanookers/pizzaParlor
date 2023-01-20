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

const pizzaCart = (state=[{id: 1, order_id: 1, pizza_id: 1}], action ) => {
    if(action.type === 'SHOW_CART') {
        console.log('in the CREATE_ORDER if block:', action);

    }
    return state;
}

//orders for admin
const adminOrders = (state = [], action) => {
    console.log('on admin page')
    if (action.type === 'GET_ADMIN_ORDERS') {
        //return a copy of origin array since this array can't be mutated
        //this copy of the array can be added to/changed
        return [...state, action.payload]
    }
    return state;
}
 
const reduxStore = createStore(
    combineReducers({
        pizzaList,
        pizzaCart, 
        adminOrders
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
