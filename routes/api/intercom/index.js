var express = require('express');
var router = express.Router();
const config = require('../../../config/config.js');
const fixtures = require('../../../fixtures/fixtures.js');

// @todo This part is only for the prototype without a valid acccount.
if (config.api.intercom.allowed) {
  var Intercom = require('intercom-client');
  var client = new Intercom.Client({
    appId: config.api.intercom.appId,
    appApiKey: config.api.intercom.appApiKey
  });
}

var responseHandler = function (error, data) {
  if (error) {
    res.status(400).send("Oh uh, something went wrong.");
  } else {
    res.send(data);
  }
};

router.get('/conversations/opened', function (req, res) {
  // var pages = req.param('page', '');
  // @todo This part is only for the prototype without a valid acccount.
  if (config.api.intercom.allowed) {
    client.conversations.list({type: 'admin', admin_id: config.api.intercom.adminId, open: false}, responseHandler);
  } else {
    res.send(fixtures.api.intercom.conversations);
  }
});

router.get('/conversations/:id', function (req, res) {
  var id = req.params.id;
  // @todo This part is only for the prototype without a valid acccount.
  if (config.api.intercom.allowed) {
    client.conversations.find({ id: id }, responseHandler);
  } else {
    res.send(fixtures.api.intercom.conversation);
  }
});

module.exports = router;
