window.PersonalPages = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    PersonalPages.router = new PersonalPages.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start()
  }
};

$(document).ready(function () {
  PersonalPages.initialize();
})