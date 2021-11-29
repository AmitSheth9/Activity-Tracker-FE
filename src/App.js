import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,  
  Routes,
} from 'react-router-dom';
import InputForm from './InputForm';
import './App.css';


//create page which takes data from getAll population change data and displays it nicely
//make a population change component 
export default class App extends Component {
  render() {
    return (
        <div>
          <Router>
          {/*<header className="nav-bar">
            <NavLink exact activeClassName="active-link" to="/">
              Population Change
            </NavLink>
            </header>
          */}
            <Routes>
            <Route path="/" element={<InputForm/>}/>
            </Routes>
        </Router>
        </div>
    );
  }
  }

