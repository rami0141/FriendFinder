//Need to require express, body-parser and path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Tell the server we are creating an express server
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());


// Including the html routes in the server file
//require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("App is listening on PORT: " + PORT);
});