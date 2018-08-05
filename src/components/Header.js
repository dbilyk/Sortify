import React from "react"
import "./Header.css"
import CTA from "./CTA"
import {
  Link
} from "react-router-dom"

const Header = ({callback})=>{
  return(
    <div className="header color-4 row align-items-center">
    <div className="col-6 col-md-9">
      <h3 className="appTitle text-left"><Link to="/">Sortify</Link></h3>
    </div>
      <div className='navLink col-6 col-md-3 text-right'>
        <CTA type="primary" value="Log In or Sign Up" callback={callback}>Log In</CTA>
      </div>


    </div>
  )
}

export default Header