document.getElementById('submit').addEventListener(
	'click',
	() => {
		window.request
			  .post('/puzzle2')
			  .set('authentication', 'somethingstupid')
			  .send({
				  answer: document.getElementById('answer').value
			  })
			  .end(() => {
			  });
	}
);
