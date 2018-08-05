import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link

} from "react-router-dom"
import logo from './logo.svg';
import './App.css';


import Header from "./components/Header"
import LoginView from "./views/LoginView"

import Auth, {SaveAuthTokens} from "./auth/clientAuth"
const auth = new Auth()

const tokenSaver = ()=>(<SaveAuthTokens authInstance={auth}/>)

class App extends Component {
  constructor(props){
    super(props)
  }

  //this method redirects to auth0 login page to authenticate the user.
  //Once authenticated, the access token is recieved in the hash fragment of the response url


  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Route exact path="/" component={LoginView} />
          <Route path="/home" component={tokenSaver}/>
        </div>
      </Router>
    );
  }
}

export default App;
