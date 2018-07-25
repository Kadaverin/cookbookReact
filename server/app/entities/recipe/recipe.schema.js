const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: String,
	updatedAt: String,
	rating: {
		type: Number,
		default : 0,
		min : 0,
		max : 5
	}
}, {
	versionKey: false
});

module.exports = mongoose.model('Recipe', Recipe);
