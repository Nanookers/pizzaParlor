import React from 'react';
import axios from 'axios'
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Menu from './Menu/Menu';
import Form from './Form/Form';
// import Header from '../Header/Header.jsx';
import Checkout from '../Checkout/Checkout.jsx';


function App() {

  return (
      <div className='App'>
        <Router>
        {/* <Header /> */}
        <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <ul>
                  <li>
                    <Link to='/'>Menu</Link>
                  </li>
                  <li>
                    <Link to='/form'>Form</Link>
                  </li>
                  <li>
                    <Link to='/Checkout'>Checkout</Link>
                  </li>
                </ul>
            </header>
        {/* <Router> */}

          <Route exact path='/'>
            <Menu />
          </Route>

          <Route exact path='/form'>
            <Form />
          </Route>

          <Route exact path='/checkout'>
            <Checkout />
          </Route>

        </Router>
      </div>
  );
}

export default App;
