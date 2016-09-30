var routes = require('express').Router();
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser')
var stackoverflow = require('./stackoverflow');
var intercom = require('./intercom');
var authenticate = require('./authenticate');
var middleware = require('./middleware');


routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/', function (req, res) {
  res.status(200).json({ status: 'heavily idle' });
});

routes.use('/authenticate', authenticate);

// route middleware to verify a token
routes.use(cookieParser());
routes.use(middleware.isAuthenticated);

routes.use('/stackoverflow', stackoverflow);
routes.use('/intercom', intercom);

module.exports = routes;
