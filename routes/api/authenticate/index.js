var express = require('express');
var routes = express.Router();
var config = require('../../../config/config.js');
var jwt = require('jsonwebtoken');

routes.post('/', function (req, res) {
  var user = {username: "demo"};
  var token = jwt.sign(user, config.secret, {
    expiresIn: "1 day"
  });
  res.json({
    success: true,
    token: token
  });
});

module.exports = routes;
