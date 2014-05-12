PersonalPages.Views.Index = Backbone.View.extend({

	template: _.template("<div id='home'><section class='top cover group'><section class='section-title-wrapper'><div class='description'><h1 class='name-title name'>Greg Meyer</h1><p>I'm a web developer in New York.</p><p>I'm looking for a job.</p><p>I know Ruby on Rails, Javascript, Backbone, JQuery, R, SQL, HTML5 and Linux.</p></div><div class='picture'><img src='images/greg.jpg' alt='A picture of me.'></div></section></section><div class='navbar-wrapper'><div class='navwrapper'><nav class='header group'><ul><li><a class='name' href='#'>Greg Meyer</a></li><li class='menuItem active'><a href='#home'>Home</a></li><li class='menuItem'><a href='#whoami'>Who Am I?</a></li><li class='menuItem'><a href='#portfolio'>Portfolio</a></li><li class='menuItem'><a href='#contact'>Contact</a></li></ul></nav></div></div><div id='whoami' class='whoami group', style='margin-top: 0px;'><section class='iam group'><h2>Who am I?</h2><div class='text'><p>I was drawn to the analytical sciences from an early age, and studied physics in college.</p><p>I was a national champion college debater.</p><p>Most of all, I like building things.</p><p>Whether it's a website, an experiment, an argument or a lego tower, there's something magical in the act of creation.</p></div><div class='picture'><img class='group' src='images/nats.jpg' alt='Me with a gigantic trophy'><p>Alex and I pose with our absurdly large debate trophy.</p></div></section></div><div id='portfolio' class='portfolio-wrapper group'><section class='portfolio group'><div class='github-wrapper'><a class='fontawesome github group' href='http://www.github.com/gmmeyer'><i class='fa fa-github-alt fa-5x group'></i><p class='group'>The code for everything in my portfolio is up on my github, you can reach them through the links below, or you can go directly to my github, here.</p></a></div><!-- <a class='fontawesome group' href='#code'><i class='fa fa-code fa-5x'></i></a> --><section class='group portfolio-items'><article class='portfolio-item'><a class='slider'><h2>RapKindaSmart</h2><img src='images/rapkindasmart.png' height='300px' width='600px'></a><article class='slidee isHidden'><p><a href='http://rapkindasmart.com'>deployed</a></p><p><a href='http://github.com/gmmeyer/codekindasmart'>source</a></p><p>Rap Kinda Smart is a clone of the website <a href='http://rapgenius.com'>Rap Genius</a>. It allows users to upload and annotate static text. It has algorithms that allow annotations to be displayed properly on static text. The code utilizes polymorphic association to give notifications to users regarding content they care about. And, it also utilizes a cron function to rank content that users vote on--the voting functionality utilizes single table inheritance.</p></article></article><article class='portfolio-item'><a class='slider'><h2>Asteroids.js</h2><img src='images/asteroids.jpg'></a><div class='shield isHidden portfolio-slider'><section class='group isHidden portfolio-slider'></section></div></article><article class='portfolio-item'><a class='slider'><h2>Active Record Lite</h2><img src='images/active-record.png'></a><div class='shield isHidden portfolio-slider'><section class='group isHidden portfolio-slider'></section></div></article><article class='portfolio-item'><a class='slider'><h2>Rails Lite</h2><img src='images/rails-lite.png'></a><div class='shield isHidden portfolio-slider'><section class='group isHidden portfolio-slider'></section></div></article><article class='portfolio-item'><a class='slider'><h2>Chess</h2><img src='images/chess1.png'>	</a><div class='shield isHidden portfolio-slider'><section class='group isHidden portfolio-slider'></section></div></article><article class='portfolio-item'><a class='slider'><h2>Checkers</h2><img src='images/checkers1.png'></a><div class='shield isHidden portfolio-slider'><section class='group isHidden portfolio-slider'></section></div></article></section></section></div><section id='contact' class='contact group'><a class='fontawesome' href='mailto:gregory.matthew.meyer@gmail.com?subject=Hey%20Greg!'><i class='fa fa-envelope-o fa-5x'></i></a><a class='fontawesome' href='http://www.linkedin.com/pub/gregory-meyer/37/864/702/'><i class='fa fa-linkedin fa-5x'></i></a><a class='fontawesome' id='skype'><i class='fa fa-skype fa-5x'></i></a><p class='slidee isHidden' id='skype'>flubbishone</p><a class='fontawesome' id='phone'><i class='fa fa-phone fa-5x'></i></a><p class='slidee isHidden' id='phone'> 862 684 9101</p></section>"),

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
		"click .inactive" : "closeDown",
		"click #skype" : "openUp",
		"click #phone" : "openUp"
	},

	openUp: function (event) {
		// console.log('boo')
		event.preventDefault();
		console.log(event);
	  if ( $( 
		event.currentTarget.nextElementSibling ).is( ":hidden" ) ) {
	  	console.log('boo')
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

	


})