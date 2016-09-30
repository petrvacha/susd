var jwt = require('jsonwebtoken');
var config = require('../../../config/config.js');

var middleware = {
  isAuthenticated :  function(req, res, next) {

    //@todo This should be present in typically in the Authorization header using the Bearer schema.
    var token = req.cookies.access_token;

    if (token) {
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });

    } else {
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  }
}
module.exports = middleware
