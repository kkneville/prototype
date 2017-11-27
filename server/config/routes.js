var mongoose = require('mongoose');
var posts = require('../controllers/posts')

module.exports = (app, req, res) => {
	
	app.get('/', posts.index);

}