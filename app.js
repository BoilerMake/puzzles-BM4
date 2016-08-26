const spawn = require('child_process').spawn;
const brunch = spawn('brunch', ['watch'], {
	stdio: 'inherit'
});

var CeaserPoly = require('./ceaser_poly.js');

const express = require('express');
var app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
const superSecretString = [0,5,2,2,5,2,8,4,3,4]
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
);

app.get(
	'/donttalktomygoatorhiskideveragain',
	(req, res) => {
		// TODO if they're on puzzle 3
		console.log('passed');
		res.redirect('/');
		// TODO else res.sendStatus(404);
	}
);

//TODO make it so that they can pass
app.post(
	'/puzzle4',
	(req, res) => {

	}
);

app.post(
	// TODO if they're on puzzle 4
	'/puzzle4/where',
	(req, res) => {
		//TODO make this sample from word pool
		text = req.body['user_id'];
		res.status(200).send(CeaserPoly.encrypt(text, superSecretString));
	}
	// TODO else res.sendStatus(404);
);

app.listen(3000, function () {
	console.log('Puzzles listening on port 3000!');
});
