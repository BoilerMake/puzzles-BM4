const request = require('superagent')
document.getElementById('submit').addEventListener(
  'click',
  () => {
    request.get('/puzzle0')
           .set('authorization', window.localStorage.getItem("token") || 'undefined')
           .then((res) => {
             document.getElementById("token").innerHTML = window.localStorage.getItem("token") || 'undefined'
             document.getElementById("response").innerHTML = res.text
           })
  }
)
