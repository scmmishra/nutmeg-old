const sessionConfig = require('../config/session.config.js');
const User = require('../models/user.model.js');

exports.checkDuplicate = (req, res, next) => {
  User.findOne({ username: req.body.username })
  .exec((err, user) => {
	if (err && err.kind !== 'ObjectId'){
	  res.status(500).send({
		message: "Error retrieving User with Username = " + req.body.username
	  });
	  return;
	}

	if(user){
	  res.status(400).send("Fail -> Username is already taken!");
	  return;
	}

	User.findOne({ email: req.body.email })
	.exec((err, user) => {
	  if (err && err.kind !== 'ObjectId'){
		res.status(500).send({
		  message: "Error retrieving User with Email = " + req.body.email
		});
		return;
	  }

	  if(user){
		res.status(400).send("Fail -> Email is already in use!");
		return;
	  }

	  next();
	});
  });
}