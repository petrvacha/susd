APP.Login = {
  init: function () {

    this.events();
  },

  events: function () {
    var _this = this;
    $('#js-login-btn').on('click', function (event){
      event.preventDefault();
      APP.Calls.login();
    });
  }
};
