//dependencies
const express = require("express");

//point server to the route files
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//create an express server
const app = express();

//set the port for Heroku -8080?
const PORT = process.env.PORT || 3000;