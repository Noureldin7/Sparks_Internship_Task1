const express = require("express");
const cors = require("cors")
const app = express();
const routes = require("./api/routes")
app.use(cors())
app.use('/api',routes)
module.exports = app;