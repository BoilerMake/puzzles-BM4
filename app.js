const spawn = require('child_process').spawn
const brunch = spawn('brunch', ['watch'], {
  stdio: 'inherit'
})

const CeaserPoly = require('./ceaser_poly.js')
const WordPool = require('./word_pool.js')
const {getUserId, completePuzzle, getCompletedPuzzles} = require('./mainframe')

require('dotenv').config()
const express = require('express')
var app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
const superSecretString = [0,5,2,2,5,2,8,4,3,4]
app.use(bodyParser.json())

const getSecretWords = (token) => {
  let userId = getUserId(token)
  return WordPool.generate(4, userId, 25)
}

const minOfAMinusB = (a, b) => {
  return a
    .filter(x => b.indexOf(x) == -1)
    .reduce((x, y) => (x < y) ? x : y)
}


app.get(
  '/puzzle0',
  (req, res) => {
    if (req.headers.authorization
        && req.headers.authorization !== 'undefined') {
      getCompletedPuzzles(req.headers.authorization)
        .then( completed => {
          if (completed === undefined) {
            return res.status(200).send({error: 'new phone who dis'})
          }
          const currentPuzzle = minOfAMinusB([1,2,3,4,5,6], completed)
          completePuzzle(req.headers.authorization, 0)
          if(currentPuzzle === 6)
            res.status(200).send({ok: 'completed', nextPuzzle: 'you\'re done!'})
          else
            res.status(200).send({ok: 'completed', nextPuzzle: `/puzzle${currentPuzzle}.html`})
        }, reason => {
          console.log(reason)
        })
    } else {
      res.status(200).send({error: 'new phone who dis'})
    }
  }
)

app.post(
  '/puzzle1',
  (req, res) => {
    if(req.body['answer'] === "goats"
       && req.headers.authorization
       && req.headers.authorization !== 'undefined') {
      completePuzzle(req.headers.authorization, 1)
      res.status(200).send({ok: 'completed'})
    } else {
      res.sendStatus(404)
    }
  }
)

app.post(
  '/puzzle2',
  (req, res) => {
    if(req.body['answer'] === "og dluohs uoy"
       && req.headers.authorization
       && req.headers.authorization !== 'undefined') {
      completePuzzle(req.headers.authorization, 2)
      res.status(200).send({ok: 'completed'})
    } else {
      res.sendStatus(404)
    }
  }
)

app.post(
  '/puzzle3',
  (req, res) => {
    res.status(200).send({spooked: 'boo'})
  }
)

app.get(
  '/thetitleofthisvideobuteachbutisrecursivelyreplacedwithanothervideotitleofthisformexceptthelastoneinquotes',
  (req, res) => {
    if (req.headers.authorization
        && req.headers.authorization !== "undefined") {
      getCompletedPuzzles(req.headers.authorization)
        .then(completed => {
          if(completed === undefined) {
            return res.sendStatus(404)
          }
          if(completed.indexOf(2) !== -1) {
            completePuzzle(req.headers.authorization, 3)
            res.status(200).send({ok: 'completed'})
          } else {
            res.sendStatus(404)
          }
        }, fail => {
          console.log(fail)
          res.sendStatus(404)
        })
    } else {
      res.status(401).send({error: 'no authorization'})
    }
  }
)

app.post(
  '/puzzle4',
  (req, res) => {
    if(req.headers.authorization
       && req.headers.authorization !== 'undefined') {
      getCompletedPuzzles(req.headers.authorization)
        .then(completed => {
          if(completed === undefined) {
            res.sendStatus(404)
          }
          if(completed.indexOf(3) !== -1) {
            if (req.body['answer'] === "the notorius b.m.4") {
              completePuzzle(req.headers.authorization, 4)
              res.status(200).send({ok: 'completed'})
            } else {
              res.status(200).send({error: 'wrong'})
            }
          } else {
            res.sendStatus(404)
          }
        }, fail => {
          console.log(fail)
          res.sendStatus(404)
        })
    } else {
      res.status(401).send({error: 'no authorization'})
    }
  }
)

app.post(
  '/puzzle5',
  (req, res) => {
    if(req.headers.authorization
       && req.headers.authorization !== 'undefined') {
      const expected = getSecretWords(req.headers.authorization).join(".")
      if(req.body['answer'] === expected) {
        completePuzzle(req.headers.authorization, 5)
        res.status(200).send({ok: 'completed'})
      } else {
        res.status(200).send({error: 'that.was.wrong'})
      }
    } else {
      res.status(401).send({error: 'no authorization'})
    }

  }
)

app.get(
  '/puzzle5/where',
  (req, res) => {
    if (req.headers.authorization
        && req.headers.authorization !== 'undfeined') {
      getCompletedPuzzles(req.headers.authorization)
        .then(completed => {
          if(completed === undefined) {
            res.sendStatus(404)
          }
          if(completed.indexOf(4) !== -1) {
            words = getSecretWords(req.headers.authorization)
            text = words.map((word) => {
              return CeaserPoly.encrypt(word, superSecretString)
            }).join(".")
            res.status(200).send({text})
          } else {
            res.status(404).send({error: 'not found'})
          }
        }, fail => {
          console.log(fail)
          res.status(404).send({error: 'not found'})
        })
    } else {
      res.status(401).send({error: 'no authorization'})
    }
  }
)

app.listen(process.env.PORT, function () {
  console.log(`Puzzles listening on port ${process.env.PORT}!`)
})
