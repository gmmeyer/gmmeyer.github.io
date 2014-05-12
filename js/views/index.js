PersonalPages.Views.Index = Backbone.View.extend({

	template: _.template("<div id='home'><section class='top cover group'><section class='section-title-wrapper'><div class='description'><h1 class='name-title name'>Greg Meyer</h1><p>I'm a web developer in New York.</p><p>I'm looking for a job.</p><p>I know Ruby on Rails, Javascript, Backbone, JQuery, R, SQL, HTML5 and Linux.</p></div><div class='picture'><img src='images/greg.jpg' alt='A picture of me.'></div></section></section>" + 
	/* Navbar */ "<div class='nav-wrapper'><div class='navbar-wrapper'><div class='navwrapper'><nav class='header group'><ul><li><a class='name' href='#'>Greg Meyer</a></li><li class='menuItem active'><a href='#home'>Home</a></li><li class='menuItem'><a href='#whoami'>Who Am I?</a></li><li class='menuItem'><a href='#portfolio'>Portfolio</a></li><li class='menuItem'><a href='#contact'>Contact</a></li></ul></nav></div></div></div>" + 
	/* Who Am I */ "<div id='whoami' class='whoami group', style='margin-top: 0px;'><section class='iam group'><h2>Who am I?</h2><div class='text'><p>I was drawn to the analytical sciences from an early age, and studied physics in college.</p><p>I was a national champion college debater.</p><p>Most of all, I like building things.</p><p>Whether it's a website, an experiment, an argument or a lego tower, there's something magical in the act of creation.</p></div><div class='picture'><img class='group' src='images/nats.jpg' alt='Me with a gigantic trophy'><p>Alex and I pose with our absurdly large debate trophy.</p></div></section></div>" + 
	/* Portfolio */ "<div id='portfolio' class='portfolio-wrapper group'><section class='portfolio group'><div class='github-wrapper'><a class='fontawesome github group' href='http://www.github.com/gmmeyer'><i class='fa fa-github-alt fa-5x group'></i><p class='group'>The code for everything in my portfolio is up on my github, you can reach them through the links below, or you can go directly to my github, here.</p></a></div><!-- <a class='fontawesome group' href='#code'><i class='fa fa-code fa-5x'></i></a> --><section class='group portfolio-items'>" + 
		/* Rap Kinda Smart */ "<article class='group portfolio-item'><a class='slider'><h2>RapKindaSmart</h2><img src='images/rapkindasmart.png' height='300px' width='600px'></a><article class='slidee isHidden'><p><a href='http://rapkindasmart.com'>deployed</a> <a href='http://github.com/gmmeyer/codekindasmart'>source</a></p><p>Rap Kinda Smart is a clone of the website <a href='http://rapgenius.com'>Rap Genius</a>. It allows users to upload and annotate static text. It has algorithms that allow annotations to be displayed properly on static text. The code utilizes polymorphic association to give notifications to users regarding content they care about. And, it also utilizes a cron function to rank content that users vote on--the voting functionality utilizes single table inheritance.</p><p>For a more detailed discussion of the technology used to create this website, see the source code's <a href='https://github.com/gmmeyer/codekindasmart#rap-kinda-smart'>readme</a>.</p></article></article>" + 
		/* Asteroids */ "<article class='group portfolio-item'><a class='slider'><h2>Asteroids.js</h2><img src='images/asteroids.jpg'></a><article class='slidee isHidden'><p><a href='./asteroids.html'>deployed</a></p><p><a href='https://github.com/gmmeyer/Asteroids'>source</a></p><p>I implemented the classic game utilizing javascript and HTML5.</p></article></article>" + 
		/* Active Record Lite */ "<article class='group portfolio-item'><a class='slider'><h2>Active Record Lite</h2><img src='images/active-record.png'></a><article class='slidee isHidden'><p><a href='https://github.com/gmmeyer/rails_lite_with_fun'>source</a></p><p>In order to get a better understanding of Rails, I cloned it. I built a webrick server, utilizing metaprogramming and a host of other tools.</p></article></article>" + 
		/* Rails Lite */ 
		"<article class='group portfolio-item'><a class='slider'><h2>Rails Lite</h2><img src='images/rails-lite.png'></a><article class='slidee isHidden'><p><a href='https://github.com/gmmeyer/active_record_with_fun'>source</a></p><p>Active Record is fascinating, both because it is the key part of Rails that interacts with the backend database and because it also showcases the powerful metaprogramming abilities of Ruby. So, I tried to identify the key parts of Active Record and then clone them.</p></article></article>" + 
		/* Chess */ "<article class='group portfolio-item'><a class='slider'><h2>Chess</h2><img src='images/chess1.png'></a><article class='slidee isHidden'><p><a href='https://github.com/gmmeyer/Chess'>source</a></p><p>Games like chess are awesome, they show the massive flexibility of Ruby's Object Oriented language. My chess game is largely a showcase of just that: it shows how objects inherit from one another, and how to utilize object inheritance to actually create real programs.</p></article></article>" + 
		/* Checkers */ "<article class='group portfolio-item'><a class='slider'><h2>Checkers</h2><img src='images/checkers1.png'></a><article class='slidee isHidden'><p><a href='https://github.com/gmmeyer/checkers'>source</a></p><p>Games like checkers are awesome, they show the massive flexibility of Ruby's Object Oriented language. My chess game is largely a showcase of just that: it shows how objects inherit from one another, and how to utilize object inheritance to actually create real programs.</p><p>Like Chess, this program aims to show the OOP flexibility of Ruby. However, this program is only a quarter as complex as chess which makes the code a lot cleaner.</p></article></section></section></div>" + 
	/* Contact Section */ "<div id='contact' class='contact-wrapper'><section id='contact' class='contact group'>" + 
	/* Contact */
		/*Email*/ "<a class='fontawesome' id='email'><i class='fa fa-envelope-o fa-5x'></i></a><a href='mailto:gregory.matthew.meyer@gmail.com?subject=Hey%20Greg!' class='slidee isHidden' id='email'><p>gregory.matthew.meyer@gmail.com</p></a>" +
		/* Phone */"<a class='fontawesome' id='phone'><i class='fa fa-phone fa-5x'></i></a><p class='slidee isHidden' id='phone'> 862 684 9101</p>" + 
		/* Skype */ "<a class='fontawesome' id='skype'><i class='fa fa-skype fa-5x'></i></a><p class='slidee isHidden' id='skype'>flubbishone</p>" + 
		/* Linkedin */ "<a class='fontawesome' href='http://www.linkedin.com/pub/gregory-meyer/37/864/702/'><i class='fa fa-linkedin fa-5x'></i></a>" + 
		"</section></div>"),

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
		"click #phone" : "openUp",
		"click #email" : "openUp"
	},

	openUp: function (event) {
		// console.log('boo')
		event.preventDefault();
		console.log(event);
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

	


})