//dependencies
const express = require("express");

//point server to the route files
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//create an express server
const app = express();

//set the port for Heroku -8080?
const PORT = process.env.PORT || 3000;

//middleware will run the operations in the order they are written
app.use(express.urlencoded({ extended: true })); //this is for the front end
app.use(express.jason());
app.use(express.static("public"));	//this is for the front end
app.use(htmlRoutes);
app.use(apiRoutes);



app.listen(Port, () => {
    console.log(`API server now on port ${PORT}!`);
});