import React, {Component} from "react"
import "./CTA.css"


const CTA = ({type, value, callback})=>{
  return (
    <div className="row">
    <button className={(type=="secondary")?"col btn btn-secondary txt-dark":"col btn btn-primary"} onClick={callback}>{value}</button>
    </div>
  )
}

export default CTA