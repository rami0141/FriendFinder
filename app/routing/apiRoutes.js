var friends = require('../data/friends');

module.export = function(app) {
	// display location coming soon
	app.get('/api/friends', function(req, res) {
		res.json();
	});


// Post routes - will handle incoming survey results and compatibility logic
	// app.post('/api/friends', function(req, res) {
	// 	// if() {
	// 	// 	//data
	// 	// } else {
	// 	// 	//data
	// 	// }
	// });
}