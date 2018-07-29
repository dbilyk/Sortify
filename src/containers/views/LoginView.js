import React, {Component} from "react"
import "./LoginView.css"

import LoginForm from "../LoginForm"

class LoginView extends Component {
  render(){
    return(
    <div className="loginView row">
      <div className="col-md-8">
        <h5>What is Sortify?</h5>
        <p>Sortify is an online card sorting and voting app to help prioritize team tasks, help with UX information architecture, and such. </p>
      </div>
      
      <LoginForm />
    </div>
    )
  }
}

export default LoginView