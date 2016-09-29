const routes = require('express').Router();
const stackoverflow = require('./stackoverflow');
const intercom = require('./intercom');


routes.use('/stackoverflow', stackoverflow);
routes.use('/intercom', intercom);

routes.get('/', function (req, res) {
  res.status(200).json({ status: 'heavily idle' });
});

module.exports = routes;
