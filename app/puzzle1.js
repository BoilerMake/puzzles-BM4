document.getElementById('submit').addEventListener(
	'click',
	() => {
		window.request
			  .post('/puzzle1')
			  .set('authentication', 'somethingstupid')
			  .send({
				  answer: document.getElementById('answer').value
			  })
			  .end(() => {
			  });
	}
);
