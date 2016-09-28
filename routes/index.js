const routes = require('express').Router();
const api = require('./api');

routes.get('/', function (req, res) {
  res.render('dashboard', {
    title : 'Simple User Support Dashboard',
    pagename : 'Dashboard'
  });
});

routes.get('/stackoverflow', function (req, res) {
  res.render('stackoverflow', {
    title : 'Simple User Support Dashboard',
    pagename : 'Stackoverflow'
  });
});


routes.use('/api', api);

module.exports = routes;
