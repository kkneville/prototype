var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, 'name is required'],
		minlength: 2
	},
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema)