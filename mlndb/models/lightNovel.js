const mongoose = require('mongoose');

const lightNovelSchema = new mongoose.Schema({
	title: String,
	author: String,
	genre: String,
	publisher: String,
	releaseDate: Date,
	rating: Number
});

const LightNovel = mongoose.model('LightNovel', lightNovelSchema);

module.exports = LightNovel;
