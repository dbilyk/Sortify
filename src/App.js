import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link

} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import LoginView from "./containers/views/LoginView"


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/login" component={LoginView} />
      </div>
      </Router>
    );
  }
}

export default App;
