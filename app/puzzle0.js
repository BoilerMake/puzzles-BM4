const request = require('superagent')
const submit = () => {
  request.get('/puzzle0')
         .set('authorization', window.localStorage.getItem("token") || 'undefined')
         .then((res) => {
           document.getElementById("token").innerHTML = window.localStorage.getItem("token") || 'undefined'
           document.getElementById("response").innerHTML = res.text
         })
}

document.getElementById('submit').addEventListener(
  'click',
  submit
)

submit()
