const spawn = require('child_process').spawn;
const brunch = spawn('brunch', ['watch'], {
	stdio: 'inherit'
});

var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post(
	'/puzzle1',
	(req, res) => {
		if(req.body['answer'] == "goats")
			console.log('passed');
		else
			res.sendStatus(404);
	}
);

app.post(
	'/puzzle2',
	(req, res) => {
		if(req.body['answer'] == "og dluohs uoy")
			console.log('passed');
		else
			res.sendStatus(404);
	}
);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
