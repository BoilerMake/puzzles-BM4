document.addEventListener('DOMContentLoaded', function() {
	// do your setup here
});
var request = require('superagent');
console.log(request
	.get('/something'));
