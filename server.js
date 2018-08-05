const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3001
require("dotenv").config()

const routes = require("./api/routes")



app.use("/",express.static("build"))
app.use(routes)


app.listen(port,()=>{console.log("running on port:" + port)})
