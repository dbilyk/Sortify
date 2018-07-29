import React from "react"
import "./Header.css"
import {
  Link
} from "react-router-dom"

const Header = ()=>{
  return(
    <div className="header color-4 row">
      <h3 className="appTitle col-11"><Link to="/">Sortify</Link></h3>
      <div className='navLink col-1 align-self-center'><Link to="/login">Login</Link></div>

    </div>
  )
}

export default Header