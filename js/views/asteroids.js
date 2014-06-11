PersonalPages.Views.Asteroids = Backbone.View.extend({
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