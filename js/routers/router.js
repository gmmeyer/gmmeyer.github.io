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
		var view = new PersonalPages.Views.Index();
		this._swapView(view);
		event = {currentTarget: {nextElementSibling: '.asteroids-wrapper'}}
		view.openUp(event, {directURL: true});
		view.renderAsteroids({directURL: true});
	},

	_swapView: function (newView) {
	  this._currentView && this._currentView.remove();
	  this._currentView = newView;
	  this.$rootEl.html(newView.render().$el);
	}

})