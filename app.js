const express = require("express");
const cors = require("cors")
const path = require("path")
const app = express();
const routes = require("./api/routes")
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'build')))
app.use('/api',routes)
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))
})
module.exports = app;