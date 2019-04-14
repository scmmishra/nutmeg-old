const jwt = require('jsonwebtoken');
const sessionConfig = require('../config/session.config.js');
const User = require('../models/user.model.js');


exports.verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token){
    return res.status(403).send({
      auth: false, message: 'No token provided.'
    });
  }

  jwt.verify(token, sessionConfig.SECRET_KEY, (err, decoded) => {
    if (err){
      return res.status(500).send({
          auth: false,
          message: 'Fail to Authentication. Error -> ' + err
        });
    }
    req.userId = decoded.id;
    next();
  });
}