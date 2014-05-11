PersonalPages.Views.Show = Backbone.View.extend({

	template: _.template();

	initialize: function () {

	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},




})