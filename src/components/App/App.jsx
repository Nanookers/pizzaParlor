import React from 'react';
import axios from 'axios'
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// import Header from '../Header/Header.jsx';
import Menu from './Menu/Menu';
import Form from './Form/Form';
import Checkout from '../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';

function App() {

  return (
      <div className='App'>
        <Router>
        {/* <Header /> */}
        <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <ul>
                  <li>
                    <Link to='/menu'>Menu</Link>
                  </li>
                  <li>
                    <Link to='/form'>Form</Link>
                  </li>
                  <li>
                    <Link to='/checkout'>Checkout</Link>
                  </li>
                  <li>
                    <Link to='/admin'>Admin</Link>
                  </li>
                </ul>
            </header>
          <Route exact path='/'>
            <Menu />
          </Route>

          <Route exact path='/form'>
            <Form />
          </Route>

          <Route exact path='/checkout'>
            <Checkout />
          </Route>

          <Route exact path='/admin'>
            <Admin />
          </Route>

        </Router>
      </div>
  );
}

export default App;
