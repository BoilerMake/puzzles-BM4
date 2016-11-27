const spawn = require('child_process').spawn;
const brunch = spawn('brunch', ['watch'], {
	stdio: 'inherit'
});

const CeaserPoly = require('./ceaser_poly.js');
const WordPool = require('./word_pool.js');
const {getUserId, completePuzzle, getCompletedPuzzles} = require('./mainframe')

const express = require('express');
var app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
const superSecretString = [0,5,2,2,5,2,8,4,3,4]
app.use(bodyParser.json());

const getSecretWords = (token) => {
	return WordPool.generate(4, getUserId(token), 25);
}

app.get(
  '/puzzle0',
  (req, res) => {
    if (req.headers.authentication !== 'undefined') {
      completePuzzle(req.headers.authentication, 0)
      res.status(200).send({ok: 'completed'})
    } else {
      res.status(200).send({error: 'new phone who dis'})
    }
  }
)

app.post(
	'/puzzle1',
	(req, res) => {
		if(req.body['answer'] == "goats") {
			completePuzzle("samuel", 1)
			res.status(200).send({ok: 'completed'})
		} else {
			res.sendStatus(404);
		}
	}
);

app.post(
	'/puzzle2',
	(req, res) => {
		if(req.body['answer'] == "og dluohs uoy") {
			completePuzzle("samuel", 2)
			res.status(200).send({ok: 'completed'})
		} else {
			res.sendStatus(404);
		}
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
		if (getCompletedPuzzles("samuel").indexOf(2) === -1) {
			res.sendStatus(404)
		} else {
			completePuzzle("samuel", 2)
			res.status(200).send({ok: 'completed'})
		}
	}
);

//TODO make it so that they can pass
app.post(
	'/puzzle4',
	(req, res) => {
		const expected = getSecretWords(req.body['user_id']).join(".")
		if(req.body['answer'] === expected) {
			completePuzzle("samuel", 4);
		} else {
			res.status(200).send({error: 'that.was.wrong'});
		}
	}
);

app.post(
	// TODO if they're on puzzle 4
	'/puzzle4/where',
	(req, res) => {
		//TODO make this sample from word pool
		words = getSecretWords(req.body['user_id']);
		text = words.map((word) => {
			return CeaserPoly.encrypt(word, superSecretString);
		}).join(".");
		res.status(200).send({text: text, words: words});
	}
	// TODO else res.sendStatus(404);
);

app.listen(3000, function () {
	console.log('Puzzles listening on port 3000!');
});
