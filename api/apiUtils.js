const apiUtils= {
  //looks for Auth0 unauthorized error name, and executes appropriate redirect
  unauthorizedRedirect:function (err, res){
    if(err.name === "UnauthorizedError"){
      console.log("bitch you unauthorized!")
      res.redirect(301,"/")
      

  }
} 

}
module.exports = apiUtils