module.exports = {
  // See http://brunch.io for documentation.
  plugins: {
    babel: {
      presets: ['es2015', 'es2016'],
      pattern: /\.(es6|js)$/
    }
  },
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
