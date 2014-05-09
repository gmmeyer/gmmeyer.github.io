PersonalPages.Views.Index = Backbone.View.extend({

	template: JST['/templates/index'],

	initialize: function () {

	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		
		return this;
	},

	events: {
		"click .slider" : "openUp",
		"click .close" : "closeDown",
		"click .inactive" : "closeDown"
	},

	openUp: function (event) {
		console.log(event)

	},

	closeDown: function () {

	}


})