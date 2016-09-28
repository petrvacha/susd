const routes = require('express').Router();
const stackoverflow = require('./stackoverflow');


routes.use('/stackoverflow', stackoverflow);

routes.get('/', function (req, res) {
  res.status(200).json({ status: 'heavily idle' });
});

module.exports = routes;
