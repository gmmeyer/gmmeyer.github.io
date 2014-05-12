PersonalPages.Views.Asteroids = Backbone.View.extend({
	// template: _.template("<div class='asteroids-body'><canvas class='asteroids-game' width='500' height='500'></canvas><section class='asteroids-contact'><p class='group'><a href='#'>Back to homepage</a></p><p class='group'>Created by<a href='#'>Greg Meyer</a></p><p class='group'><a href='https://github.com/gmmeyer/Asteroids'>Source</a></p></section></div>"),
	template: _.template("<div class='asteroids-body'><p>use the W-A-S-D or the Arrow Keys to move, space to shoot.</p><canvas class='asteroids-game' width='500' height='500'></canvas></div>"),

	initialize: function () {
		console.log("lkjsdaflkjadflkdsjaflj");
	},

	startGame: function () {
    var canvas = document.getElementsByTagName('Canvas')[0];
    my_game = new Asteroids.Game(canvas, 20)
    my_game.start();
    return my_game
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})