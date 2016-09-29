const routes = require('express').Router();
const api = require('./api');

routes.get('/', function (req, res) {
  res.render('dashboard', {
    title : 'SUSD',
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
