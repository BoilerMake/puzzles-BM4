var request = require('superagent')
request.get('/puzzle5/where')
       .set('authorization',  window.localStorage.getItem("token") || 'undefined')
       .then((res) => {
         document.getElementById('cypher-text').innerHTML = res.text
       });

document.getElementById('submit').addEventListener(
  'click',
  () => {
    request.post('/puzzle5')
           .set('authorization',  window.localStorage.getItem("token") || 'undefined')
           .send({
             answer: document.getElementById('answer').value
           })
           .then((res) => {
             document.getElementById('response').innerHTML = res.text
           });
  }
);
