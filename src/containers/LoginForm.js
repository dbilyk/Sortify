import React, {Component} from "react"
import "./LoginForm.css"

import InputField from "../components/InputField"
import CTA from "../components/CTA"

class LoginForm extends Component {
  constructor(props){
    super(props)

  }

  onChange = (e)=>{
    console.log(e.target.value)
  }

  onLogin = ()=> {
    console.log("Sign In")
  }

  onSignup = () => {
    console.log("sign up")
  }

  render(){
    return(
      <div className="loginForm color-3 col-md-4">
        <p className="col-12 text-left">Login to your account to continue...</p>
        <div className="form-group">
          <p>email:</p>
          <InputField type="email" name="email" callback={this.onChange} />
          <p>password:</p>
          <InputField type="password" name="password" callback={this.onChange} />

          <CTA type="primary" value="Log In" callback={this.onLogin} />
          <CTA type="secondary" value="Sign Up" callback={this.onSignup} />
        </div>
      </div>
    )
  }

}

export default LoginForm