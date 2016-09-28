const routes = require('express').Router();
const api = require('./api');

routes.get('/', function (req, res) {
  res.render('index', {
    title : 'Simple User Support Dashboard',
    message : 'Hello world!'
  });
});


routes.use('/api', api);

module.exports = routes;
