var friends = require('../data/friends');

module.export = function(app) {
	// API Get Request
	app.get('/api/friends', function(req, res) {
		res.json();
	});


//Post routes - will handle incoming survey results and compatibility logic
	app.post('/api/friends', function(req, res) {
		var user = req.body;
		console.log(friends.name);
		// This is an object that will hold the Buddy results
		var buddyMatch = {
			name: "",
			photo: "",
		};

		// Grap the users result from the survey
		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		// Loop through all friends
		for (f = 0; f < friends.length; f++) {
			console.log(friends[f].scores);

			//loop through score
			for (s = 0; s < friends[f].scores.length; s++) {
				console.log(friends[f].score[s]);
						// Difference between scores	
						difference += Math.abs(parseInt(userScores[s] - parseInt(friends[f].scores[s]));

			}		
		}
	});
}