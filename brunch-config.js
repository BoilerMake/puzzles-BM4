module.exports = {
  // See http://brunch.io for documentation.
  files: {
      javascripts: {
		  joinTo: {
			  'vendor.js': /^(?!app)/,
			  'app.js': /^app/
		  }
	  },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  }
}
