//////  ROUTES
var controller = require('./controllers/main_controller.js');

module.exports = function Route(app){
	app.get("/", function(req, res){
		controller.show(req, res)
	});

	app.get("/task", (req, res)=>{
		controller.getAll(req, res);
	});
	app.get("/task/:id", (req, res) => {
		controller.getSingle(req, res);
	});
	app.post("/task", (req, res) => {
	// create new projuect
		controller.create(req, res);
	});
	app.put("/task/:id", (req, res) => {
		// create new projuect
		controller.update(req, res);
	});
	app.delete("/task/:id", (req, res) => {
		// create new projuect
		controller.delete(req, res);
	})
//////////////////////////////////////////////
}