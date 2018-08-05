const express = require("express")
const sql = require("mysql")



class API {
  constructor(){
    this.db = sql.createConnection({
      database:process.env.DB_ENV,
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password: process.env.DB_PASSWORD
    })
    this.connect = this.db.connect((err)=>{
      if(err){console.log(err)}
      else{
        console.log("db connection success, id:" +this.db.threadId)
      }
    })

    this.db.end((err)=>{return})

    //this is run when the server times out the connection because it's inactive.  it prevents node from killing the entire process
    this.db.on('error', function(err) {
      console.log(err.code); // 'ER_BAD_DB_ERROR'
    });
        
  }

 
  

  assembleUserData(){

  }



}

module.exports = new API()
