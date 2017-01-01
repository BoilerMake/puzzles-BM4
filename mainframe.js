var request = require('superagent')
var jwtDecode = require('jwt-decode')
require('dotenv').config()

const parseAuthorization = (authorization) => {
  if('Bearer ' === authorization.substring(0,7))
    return authorization.substring(7)
  else
    return authorization
}

const MainFrame = {
  getUserId: (authorization) => {
    return jwtDecode(parseAuthorization(authorization)).user_id || 0
  },

  completePuzzle: (authorization, puzzleNumber) => {
    request
      .post(`${process.env.API_ENDPOINT}/v1/users/me/puzzles?puzzle_id=${puzzleNumber}&puzzle_secret=${process.env.PUZZLE_SECRET}&token=${parseAuthorization(authorization)}`).then(
        success => {},
        fail => {console.log(fail)}
      )
  },

  getCompletedPuzzles: (authorization) => {
    return request
      .get(`${process.env.API_ENDPOINT}/v1/users/me/puzzles?token=${parseAuthorization(authorization)}`)
      .then(res => {
        return res.body.puzzles
      }, reason => {
        console.log(reason)
        return undefined
      })
  }
}

module.exports = MainFrame
