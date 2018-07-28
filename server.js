const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()

app.use(express.static("public"))

app.get("/",(req,res)=>{
  res.send("hello world")
})

app.listen(process.env.PORT,()=>{console.log("running on port:" + process.env.PORT)})

