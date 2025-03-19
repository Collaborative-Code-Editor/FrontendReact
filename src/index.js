import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Component/Login.js';
import Login from './Component/Login.js';
import Dashboard from './Component/Dashboard.js';
import Repl from './Component/Repl.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Login/>
  // </React.StrictMode>

  <Router>
    <Routes>
      <Route path = '/' element = {<Login/>}></Route>
      <Route path = '/dashboard' element = {<Dashboard/>}></Route>
      <Route path='/repl' element = {<Repl/>}></Route>
    </Routes>
  </Router>
);
