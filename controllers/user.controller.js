const sessionConfig = require('../config/session.config.js');
const User = require('../models/user.model.js');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  // Save User to Database
  console.log("Processing func -> SignUp");

  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

    // Save a User to the MongoDB
    user.save().then(savedUser => {
        res.send("User registered successfully!");
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    });
}

exports.login = (req, res) => {
  console.log("Log-In");

  User.findOne({ username: req.body.username })
  .exec((err, user) => {
    if (err){
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with Username = " + req.body.username
        });
      }
      return res.status(500).send({
        message: "Error retrieving User with Username = " + req.body.username
      });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
    }

    var token = jwt.sign({ id: user._id }, sessionConfig.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, accessToken: token });
  });
}

exports.userContent = (req, res) => {
  User.findOne({ _id: req.userId })
  .select('-_id -__v -password')
  .exec((err, user) => {
    if (err){
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with _id = " + req.userId
        });
      }
      return res.status(500).send({
        message: "Error retrieving User with _id = " + req.userId
      });
    }

    res.status(200).json({
      "description": "User Content Page",
      "user": user
    });
  });
}

