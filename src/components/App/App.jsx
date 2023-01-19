import React from 'react';
import axios from 'axios'
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './Form/Form';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import Form from '../Form/Form.jsx';
import Checkout from '../Checkout/Checkout.jsx';


function App() {

  return (
<<<<<<< HEAD
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Route exact path="/Form">
        <Form />
      </Route>
    </div>
    </Router>
=======

      <div className='App'>
        {/* <Header /> */}
        <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <ul>
                  <li>
                    <Link to='/'>Menu</Link>
                  </li>
                  <li>
                    <Link to='/form'><Form></Form></Link>
                  </li>
                  <li>
                    <Link to='/Checkout'>Menu</Link>
                  </li>
                </ul>
            </header>
        <Router>

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
  
>>>>>>> main
  );
}

export default App;
