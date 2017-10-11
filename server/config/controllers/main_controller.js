
var mongoose = require("mongoose");

var Task = mongoose.model('Task');

module.exports = {
	show: function(req, res){
	Task.find({}, function(err, results){
		res.render("index", {results: results, error: err});
	})	
	},
	getAll: function (req, res) {
		Task.find({}, function (err, results) {
			res.json({ results: results, error: err });
		})
	},
	getSingle: function(req, res){
		Task.find({_id: req.params.id}, function(err, result){
			if (err){
				console.log("Error when retrieving task", err);
				res.render("index", {results: result, error: err});
			}else{
				res.json(result);
			}
		})
	},
	create: function(req, res){
		var newTask = new Task({
			title: req.body.title,
			description: req.body.description
		})
		newTask.save(function(err){
			if (err) {
				// console.log("Error when creating task*******************", err);
				res.render("index", { results: [], error: err });
			} else {
				Task.find({_id: newTask._id}, function(err, result){
					res.json({ results: result, error: err });
				})
			}
		})

	},
	update: function(req, res){
		Task.update({ _id: req.params.id }, {
			title: req.body.title, 
			description: req.body.description, 
			completed: req.body.completed}, function(err){
			if (err){
				console.log("There was an error during the update", err);
				res.json({ results: [], error: err });
			}else{
				Task.find({_id: Task._id}, function(err, result){
				res.json({ results: result, error: err});
				})
				
			}
		})
	},
	delete: function(req, res){
		Task.remove({ _id: req.params.id }, function (err) {
			if (err) {
				console.log("There was an error during the removal", err);
				res.json({ results: "failed to delete", error: err });
			} else {
				res.json({results: "success", error: err});
			}
		})
	}
}