var config = {};
config.secret = 'giveninfinitetimeallpossibilitiesarerealized';
config.web = {};
config.web.port = process.env.WEB_PORT || 3000;


config.api = {};
config.api.stackoverflow = {};
config.api.stackoverflow.unanswered = 'https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow';
config.api.stackoverflow.question = 'https://api.stackexchange.com/2.2/questions/:id?site=stackoverflow&filter=!9YdnSIN18';

config.api.intercom = {};
config.api.intercom.allowed = false; // false sends fixtures in response
config.api.intercom.appId = 0;
config.api.intercom.appApiKey = '';
config.api.intercom.adminId = 0;


module.exports = config;
