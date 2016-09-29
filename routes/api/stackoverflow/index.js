var express = require('express');
var router = express.Router();
const config = require('../../../config/config.js');

var Client = require('node-rest-client').Client;
var client = new Client();

router.get('/questions/unanswered', function (req, res) {
  var tagged = req.param('tagged', '');
  var page = req.param('page', '');
  var pagesize = req.param('pagesize', '');

  var apicall = config.api.stackoverflow.unanswered;
  if (tagged !== '') {
    apicall += '&tagged=' + tagged;
  }
  if (!isNaN(page) && page !== '') {
    apicall += '&page=' + page;
  }
  if (!isNaN(pagesize) && pagesize !== '') {
    apicall += '&pagesize=' + pagesize;
  }

  client.get(apicall, function (data, response) {
      res.send(data);
  });
});

router.get('/questions/:id', function (req, res) {
  var id = req.params.id;
  var apicall = config.api.stackoverflow.question;

  if (!isNaN(id)) {
    apicall = apicall.replace(/:id/g , id);
    console.log(apicall);
    client.get(apicall, function (data, response) {
        res.send(data);
    });
  }
});

module.exports = router;
