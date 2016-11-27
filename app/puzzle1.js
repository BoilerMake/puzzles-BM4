var request = require('superagent')
document.getElementById('submit').addEventListener(
  'click',
  () => {
    request.post('/puzzle1')
           .set('authorization',  window.localStorage.getItem("token") || 'undefined')
           .send({
             answer: document.getElementById('answer').value
           })
           .then((res) => {
             document.getElementById('response').innerHTML = res.text
           });
  }
);
