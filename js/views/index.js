PersonalPages.Views.Index = Backbone.View.extend({

	initialize: function () {
	},

	template: _.template($(".homepage-template").html()),

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	events: {
		"click .slider" : "openUp",
		"click .close" : "closeDown",
		"click .inactive" : "closeDown",
		"click #skype" : "openUp",
		"click #phone" : "openUp",
		"click #email" : "openUp",
		"click .asteroids" : "renderAsteroids"
	},

	openUp: function (event, directURL) {
		if(!directURL){
			event.preventDefault();
		}
	  if ( $( 
		event.currentTarget.nextElementSibling ).is( ":hidden" ) ) {
	    $( 
		event.currentTarget.nextElementSibling ).slideDown( 10 );
	  } else if (event.currentTarget.nextElementSibling.id = "isHidden") {
	    $( 
		event.currentTarget.nextElementSibling ).hide();
	  }
	},

	closeDown: function () {
		event.preventDefault();
		console.log(event);
	},

	renderAsteroids: function (directURL) {
		if(!directURL){
			event.preventDefault();
		}
		if(this._asteroidsRendered){
			$('.asteroids-body').remove()
			this._asteroidsRendered = false
		} else {
			var view = new PersonalPages.Views.Asteroids();
			$('.asteroids-wrapper').append(view.render().$el)
			this.my_game = view.startGame()
	    this._asteroidsRendered = true
		}
	}

	


})