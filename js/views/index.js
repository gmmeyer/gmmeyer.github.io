PersonalPages.Views.Index = Backbone.View.extend({

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
		event.preventDefault();
		console.log(event);
	  if ( $( ".slider" ).is( ":hidden" ) ) {
	    $( "div" ).slideDown( "slow" );
	  } else {
	    $( "div" ).hide();
	  }
	},

	closeDown: function () {
		event.preventDefault();
		console.log(event);
	},

	


})