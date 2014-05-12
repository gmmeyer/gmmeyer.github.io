PersonalPages.Router = Backbone.Router.extend({

  initialize: function () {
    this.$rootEl = $('#content');
  },

	routes: {
		'': 'index',
		'asteroids' : 'asteroids'
	},

	index: function () {
		var view = new PersonalPages.Views.Index();
		this._swapView(view);
	},

	asteroids: function () {
		var view = new PersonalPages.Views.Asteroids();
		this._swapView(view);
	},

	_swapView: function (newView) {
	  this._currentView && this._currentView.remove();
	  this._currentView = newView;
	  this.$rootEl.html(newView.render().$el);
	}

})