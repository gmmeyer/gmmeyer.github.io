PersonalPages.Router = Backbone.Router.extend({

  initialize: function (options) {
    // this.$rootEl = options.$rootEl;
    this.$rootEl = $('#content')
  },

	routes: {
		'': 'index',
	},

	index: function () {
		var view = new CodeKindaSmart.Views.Index()
		this._swapView(view)
	},



	_swapView: function (newView) {
	  this._currentView && this._currentView.remove();
	  this._currentView = newView;
	  this.$rootEl.html(newView.render().$el);
	}

})