const spawn = require('child_process').spawn;
const brunch = spawn('brunch', ['watch'], {
	stdio: 'inherit'
});

const express = require('express');
var app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
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

app.post(
	'/puzzle3',
	(req, res) => {
		res.status(200).send({spooked: 'boo'});
	}

app.get(
	'/donttalktomygoatorhiskideveragain',
	(req, res) => {
		// TODO if they're on puzzle 3
		console.log('passed');
		res.redirect('/');
		// TODO else res.sendStatus(404);
	}
);

app.listen(3000, function () {
	console.log('Puzzles listening on port 3000!');
});
