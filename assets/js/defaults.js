APP.Defaults = {
  init: function () {
  },

  getParamValue : function (param) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
      vars[key] = value;
    });
    return vars[param];
  }
};
