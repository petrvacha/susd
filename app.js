var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes');
var config = require('./config/config.js');
var hbs = require('express-handlebars');

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutDir: __dirname + '/views/layouts/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/static', express.static('public'));
app.use('/', routes);

app.listen(config.web.port, function () {
  console.log('The app is listening on port  ' + config.web.port + '!');
});
