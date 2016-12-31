var request = require('superagent')
var jwtDecode = require('jwt-decode')
require('dotenv').config()

const MainFrame = {
  parseAuthorization: (authorization) => {
    if('Bearer ' === authorization.substring(0,7))
      return authorization.substring(7)
    else
      return authorization
  },

  getUserId: (authorization) => {
    const jwtToken = parseAuthorization(authorization)
    return jwtDecode(jwtToken).user_id || 0
  },

  completePuzzle: (authorization, puzzleNumber) => {
    const jwtToken = parseAuthorization(authorization)
    request
      .post(`${process.env.API_ENDPOINT}/v1/users/me/puzzles?puzzle_id=${puzzleNumber}&puzzle_secret=${process.env.PUZZLE_SECRET}&token=${jwtToken}`).then(
        success => {},
        fail => {console.log(fail)}
      )
  },

  getCompletedPuzzles: (authorization) => {
    const jwtToken = parseAuthorization(authorization)
    return request
      .get(`${process.env.API_ENDPOINT}/v1/users/me/puzzles?token=${jwtToken}`)
      .then( res => {
        return res.body.puzzles
      }, reason => {
        console.log(reason)
        return undefined
      })
  }
}

module.exports = MainFrame
