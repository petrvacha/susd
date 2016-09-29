APP.Intercom = {
  init: function () {

    this.currentPage = 1;
    this.listTemplate = '';

    this.getListTemplate();
  },

  getListTemplate : function () {
    var _this = this;
    $.ajax({
      url: "/static/hbs/intercom/list.hbs",
      type: "GET",
      cache: true,
      complete: function(jqXHR, textStatus) {
        switch (jqXHR.status) {
          case 200:
            _this.listTemplate = jqXHR.responseText;
            APP.Calls.getIntercomList(1);
            _this.events();
            break;
          break;
            default:
            console.log(jqXHR.status);
            alert("Oops! Something went wrong! Help us improve your experience by sending an error report.");
        }
      }
    });
  },

  events: function () {
    var _this = this;
    $('#js-btn-opened-conversations').on('click', function (event){
      event.preventDefault();
      _this.currentPage = 1;
      $('#js-previous-btn-opened-conversation').hide();
      APP.Calls.getIntercomList(_this.currentPage);
    });

    $('#js-next-btn-opened-conversations').on('click', function (event){
      event.preventDefault();
      _this.currentPage++;
      APP.Calls.getIntercomList(_this.currentPage);
      $('#js-previous-btn-opened-conversation').show();
    });

    $('#js-previous-btn-opened-conversations').on('click', function (event){
      event.preventDefault();
      _this.currentPage--;
      if (_this.currentPage < 2) {
        $('#js-previous-btn-opened-conversations').hide();
      }
      APP.Calls.getIntercomList(_this.currentPage);
    });
  },

  eventsShowMore : function () {
      $('.js-conversation-show-more').on('click', function (event){
          event.preventDefault();
          APP.Calls.getIntercomList($(this).data('conversationid'));
          $(this).parents('li').find('.js-conversation-show-more').hide();
          $(this).parents('li').find('.js-conversation-show-less').show();
      });

      $('.js-conversation-show-less').on('click', function (event){
          event.preventDefault();
          $(this).parents('li').find('.js-conversation-show-less').hide();
          $(this).parents('li').find('.js-conversation-show-more').show();
          $(this).parents('li').find('.conversation-body').remove();
      });
  }
};
