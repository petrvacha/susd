var routes = require('express').Router();
var api = require('./api');

routes.get('/', function (req, res) {
  res.render('login', {
    title : 'SUSD',
    pagename : 'Login',
    layout: null
  });
});

routes.get('/dashboard', function (req, res) {
  res.render('dashboard', {
    title : 'SUSD - Dashboard',
    pagename : 'Dashboard'
  });
});

routes.get('/stackoverflow', function (req, res) {
  res.render('stackoverflow', {
    title : 'SUSD - Stack Overflow',
    pagename : 'Stack Overflow'
  });
});

routes.get('/intercom', function (req, res) {
  res.render('intercom', {
    title : 'SUSD - Intercom',
    pagename : 'Intercom'
  });
});


routes.use('/api', api);

module.exports = routes;
