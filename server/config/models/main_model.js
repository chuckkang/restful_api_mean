var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
	title: { type: String, required: true, minlength: 3 },
	description: { type: String, required: false, default: ""},
	completed: { type: Boolean, default: false },
	date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Task', TaskSchema);
var Goose = mongoose.model('Task');
