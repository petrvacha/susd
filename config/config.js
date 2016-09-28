var config = {};
config.web = {};
config.web.port = process.env.WEB_PORT || 3000;


config.api = {};
config.api.stackoverflow = {};
config.api.stackoverflow.unanswered = 'https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow';
config.api.stackoverflow.question = 'https://api.stackexchange.com/2.2/questions/:id?site=stackoverflow&filter=!9YdnSIN18';

module.exports = config;
