APP.Calls = {

  getStackoverflowList : function (page) {
    var tagged = $('#js-input-tagged').val();
    var $results = $('#results');
    var data = {};

    var url = "api/stackoverflow/questions/unanswered";
    var query = {};
    if (page > 1) {
      query.page = page;
    }
    if (tagged !== "") {
      query.tagged = tagged;
    }
    preparedQuery = $.param(query);
    if (preparedQuery !== "") {
      url += '?' + preparedQuery;
    }

    $.ajax({
      url: url,
      type: "GET",
      cache: false,
      dataType: "json",
      complete: function(jqXHR, textStatus) {
        switch (jqXHR.status) {
          case 200:
            var template = Handlebars.compile(listTemplate);
            $results.html(template(jqXHR.responseJSON));
            APP.Defaults.eventsShowMore();
            break;
          default:
            $results.html('<p>Oops! Something went wrong! Help us improve your experience by sending an error report.</p>');
        }
      }
    });
  },

  getStackoverflowQuestion : function (id) {
    var tagged = $('#js-input-tagged').val();
    var $resultsPoint = $('#question-' + id +' .js-question-show-less');
    var data = {};

    if (!isNaN(id)) {
      var url = "api/stackoverflow/questions/" + id;

      $.ajax({
        url: url,
        type: "GET",
        cache: true,
        dataType: "json",
        complete: function(jqXHR, textStatus) {
          switch (jqXHR.status) {
            case 200:
              var result = jqXHR.responseJSON;
              $resultsPoint.after('<div class="question-body">' + result.items[0].body + '</div>');
              break;
            default:
              $resultsPoint.after('<div class="question-body">Oops! Something went wrong! Help us improve your experience by sending an error report.</div>');
          }
        }
      });
    }
  }
};
