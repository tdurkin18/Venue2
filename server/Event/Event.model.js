const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Section = require('../Section/Section.model');
let Submission = require('../Submission/Submission.model');

//Define collection and schema for User
let Event = new Schema({
	title: String,
	section: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Section'
	},
	//implement location
	//implement submission_window
});

module.exports = mongoose.model('Event', Event);