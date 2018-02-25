var path = require("path");

module.exports = function(app) {
	// This will route the user to the survey page
	// When the user hits the url survey, I want to show them survey.html
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	// This will route the user to the home page
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}