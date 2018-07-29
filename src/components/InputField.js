import React from "react"
import "./InputField.css"


const InputField = ({type, name, callback})=>{
  return(
    <input className="col-12 form-control text-input" type={type} onChange = {callback} name={name}/>
  )
}

export default InputField