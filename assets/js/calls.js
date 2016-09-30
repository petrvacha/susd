APP.Calls = {

  getStackoverflowList : function (page) {
    var tagged = $('#js-input-tagged').val();
    var $results = $('#results');

    var url = "/api/stackoverflow/questions/unanswered";
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
            var template = Handlebars.compile(APP.Stackoverflow.listTemplate);
            $results.html(template(jqXHR.responseJSON));
            APP.Stackoverflow.eventsShowMore();
            break;
          default:
            $('#js-next-btn-unanswered-question').hide();
            $results.html('<p>Oops! Something went wrong! Help us improve your experience by sending an error report.</p>');
        }
      }
    });
  },

  getStackoverflowQuestionCount : function (tagged, selector) {
    var url = "/api/stackoverflow/questions/unanswered";

    var query = {};
    query.pagesize = 100;
    if (tagged !== "") {
      query.tagged = tagged;
    }
    url += '?' + $.param(query);

    $.ajax({
      url: url,
      type: "GET",
      cache: false,
      dataType: "json",
      complete: function(jqXHR, textStatus) {
        switch (jqXHR.status) {
          case 200:
            var count = Object.keys(jqXHR.responseJSON.items).length;
            if (jqXHR.responseJSON.has_more) {
              count = query.pagesize + '+';
            }
            $(selector).html(count);
            break;
          default:
            $('#js-next-btn-unanswered-question').hide();
            $(selector).html('<span title="unknown information">-</span>');
        }
      }
    });
  },

  getStackoverflowQuestion : function (id) {
    var tagged = $('#js-input-tagged').val();
    var $resultsPoint = $('#question-' + id +' .js-question-show-less');

    if (!isNaN(id)) {
      var url = "/api/stackoverflow/questions/" + id;

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
  },

  getIntercomList : function (page) {
    var $results = $('#results');

    var url = "/api/intercom/conversations/opened";
    var query = {};
    if (page > 1) {
      query.page = page;
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
            var template = Handlebars.compile(APP.Intercom.listTemplate);
            $results.html(template(jqXHR.responseJSON));
            break;
          default:
            $('#js-next-btn-opened-conversations').hide();
            $results.html('<p>Oops! Something went wrong! Help us improve your experience by sending an error report.</p>');
        }
      }
    });
  },

  login : function () {
    $.ajax({
      url: "/api/authenticate",
      type: "POST",
      dataType: "json",
      complete: function(jqXHR, textStatus) {
        switch (jqXHR.status) {
          case 200:
            $.cookie("access_token", jqXHR.responseJSON.token, { expires: 1 });
            window.location.replace("/dashboard");
            break;
          default:
            $('#js-next-btn-opened-conversations').hide();
            alert('Oops! Something went wrong! Help us improve your experience by sending an error report.');
        }
      }
    });
  }
};
