import React, {Component} from "react"
import "./LoginView.css"
import Auth from "../auth/clientAuth"

import CTA from "../components/CTA"
class LoginView extends Component {

   //this method redirects to auth0 login page to authenticate the user.
  //Once authenticated, the access token is recieved in the hash fragment of the response url
  onNewProject(){
    const auth = new Auth()
    auth.login();
  }

  render(){
    return(
    <div className="loginView">
      
      <h1 className="col">Sortify</h1>
      <img className= "col logo" src="./img/Logo.png" alt="logo"/>
      <p className="col-12">Sortify is an online card sorting and voting app to help prioritize team tasks, help with UX information architecture and so on. </p>
      
      <CTA type="primary" value="+ Create new project" callback={this.onNewProject}/>
    </div>
    
    )
  }
}

export default LoginView