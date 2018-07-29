import React, {Component} from "react"
import "./CTA.css"


const CTA = ({type, value, callback})=>{
  return (
    <button className={(type=="secondary")?"btn btn-secondary color-4 txt-dark col-6":"btn btn-primary color-1 col-6"} onClick={callback}>{value}</button>
  )
}

export default CTA