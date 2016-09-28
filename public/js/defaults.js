APP.Defaults = {
  init: function () {

    this.currentPage = 1;
    this.tagged = '';
    this.listTemplate = '';

    this.getListTemplate();
    this.events();
  },

  getListTemplate : function () {
    $.ajax({
      url: "static/hbs/list.hbs",
      type: "GET",
      cache: true,
      complete: function(jqXHR, textStatus) {
        switch (jqXHR.status) {
          case 200:
            listTemplate = jqXHR.responseText;
            break;
          break;
            default:
            alert("Oops! Something went wrong! Help us improve your experience by sending an error report.");
        }
      }
    });
  },

  events: function () {
    var _this = this;
    $('#js-btn-unanswered-question').on('click', function (event){
      event.preventDefault();
      _this.currentPage = 1;
      $('#js-previous-btn-unanswered-question').hide();
      APP.Calls.getStackoverflowList(_this.currentPage);
    });

    $('#js-next-btn-unanswered-question').on('click', function (event){
      event.preventDefault();
      _this.currentPage++;
      APP.Calls.getStackoverflowList(_this.currentPage);
      $('#js-previous-btn-unanswered-question').show();
    });

    $('#js-previous-btn-unanswered-question').on('click', function (event){
      event.preventDefault();
      _this.currentPage--;
      if (_this.currentPage < 2) {
        $('#js-previous-btn-unanswered-question').hide();
      }
      APP.Calls.getStackoverflowList(_this.currentPage);
    });

    $('#js-previous-btn-unanswered-question').on('click', function (event){
      event.preventDefault();
      _this.currentPage--;
      if (_this.currentPage < 2) {
        $('#js-previous-btn-unanswered-question').hide();
      }
      APP.Calls.getStackoverflowList(_this.currentPage);
    });
  },

  eventsShowMore : function () {
      $('.js-question-show-more').on('click', function (event){
          event.preventDefault();
          APP.Calls.getStackoverflowQuestion($(this).data('questionid'));
          $(this).parents('li').find('.js-question-show-more').hide();
          $(this).parents('li').find('.js-question-show-less').show();
      });

      $('.js-question-show-less').on('click', function (event){
          event.preventDefault();
          $(this).parents('li').find('.js-question-show-less').hide();
          $(this).parents('li').find('.js-question-show-more').show();
          $(this).parents('li').find('.question-body').remove();
      });
  }
};
