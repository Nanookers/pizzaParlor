import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// const reduxStore = createStore(
//     combineReducers({
//       pizzaList
//     }),
//     applyMiddleware(logger)
//   );

ReactDOM.render(<App />, document.getElementById('root'));
