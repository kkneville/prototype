var mongoose = require('mongoose');
var Post = require('../models/post');

module.exports = {
  	index: function(req, res) {
  		console.log("inside of index")
    	return res.render('index');	
	}



  //   index: function(req, res) {
  //   	Post.find({}, function(err, posts){
		// 	if(err){
		// 		console.log('unable to get posts');
		// 	}
		// 	else {
		// 		res.render('posts', {posts: posts});	
		// 	}
		// }) 
  //   },


}

