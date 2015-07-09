var Users = require('../models/users');

module.exports.create = function(req, res){
	var user = new Users(req.body);
	user.save(function(err, result){
		res.json(result);
	});
};

module.exports.get = function(req, res){
	console.log(req.param('id'));
	Users.find({}, function(err, results){
		res.json(results);
	});
};