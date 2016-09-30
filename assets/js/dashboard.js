APP.Dashboard = {
  init: function () {
    this.calls();
    this.events();
  },

  calls: function () {
    APP.Calls.getStackoverflowQuestionCount('apiblueprint', '#js-question-count-apiblueprint');
    APP.Calls.getStackoverflowQuestionCount('apiary', '#js-question-count-apiary');
    APP.Calls.getStackoverflowQuestionCount('dredd', '#js-question-count-dredd');
    APP.Calls.getStackoverflowQuestionCount('api', '#js-question-count-api');
  },

  events: function () {
    $('#js-question-count-apiblueprint-box').on('click', function (event){
      window.location.replace('stackoverflow/?tagged=apiblueprint');
    });
    $('#js-question-count-apiary-box').on('click', function (event){
      window.location.replace('stackoverflow/?tagged=apiary');
    });
    $('#js-question-count-dredd-box').on('click', function (event){
      window.location.replace('stackoverflow/?tagged=dredd');
    });
    $('#js-question-count-api-box').on('click', function (event){
      window.location.replace('stackoverflow/?tagged=api');
    });
  }
};
