var friends = require('../data/friends.js');
var path = require('path');

module.export = function(app) {
	// API Get Request
	app.get('/api/friends', function(req, res) {
		res.json();
	});


//Post routes - will handle incoming survey results and compatibility logic
	app.post('/api/friends', function(req, res) {
		var user = req.body;
		// This is an object that will hold the Buddy results
		var buddyMatch = {
			name: "",
			photo: "",
		};

		// Loop through all friends
		for (f = 0; f < friends.length; f++) {
			console.log(friends[f].scores);

			//loop through score
			for (s = 0; s < friends[f].scores.length; s++) {
				console.log("Your body score is: " + friends[f].score[s]);

			}		
		}
	});
}