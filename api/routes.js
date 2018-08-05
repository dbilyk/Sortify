const express = require("express")
const router = express.Router()
const API = require("./models")
const utils = require("./apiUtils")
const tokenValidation = require("../server/serverAuth")

//this is just a check to make sure clients are being validated via auth0.  
//It's a fetch call being made from the function that saves tokens on the client side. 
router.get("/api/check",
  tokenValidation, 
  (err,req,res,next)=>{
    if(err){
      //handle unauthorized access
      utils.unauthorizedRedirect(err,res)
    }
    else{
      console.log("user successfully logged in")

    }
  }
)

router.get("/home",tokenValidation,
  (err,req,res,next)=>{
    console.log(err)
    //redirects if the token is invalid
    utils.unauthorizedRedirect(err,res)


  }
)
router.get("/temp1",(req,res)=>{
  
})
router.get("/temp2",(req,res)=>{
  
})
router.get("/temp3",(req,res)=>{
  
})
router.get("/temp4",(req,res)=>{
  
})

module.exports = router