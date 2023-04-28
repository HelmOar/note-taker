//dependencies
const express = require("express");

//point server to the route files
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

//create an express server
const app = express();

//set the port for Heroku -8080?
const PORT = process.env.PORT || 3000;

//middleware will run the operations in the order they are written
//parse inconming string or array data
app.use(express.urlencoded({ extended: true })); //this is for the front end
app.use(express.json());
app.use(express.static("public"));	//this is for the front end
app.use(htmlRoutes);
app.use(apiRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});