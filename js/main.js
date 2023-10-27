var jQ = jQuery.noConflict();

jQ(document).ready(function () {
	if (typeof foo !== 'undefined') {
		// Now we know that foo is defined, we are good to go.
	}
	jQ('html').attr('user-agent', navigator.userAgent);
	var b = document.documentElement;
	b.setAttribute('data-useragent', navigator.userAgent);
	b.setAttribute('data-platform', navigator.platform);
	b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window)) ? ' touch' : '');


	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/windows phone/i.test(userAgent)) { jQ('html').addClass('windows'); }
	else if (/android/i.test(userAgent)) { jQ('html').addClass('android'); }
	else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { jQ('html').addClass('ios'); }


	jQ('#home-slider').on('slid.bs.carousel', function () {
		var n = jQ('.container.bullets .carousel-indicators li.active').attr('data-slide-to');
		// console.log(n);
		jQ('.extra-bullets .carousel-indicators li').removeClass('active');
		jQ('.extra-bullets .carousel-indicators li[data-slide-to="' + n + '"]').addClass('active');
	});

	jQ('#home-slider .extra-bullets .carousel-indicators li, #home-slider .container.bullets .carousel-indicators li').click(function () {
		var number = jQ(this).attr('data-slide-to');
		console.log(Number(number) - 1);
		jQ('#home-slider').carousel(Number(number) - 1);
	});


	jQ('#interior-banner-slider').on('slid.bs.carousel', function () {
		var n = jQ('.container.bullets .carousel-indicators li.active').attr('data-slide-to');
		// console.log(n);
		jQ('.extra-bullets .carousel-indicators li').removeClass('active');
		jQ('.extra-bullets .carousel-indicators li[data-slide-to="' + n + '"]').addClass('active');
	});

	jQ('#interior-banner-slider .extra-bullets .carousel-indicators li, #interior-banner-slider .container.bullets .carousel-indicators li').click(function () {
		var number = jQ(this).attr('data-slide-to');
		console.log(Number(number) - 1);
		jQ('#interior-banner-slider').carousel(Number(number) - 1);
	});


	/*START function Same height boxes--------------------*/

	function sameheight1($object) {
		var Box1 = 0;
		jQ($object).each(function () {
			if (jQ(this).height() > Box1) {
				Box1 = jQ(this).height();
			}
		});
		jQ($object).height(Box1);
	}

	function sameheight3($object) {
		var Box3 = 0;
		jQ($object).each(function () {
			if (jQ(this).outerHeight() > Box3) {
				Box3 = jQ(this).height();
			}
		});
		jQ($object).height(Box3);
	}

	// sameheight1("#");  

	function sameheight2($object1, $object2) {
		var Box2 = 0;
		jQ($object1).each(function () {
			if (jQ(this).height() > Box2) {
				Box2 = jQ(this).height();
			}
		});
		jQ($object2).height(Box2);
	}

	// sameheight2("#1", "#2" );

	function sameheight4($object1, $object2) {
		var Box2 = 0;
		jQ($object1).each(function () {
			if (jQ(this).outerHeight() > Box2) {
				Box2 = jQ(this).outerHeight();
			}
		});
		jQ($object2).height(Box2);
	}

	// sameheight2("#1", "#2" );

	/*END function Same height boxes--------------------*/
	/*Start function Slider Wrap into Item--------------*/

	function itemswrap($path, $number, $wrap) {
		var divgallry = jQ($path);
		for (var i = 0; i < divgallry.length; i += $number) {
			divgallry.slice(i, i + $number).wrapAll($wrap);
		}
	}
	function itemsunwrap($path) {
		jQ($path).unwrap();
	}

	/*END function Slider Wrap into Item----------------------------*/
	/*Start function Slider Bullets Wrap----------------------------*/

	function bulletsWrap($sliderID) {
		var indicatorsProduct = jQ($sliderID + " .carousel-item").size();
		var row = jQ('<li data-target="' + $sliderID + '"></li>');

		for (var i = 0; i < indicatorsProduct; i++) {
			jQ($sliderID + ' .carousel-indicators').append(row.clone());
		}
		var counterProduct = -1;
		jQ($sliderID + " .carousel-indicators li").each(function () {
			counterProduct++;
			var self = jQ(this);
			self.attr('data-slide-to', counterProduct);
		});

		jQ($sliderID + " .carousel-indicators li").first().addClass('active');
	}

	/*END function Slider Bullets Wrap----------------------------*/
	/*START Slider Touchable--------------------*/
	jQ("#home-slider").swiperight(function () {
		jQ(this).carousel('prev');
	});
	jQ("#home-slider").swipeleft(function () {
		jQ(this).carousel('next');
	});

	jQ("#carousel__testimonial_home").swiperight(function () {
		jQ(this).carousel('prev');
	});
	jQ("#carousel__testimonial_home").swipeleft(function () {
		jQ(this).carousel('next');
	});

	jQ(window).bind('load', function () {
		jQ('#loader').addClass('exit')
		setTimeout(function () {
			jQ('#loader').css('display', 'none');
		}, 1600);
	});


	// START WRAP THE LAST  WORD INTO A SPAN

	jQ('.boxes-interior-footer .item-col .box-page-link .content-box .title-box').html(function () {
		// separate the text by spaces
		var text = jQ(this).text().split(' ');
		// drop the last word and store it in a variable
		var last = text.pop();
		// join the text back and if it has more than 1 word add the span tag
		// to the last word
		return text.join(" ") + (text.length > 0 ? ' <span class="last">' + last + '</span>' : last);
	});

	// END WRAP THE LAST  WORD INTO A SPAN




	jQ('footer.footer .menu-footer-menu-container ul li').removeClass('menu-item-has-children');
	jQ('footer.footer .menu-footer-menu-container ul li').removeClass('dropdown');
	jQ('footer.footer .menu-footer-menu-container ul').removeClass('dropdown-menu');
	jQ('footer.footer .menu-footer-menu-container ul li a').removeClass('dropdown-toggle');

	/*Start Home Slider Wrap into Item----------------------------*/

	/*Start mouseover Item----------------------------*/
	// jQ(".section-d .card").mouseover(function(){
	// 	var takeImageSrc = jQ(this).find('.events-image').attr('src');
	//     jQ('.img-container .img-wrap img').attr('src', takeImageSrc);
	// });
	/*END mouseover Item----------------------------*/


	/*START buttons hover in cards--------------------*/

	// jQ('.section-d .card').hover(function(){
	// 	jQ(this).find('span[class*="btn"]').toggleClass('hover');
	// });

	/*END buttons hover in cards--------------------*/

	// jQ('.grid').masonry({
	// 	itemSelector: '.grid-item',
	// 	columnWidth: '.grid-sizer',
	// 	percentPosition: true
	// });

	/*END buttons hover in cards--------------------*/
	// if (jQ(window).width() > 991.98) {
	// 	/*********************
	// 	  Grid Gallery Initialize 
	// 	***************************/
	// 	jQ('.grid').masonry({
	// 	  // options
	// 	  itemSelector: '.grid-item',
	// 	  isFitWidth: true,
	// 	  //originTop: true,
	// 	  //originLeft: true,
	// 	  gutter: 0,
	// 	  columnWidth: false,
	// 	  fitWidth: true,
	// 	  //isFitWidth: true,
	// 	});
	// 	} else {
	// 	/*********************
	// 	  Grid Gallery Initialize 
	// 	***************************/
	// 	jQ('.grid-container').masonry({
	// 	  // options
	// 	  itemSelector: '.grid-item',
	// 	  isFitWidth: true,
	// 	  //originTop: true,
	// 	  //originLeft: true,
	// 	  gutter: 10,
	// 	  columnWidth: 360,
	// 	  fitWidth: true,
	// 	});
	// 	} /*END else*/


	var firstName = "";
	var lastName = "";
	var email = "";
	var dType = "";
	var receipt = "";
	var anon = "";
	var list = "";
	var amount = "";

	// jQ('.set-amount').autoGrow(0);

	/*
		if(isiPad || jQuery.browser.mobile){
			jQ('#team').hide()
			jQ('.team-mobile').show();	
		}else{
			jQ('#team').show()
			jQ('.team-mobile').hide();
		}
	*/

	//Set & Highlight Donation Amount
	jQ(".button").click(function () {
		jQ(".button").removeClass("selected");
		jQ(this).addClass("selected");

		jQ(this).find("input").focus();
	});

	//Grow the donation box if they type more than 4 numbers
	jQ(".set-amount").keyup(function () {

		if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
			this.value = this.value.replace(/[^0-9\.]/g, '');
		}

	});


	jQ("input").on("change", function () {
		// $(".donation-box").css("height", "500px");

		firstName = jQ("#firstName").val();
		lastName = jQ("#lastName").val();
		email = jQ("#email").val();

		if (jQ("#one-time").prop("checked")) {
			dType = "One-Time";
		}
		if (jQ("#monthly").prop("checked")) {
			dType = "Monthly";
		}

	});


	if (jQ(window).width() > 1199) {

		var counterBulletsSwiper = jQ('.slider-widget .arrow-container .carousel-indicators li').size();
		var bulletWidthSwiper = jQ('.slider-widget .arrow-container .carousel-indicators').width();
		jQ('.slider-widget .arrow-container .carousel-indicators li').width(bulletWidthSwiper / counterBulletsSwiper);


	}






	/*START Resize--------------------*/

	function myOrientResizeFunction() {

		jQ('.section-f .info-container #info-home-slider .carousel-item').css('height', 'auto');
		sameheight1(".section-f .info-container #info-home-slider .carousel-item");

		// jQ('.section-g .card-body').css('height','auto');
		// sameheight3(".section-g .card"); 

		if (jQ(window).width() > 767) {
			// jQ('.section-d .info-wrap').css('height','auto');
			// sameheight1(".section-d .info-wrap"); 

			// jQ('body.page .interior-section-j .card .card-body').css('height','auto');
			// sameheight1("body.page .interior-section-j .card .card-body"); 

			jQ('body:not(.home) .testimonials-block .card .card-text').css('height', 'auto');
			sameheight1("body:not(.home) .testimonials-block .card .card-text");



		}

		if (jQ(window).width() > 1023) {
			var counterBulletsSwiper = jQ('.slider-widget .extra-bullets .carousel-indicators li').size();
			var bulletWidthSwiper = jQ('.slider-widget .extra-bullets .carousel-indicators').width();
			jQ('.slider-widget .extra-bullets .carousel-indicators li').width(bulletWidthSwiper / counterBulletsSwiper);
		}

		if (jQ(window).width() > 1199) {

			// var counterBulletsSwiper = jQ('.slider-widget .extra-bullets .carousel-indicators li').size();  
			// var bulletWidthSwiper = jQ('.slider-widget .extra-bullets .carousel-indicators').width();
			// jQ('.slider-widget .extra-bullets .carousel-indicators li').width(bulletWidthSwiper / counterBulletsSwiper);


			// jQ('.slider-widget .slider-a').css('height','auto');
			// var vh = jQ(window).height();
			// var sliderHeight = jQ('.slider-widget .content-bottom').outerHeight() + vh;
			// jQ('.slider-widget .slider-a').css('height', sliderHeight);


			jQ('.interior-banner.with-content').css('height', 'auto');
			var vh = jQ(window).height() - 224;
			var sliderHeight = jQ('.interior-banner.with-content .interior-section-top').outerHeight() + vh;
			jQ('.interior-banner.with-content').css('height', sliderHeight);

			jQ(".section-c .content-wrap .single-box").first().addClass('active');
		}



		// jQ('.slider-widget .next-box .img-wrap').css('height','auto');
		// sameheight2(".slider-widget .next-box .box" );

		// jQ('.section-b .info-container').css('height','auto');
		// sameheight1(".section-b .info-container"); 

		setTimeout(function () {

			jQ('.container-blog-post.w20 .single-post .body-post').css('height', 'auto');
			sameheight1(".container-blog-post.w20 .single-post .body-post");

			jQ('.interior-page .entry-content .carousel_block_testimonials #carousel__testimonials .content-testimonial .quote').css('height', 'auto');
			sameheight1(".interior-page .entry-content .carousel_block_testimonials #carousel__testimonials .content-testimonial .quote	");

			jQ('.container-blog-post .card .card-body, .container-blog-post .card .body-post').css('height', 'auto');
			sameheight1(".container-blog-post .card .card-body, .container-blog-post .card .body-post");

		}, 500);


		var lBox = jQ('#wpadminbar').height();

		if (jQ('body').hasClass('logged-in')) {
			jQ('header.header').css("marginTop", lBox);
		}
		// var bBox = 0;
		// var bBox = jQ('.section-b .img-wrap').width();
		// jQ('.section-b .img-wrap').height(bBox);
		// setTimeout(function(){

		// },1000);

		setTimeout(function () {
			// var bBox = 0;
			// bBox = jQ('.lvtn-square').width(); 

			// jQ('.lvtn-square').height(bBox);

			// var bBox = 0;
			// bBox = jQ('.e .lvtn-square').width(); 

			// jQ('.e .lvtn-square').height(bBox);
		}, 1000);


		// if (jQ(window).width() > 1199){
		// 	/*END header desktop---------------------------------------------------*/

		// 	var menuTopD = jQ('#NavDropdown .mobile-container').clone(); 
		// 	// console.log(menuTopD);
		// 	if(menuTopD !== undefined){
		// 			jQ('.box-b').prepend(menuTopD);
		// 			jQ('#NavDropdown .mobile-container').remove();
		// 	}
		// }else{

		// 	var menuTopM = jQ('.box-b .mobile-container').clone(); 
		// 	if(menuTopM !== undefined){
		// 			jQ('#menu-main-menu, #menu-menu').after(menuTopM);
		// 			jQ('.box-b .mobile-container').remove();
		// 	}
		// }

		if (jQ(window).width() > 1200) {
			itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
			itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
			itemswrap("#testimonial-home-slider .single-box", 4, '<div class="content-wrap"></div>');
			sameheight1("#testimonial-home-slider .content-wrap");
			itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#sponsors-home-slider .content-wrap .single-box');
			itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
			itemswrap("#sponsors-home-slider .single-box", 5, '<div class="content-wrap"></div>');
			sameheight1("#sponsors-home-slider .content-wrap");
			itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
			itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
			itemswrap("#carousel__sponsors .single-sponsor", 4, '<div class="content-wrap"></div>');
			sameheight1("#carousel__sponsors .content-wrap");
			itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#carousel__sponsors .carousel-item").first().addClass('active');

			var $headerHeight = jQ('header.fixed-top');
			jQ('body').css('padding-top', $headerHeight.height() + 'px');

		}

		if (jQ(window).width() <= 1200 && jQ(window).width() > 768) {
			itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
			itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
			itemswrap("#testimonial-home-slider .single-box", 4, '<div class="content-wrap"></div>');
			sameheight1("#testimonial-home-slider .content-wrap");
			itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#sponsors-home-slider .content-wrap .single-box');
			itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
			itemswrap("#sponsors-home-slider .single-box", 5, '<div class="content-wrap"></div>');
			sameheight1("#sponsors-home-slider .content-wrap");
			itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
			itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
			itemswrap("#carousel__sponsors .single-sponsor", 4, '<div class="content-wrap"></div>');
			sameheight1("#carousel__sponsors .content-wrap");
			itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#carousel__sponsors .carousel-item").first().addClass('active');
		}

		if (jQ(window).width() < 1200) {
			jQ("body:not(.home) .custom-additional-info-block .taps-container .nav-link").click(function () {
				// var link = jQ(this).attr('href');
				var link = jQ('#services-tabContent');

				jQ('html,body').animate({
					scrollTop: jQ(link).offset().top - 92
				}, 600);
			});


			jQ("#accordionBlock .card .card-header .btn").click(function () {
				jQ(this).addClass('active');
				// var link = jQ(this).attr('href');
				var link = jQ('.show');

				jQ('html,body').animate({
					scrollTop: jQ(link).offset().top - 92
				}, 600);
			});


			// $('a[href^="#"]').on('click', function(event) {
			// 	var target = $(this.getAttribute('href'));
			// 	if( target.length ) {
			// 		event.preventDefault();
			// 		$('html, body').stop().animate({
			// 			scrollTop: target.offset().top
			// 		}, 1000);
			// 	}
			// });



		}

		// if(jQ('body').hasClass('page')){
		// 	// Get a reference to the <path>
		// 	var path = document.querySelector('#line-path');

		// 	// Get length of path... ~577px in this case
		// 	var pathLength = path.getTotalLength() - 00;

		// 	// Make very long dashes (the length of the path itself)
		// 	path.style.strokeDasharray = pathLength + ' ' + pathLength;

		// 	// Offset the dashes so the it appears hidden entirely
		// 	path.style.strokeDashoffset = pathLength;

		// 	// Jake Archibald says so
		// 	// https://jakearchibald.com/2013/animated-line-drawing-svg/
		// 	path.getBoundingClientRect();

		// 	// When the page scrolls...
		// 	window.addEventListener("scroll", function(e) {

		// 	// What % down is it? 
		// 	// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
		// 	// Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
		// 	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		// 	// Length to offset the dashes
		// 	var drawLength = pathLength * scrollPercentage;

		// 	// Draw in reverse
		// 	path.style.strokeDashoffset = pathLength - drawLength;

		// 	// When complete, remove the dash array, otherwise shape isn't quite sharp
		// 	// Accounts for fuzzy math
		// 	if (scrollPercentage >= 0.99) {
		// 		path.style.strokeDasharray = "none";

		// 	} else {
		// 		path.style.strokeDasharray = pathLength + ' ' + pathLength;
		// 	}

		// 	});

		// }


		// if(jQuery('body').hasClass('page')){
		// 	// Get a reference to the <path>
		// 	var path = document.querySelector('#line-path');
		// 	// Get length of path... ~577px in this case
		// 	var pathLength = path.getTotalLength();
		// 	// Make very long dashes (the length of the path itself)
		// 	path.style.strokeDasharray = pathLength + ' ' + pathLength;
		// 	// Offset the dashes so the it appears hidden entirely
		// 	path.style.strokeDashoffset = pathLength;
		// 	// Jake Archibald says so
		// 	// https://jakearchibald.com/2013/animated-line-drawing-svg/
		// 	path.getBoundingClientRect();
		// 	// When the page scrolls...
		// 	window.addEventListener("scroll", function(e) {
		// 	// What % down is it? 
		// 	// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
		// 	// Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
		// 	const offsetFrom = 20;

		// 	if (path.getBoundingClientRect().top <= offsetFrom) {
		// 		var scrollPercentage = ((document.documentElement.scrollTop - document.getElementById('line-animation').offsetTop) / pathLength);
		// 		console.log(pathLength * scrollPercentage);
		// 		// Length to offset the dashes
		// 		var drawLength = pathLength * scrollPercentage;
		// 		// Draw in reverse
		// 		path.style.strokeDashoffset = pathLength - drawLength - offsetFrom;
		// 		// When complete, remove the dash array, otherwise shape isn't quite sharp
		// 		// Accounts for fuzzy math
		// 		if (scrollPercentage >= 0.99) {
		// 			path.style.strokeDasharray = "none";
		// 		} else {
		// 			path.style.strokeDasharray = pathLength + ' ' + pathLength;
		// 		}
		// 	}
		// });

		// }


		if (jQ('body').hasClass('page-id-92839')) {
			jQuery(window).scroll(function () {
				var positionDiv = jQuery("#line-animation").offset().top - 450;
				if (jQuery(window).scrollTop() > positionDiv) {
					var $percentageComplete = (((jQuery(window).scrollTop() - positionDiv) / jQuery("#line-animation").height()) * 100);
					var $newUnit = jQuery("#line-svg").height();;
					var $offsetUnit = parseInt($percentageComplete * $newUnit / 100, 10);
					// console.log($offsetUnit);
					var base = "M0 0L0 ";
					var $uni = base.concat($offsetUnit);
					jQuery("#line-path").attr("d", $uni);
				}
			});

		}





		if (jQ(window).width() <= 768 && jQ(window).width() > 599) {
			itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
			itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
			itemswrap("#testimonial-home-slider .single-box", 2, '<div class="content-wrap"></div>');
			sameheight1("#testimonial-home-slider .content-wrap");
			itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
			itemswrap("#sponsors-home-slider .single-box", 3, '<div class="content-wrap"></div>');
			sameheight1("#sponsors-home-slider .content-wrap");
			itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
			itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
			itemswrap("#carousel__sponsors .single-sponsor", 2, '<div class="content-wrap"></div>');
			sameheight1("#carousel__sponsors .content-wrap");
			itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#carousel__sponsors .carousel-item").first().addClass('active');

		}

		if (jQ(window).width() < 600) {
			itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
			itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
			itemswrap("#testimonial-home-slider .single-box", 1, '<div class="content-wrap"></div>');
			sameheight1("#testimonial-home-slider .content-wrap");
			itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
			itemswrap("#sponsors-home-slider .single-box", 1, '<div class="content-wrap"></div>');
			sameheight1("#sponsors-home-slider .content-wrap");
			itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

			itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
			itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
			itemswrap("#carousel__sponsors .single-sponsor", 1, '<div class="content-wrap"></div>');
			sameheight1("#carousel__sponsors .content-wrap");
			itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
			jQ("#carousel__sponsors .carousel-item").first().addClass('active');
		}


		// jQ(".tribe_events-template-default").load();

		// if (window.location.href.substr(-2) !== '?r') {
		// 	window.location = window.location.href + '?r';
		// }







		if (jQ(".section-testimonials-carousel").length > 0) {

			var $title_section_float = jQ('.container-control');
			var $positionDiv = jQ('#carousel__testimonial_home .left-side').offset().top - jQ('#carousel__testimonial_home').offset().top;
			jQ($title_section_float).css('top', $positionDiv);
			jQ('#carousel__testimonial_home .left-side').css('padding-top', $title_section_float.outerHeight() + 'px');

		} /*---- Only on HomePage ---*/



		// jQ('.carousel-sync').carousel('cycle');
		// jQ('.carousel-sync').on('click', '.carousel-control[data-slide]', function (ev) {
		// 	ev.preventDefault();
		// 	jQ('.carousel-sync').carousel(jQ(this).data('slide'));
		// });
		// jQ('.carousel-sync').on('mouseover', function(ev) {
		// 	ev.preventDefault();
		// 	jQ('.carousel-sync').carousel('pause');
		// });

		// jQ('.carousel-sync').on('slide.bs.carousel', function(ev) {
		// 	// get the direction, based on the event which occurs
		// 	// var dir = ev.direction == 'right' ? 'prev' : 'next';
		// 	var dir = ev.to;
		// 	// get synchronized non-sliding carousels, and make'em sliding
		// 	jQ('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
		// });
		// jQ('.carousel-sync').on('slid.bs.carousel', function(ev) {
		// 	// remove .sliding class, to allow the next move
		// 	jQ('.carousel-sync').removeClass('sliding');
		// });

		jQ('.carousel-sync').on('slide.bs.carousel', function (ev) {
			var dir = ev.to;
			jQ('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
			jQ('.carousel-indicators.info-slider li').removeClass('active');
			jQ('.carousel-indicators.info-slider li[data-slide-to="' + dir + '"]').addClass('active');
		});
		jQ('.carousel-sync').on('slid.bs.carousel', function (ev) {
			jQ('.carousel-sync').removeClass('sliding');
		});



		// jQ('#image-slider').removeClass('active');
		// if (jQ('#image-slider .carousel-item').hasClass('active')){
		// 	jQ('#image-slider .carousel-item.active').parent().parent().addClass('active');
		// } 
		// jQ('.card button').click(function(){
		// setTimeout(function(){
		// 	if (jQ('#image-slider .carousel-item').hasClass('active')){
		// 		jQ('.accordion.accordion-style-1 .card').removeClass('active')
		// 		jQ('#image-slider .carousel-item.active').parent().addClass('active');
		// 	} 
		// },400);

		// });





		setTimeout(function () {

			// var $headerHeight = jQ('header.fixed-top');
			// jQ('body').css('padding-top',$headerHeight.height()+'px');

		}, 500);




		if (jQ(window).width() <= 992 || jQ('html').hasClass('touch') || jQ('html').hasClass('android') || jQ('html').hasClass('ios')) {

			// START Fixed Header--------------------
			var $headerOffset = jQ('header.header').offset().top;
			if ($headerOffset >= 160) {
				jQ('body').addClass('fixed');
			}
			jQ(window).bind('scroll', function () {
				if (jQ(window).scrollTop() > 10) {
					jQ('body').addClass('fixed');
				}
				else {
					jQ('body').removeClass('fixed');
				}
			});

			// END Fixed Header--------------------*/


			/*START Include Dropdown Button--------------------*/
			jQ('.dropdown-btn').remove();
			var itemBtn = '<button  class="dropdown-toggle dropdown-btn"><span class="fas fa-caret-right"></span></button>';
			jQ('header .nav .dropdown > a').after(itemBtn);
			/*END Include Dropdown Button--------------------*/

			var $sidenav = jQ('#NavDropdown'),
				$toggler = jQ('.navbar-toggler');

			$sidenav.css('opacity', 0);
			$sidenav.css('right', '-100%');

			$toggler.click(function () {
				$toggler.toggleClass('active');
				if (!$sidenav.hasClass('show')) {
					showSidenav();
					jQ("header.header").addClass('active');
				} else {
					hideSidenav();
					jQ("header.header").removeClass('active');
				}
				$sidenav.toggleClass('show');
			});

			function showSidenav() {
				$sidenav.css('opacity', 1);
				window.setTimeout(function () {
					$sidenav.css({
						'right': '0%',
					});
				}, 100);
				$sidenav.addClass('show');
			};

			function hideSidenav() {
				$sidenav.css({
					'right': '-100%'
				});
				window.setTimeout(function () {
					$sidenav.css('opacity', 0);
				}, 500);
				$sidenav.removeClass('show');
			};

			/*START Dropdown Main Menu Animation--------------------*/
			jQ(".dropdown-btn").unbind();
			jQ('.dropdown, .dropdown-menu').unbind();

			jQ(".dropdown-btn, .dropdown-toggle .dropdown-btn").click(function () {
				jQ(this).find('.fas').toggleClass('open');
				jQ(this).next().slideToggle();
			});
			/*END Dropdown Main Menu Animation--------------------*/

			/*START Dropdown Main Menu Animation--------------------*/
			jQ('header .nav .dropdown .dropdown-menu').css('display', 'none');
			jQ(".dropdown, .dropdown-menu .dropdown").unbind();
			/*jQ(".navbar-header button.navbar-toggle").click(function(event) {
					event.preventDefault();
				jQ(".dropdown-menu").slideUp("400");
			});*/
			jQ("#NavDropdown ul li.menu-item-has-children").each(function () {
				jQ('#NavDropdown ul li.menu-item-has-children ul li.active').parent().parent().addClass('active');
			});
			/*END Dropdown Main Menu Animation--------------------*/

			jQ('body').addClass('yes');
		} else {
			if (!jQ('html').hasClass('touch') || jQ('html').hasClass('android') || jQ('html').hasClass('ios')) {
				if (jQ(window).width() >= 993) {




					if (jQ(window).scrollTop() > 60) {
						jQ('body').addClass('fixed');
						jQ('body').addClass('show-search');
					}


					var lastScrollTop = 0;
					jQ(window).scroll(function (event) {
						if (jQ(window).scrollTop() > 60) {
							jQ('body').addClass('fixed');
						}
						else {
							jQ('body').removeClass('fixed');
						}
						var st = jQ(this).scrollTop();
						if (st > lastScrollTop) {
							// downscroll code
							jQ('body').addClass('show-search');
						} else {
							// upscroll code
							jQ('body').removeClass('show-search');
						}
						lastScrollTop = st;
					});
					/*END Fixed Header--------------------*/



					/*START header desktop------------------------------------------------*/
					jQ(".dropdown-btn").unbind();
					jQ('.dropdown, .dropdown-menu').unbind();
					jQ('.dropdown-btn').remove();

					/*START Dropdown Main Menu Animation--------------------*/
					jQ('.dropdown, .dropdown-menu').hover(function () {
						jQ(this).children('.dropdown-menu').stop(true, false).slideDown("fast").addClass('display_dropdown');
					}, function () {
						jQ(this).children('.dropdown-menu').stop(true, false).slideUp("fast").removeClass('display_dropdown');
					});
					jQ(".dropdown-btn").click(function () {
						jQ(this).next().slideToggle("fast");
					});

					// jQ('header.header .container').removeClass('container').addClass('container-fluid');

				}
			}

			jQ('#NavDropdown ul.navbar-nav > li > a').mouseenter(function () {
				var id = jQ(this).parent().attr('id');
				//console.log(id);          
				jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
				jQ('#mega-' + id).stop(true, false).slideDown('slow').addClass('active');
				jQ('body').addClass('mega-menu-opened');
			});

			jQ('header.header').mouseleave(function () {
				jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
				jQ('body').removeClass('mega-menu-opened');
			});
		}

		if (jQ(window).width() <= 767.98) {

			setTimeout(function () {

				var $headerHeight = jQ('header.fixed-top');
				// jQ('body').css('padding-top', $headerHeight.height() + 'px');

			}, 500);
			var $sidenav = jQ('#NavDropdown'),
				$toggler = jQ('.navbar-toggler');

			$toggler.click(function () {
				// $toggler.toggleClass('active');
				if (!$sidenav.hasClass('show')) {
					showSidenav();
				} else {
					hideSidenav();
				}
				$sidenav.toggleClass('show');
			});

			function showSidenav() {
				$sidenav.css('opacity', 1);
				window.setTimeout(function () {
					$sidenav.css({
						'right': '0%',
					});
				}, 100);
				$sidenav.addClass('show');
			};

			function hideSidenav() {
				$sidenav.css({
					'right': '-100%'
				});
				window.setTimeout(function () {
					$sidenav.css('opacity', 0);
				}, 500);
				$sidenav.removeClass('show');
			};
		}




		/*END header mobile-------------------------------------------------------------------------------------------*/

		/********************************
			Carousel Homepage 
		********************************/
		jQ('#home-slider ol.carousel-indicators li').remove();
		bulletsWrap("#home-slider");

		jQ('.section-h #carousel__sponsors ol.carousel-indicators li').remove();
		bulletsWrap(".section-h #carousel__sponsors");

		//  jQ('#info-slider ol.carousel-indicators li').remove();
		//  bulletsWrap("#info-slider");


	} myOrientResizeFunction();

	//*START carousels Touchable--------------------*/

	jQ(window).bind('resize', function (e) {
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function () {
			// this.location.reload(false); /* false to get page from cache */
			myOrientResizeFunction();
		}, 0);
	});

	jQ(window).resize(function () {
		myOrientResizeFunction();
	});







	// if (jQ('html')('touch'))

	// if (jQ('html[data-useragent^="10_15"]')) {
	// 	jQ('html').addClass('ipad');
	// }

	// if (jQ('html[data-useragent^="10_15_"]')) {
	// 	jQ('html').addClass('mac');
	// 	jQ('html').removeClass('ipad');
	// }





	function isTouchDevice() {
		var el = document.createElement('div');
		el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
		return typeof el.ongesturestart === "function";
	}

	if ("ongesturestart" in document.documentElement) {
		// alert("It's a touch screen device.");
		jQ('html').addClass('touch');
	}
	else {
		// alert("Others devices");
		jQ('html').removeClass('touch');
	}

	// if (jQ('html[data-useragent*="10_15"]')){
	// 	// START Fixed Header--------------------
	// 	var $headerOffset = jQ('header.header').offset().top;
	// 	if( $headerOffset >= 160 ){
	// 	jQ('body').addClass('fixed');
	// 	}
	// 		jQ(window).bind('scroll', function () {
	// 				if (jQ(window).scrollTop() > 10) {
	// 					jQ('body').addClass('fixed');
	// 				}
	// 				else {
	// 					jQ('body').removeClass('fixed');
	// 				}
	// 		});

	// 	// END Fixed Header--------------------*/


	// 	/*START Include Dropdown Button--------------------*/
	// 		jQ('.dropdown-btn').remove();
	// 		var itemBtn = '<button  class="dropdown-toggle dropdown-btn"><span class="fas fa-caret-right"></span></button>';
	// 		jQ( 'header .nav .dropdown > a').after(itemBtn);
	// 	/*END Include Dropdown Button--------------------*/

	// 		var $sidenav = jQ('#NavDropdown'),
	// 			$toggler = jQ('.navbar-toggler');

	// 		$sidenav.css('opacity', 0);
	// 		$sidenav.css('right', '-100%');

	// 		$toggler.click(function() {
	// 			$toggler.toggleClass('active');
	// 			if (!$sidenav.hasClass('show')) {
	// 				showSidenav();
	// 				jQ("header.header").addClass('active');
	// 			} else {
	// 				hideSidenav();
	// 				jQ("header.header").removeClass('active');
	// 			}
	// 			$sidenav.toggleClass('show');
	// 		});

	// 		function showSidenav() {
	// 			$sidenav.css('opacity', 1);
	// 			window.setTimeout(function() {
	// 				$sidenav.css({
	// 					'right':'0%',
	// 				});
	// 			}, 100);
	// 			$sidenav.addClass('show');
	// 		};

	// 		function hideSidenav() {
	// 			$sidenav.css({
	// 				'right':'-100%'
	// 			});
	// 			window.setTimeout(function() {
	// 				$sidenav.css('opacity', 0);
	// 			}, 500);
	// 			$sidenav.removeClass('show');
	// 		};

	// 		/*START Dropdown Main Menu Animation--------------------*/
	// 			jQ(".dropdown-btn").unbind();
	// 			jQ('.dropdown, .dropdown-menu').unbind();

	// 			jQ(".dropdown-btn, .dropdown-toggle .dropdown-btn").click(function(){
	// 					jQ(this).find('.fas').toggleClass('open');
	// 					jQ(this).next().slideToggle();
	// 			});
	// 		/*END Dropdown Main Menu Animation--------------------*/

	// 		/*START Dropdown Main Menu Animation--------------------*/
	// 			jQ('header .nav .dropdown .dropdown-menu').css('display','none');
	// 			jQ(".dropdown, .dropdown-menu .dropdown").unbind();
	// 			/*jQ(".navbar-header button.navbar-toggle").click(function(event) {
	// 					event.preventDefault();
	// 				jQ(".dropdown-menu").slideUp("400");
	// 			});*/
	// 			jQ( "#NavDropdown ul li.menu-item-has-children").each(function(){        
	// 				jQ('#NavDropdown ul li.menu-item-has-children ul li.active').parent().parent().addClass('active');
	// 			});
	// 		/*END Dropdown Main Menu Animation--------------------*/

	// 	jQ('body').addClass('yes');
	// }


	/*START Search--------------------*/
	jQ('.search #searchform #s').attr('placeholder', 'Search here...');
	jQ('.open-search').click(function () {
		jQ('.search-section').slideToggle('400');
		setTimeout(function () {
			jQ('#s').focus();
		}, 500);
	});
	/*END Search--------------------*/

});

// jQ('.section-c .card').hover(function(){

// 	jQ('.section-c .card-img-overlay').slideToggle('400');

// }); 





// (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector(".section-c");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();





if (jQ(window).width() >= 1199.99) {
	jQ('.boxes-interior-footer .item-col .box-page-link .content-box .hover-wrap').css('display', 'none');
	jQ('.boxes-interior-footer .item-col .box-page-link').hover(function () {
		jQ(this).find('.hover-wrap').slideToggle('400');
		// jQ(this).toggleClass("active");
	});


	jQ('body:not(.home) .call-out-boxes-block .card-text').css('display', 'none');
	jQ('body:not(.home) .call-out-boxes-block .card').hover(function () {
		jQ(this).find('.card-text').slideToggle('400');
		// jQ(this).toggleClass("active");
	});


	// jQ('.section-d .card-text').css('display','none');
	// jQ('.section-d .card').hover(function(){
	// 	jQ(this).find('.card-text').stop(true, false).slideDown("400");
	// }, function(){
	// 		jQ(this).find('.card-text').stop(true, false).slideUp("400");
	// });


	jQ('body:not(.home) .blog-block .main-box .card-text').css('display', 'none');
	jQ('body:not(.home) .blog-block .main-box .card').hover(function () {
		jQ(this).find('.card-text').stop(true, false).slideDown("400");
	}, function () {
		jQ(this).find('.card-text').stop(true, false).slideUp("400");
	});

	/*START buttons hover in cards--------------------*/

	jQ('.boxes-interior-footer .card').hover(function () {
		jQ(this).find('span[class*="btn"]').toggleClass('hover');
	});

	jQ('.section-g .single-box').hover(function () {
		jQ(this).find('span[class*="btn"]').toggleClass('hover');
	});


	// jQ('.section-e .content-wrap .single-box' ).hover(function(){
	// 	jQ(this).removeClass('hide').addClass('active');
	// });

	// jQ(".section-d .content-wrap .single-box").addClass("hide")

	// jQ(".section-d .content-wrap .single-box").hover(function(){
	// 	if (jQ(this).hasClass('hide')){
	// 		jQ(this).removeClass('hide').addClass('active');
	// 	}else{
	// 		jQ(this).removeClass('active').addClass('hide');
	// 	}

	// });




	/*END buttons hover in cards--------------------*/

}


var sectionC = jQ('#counter');
if (sectionC.length !== 0) {
	var dTop = jQ('#counter').offset().top;
	//console.log(dTop);
	var once = 0;
	jQ(window).bind('scroll', function () {
		if (jQ(window).scrollTop() > (dTop - 500)) {
			if (once == 0) {
				//console.log('in');
				jQ('.numscroller').each(function () {
					jQ(this).prop('Counter', 0).animate({
						Counter: parseInt(jQ(this).text())
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							jQ(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
						}
					});
				});
				jQ('.numscrollerdec').each(function () {
					jQ(this).prop('Counter', 0).animate({
						Counter: parseFloat(jQ(this).text()).toFixed(1)
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							jQ(this).text(parseFloat(now).toFixed(1));
						}
					});
				});
				jQ('.numscrolleryears').each(function () {
					jQ(this).prop('Counter', 0).animate({
						Counter: parseInt(jQ(this).text())
					}, {
						duration: 3000,
						easing: 'swing',
						step: function (now) {
							jQ(this).text(parseInt(now));
						}
					});
				});
				once = 1;
			}
		} else {
			// once = 0;
		}
	});
}

jQ("button.video.mp4").click(function () {
	var theModal = jQ(this).data("target"),
		videoSRC = jQ(this).attr("data-video"),
		videoSRCauto = videoSRC;
	jQ(theModal).find("video").css("display", "block");
	jQ(theModal).find("iframe").css("display", "none");
	jQ(theModal + ' video source').attr('src', videoSRCauto);
	setTimeout(function () {
		jQ(theModal + ' video').get(0).load();
		jQ(theModal + ' video').get(0).play();
	}, 500);

	jQ(theModal + ' button.close').click(function () {
		jQ(theModal + ' video source').attr('src', videoSRC);
		jQ(theModal + ' video').get(0).pause();
	});
});

jQ("button.video.youtube").click(function () {
	var theModal1 = jQ(this).data("target"),
		videoSRC1 = jQ(this).attr("data-video"),
		videoSRCauto1 = videoSRC1 + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
	jQ(theModal1).find("video").css("display", "none");
	jQ(theModal1).find("iframe").css("display", "block");
	jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
	jQ(theModal1 + ' button.close, .modal').click(function () {
		jQ(theModal1 + ' iframe').attr('src', videoSRC1);
	});
});

jQ("button.video.vimeo").click(function () {
	var theModal1 = jQ(this).data("target"),
		videoSRC1 = jQ(this).attr("data-video"),
		videoSRCauto1 = videoSRC1 + "?autoplay=1&loop=1&autopause=0";
	jQ(theModal1).find("video").css("display", "none");
	jQ(theModal1).find("iframe").css("display", "block");
	jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
	jQ(theModal1 + ' button.close, .modal').click(function () {
		jQ(theModal1 + ' iframe').attr('src', videoSRC1);
		jQ('.modal-backdrop').remove();
	});
});

if (jQ('.modal[role="dialog"]') !== undefined) {
	jQ('.modal[role="dialog"]').each(function () {
		jQ(this).appendTo('body');
	});
}

if (jQ('.team_panel[role="dialog"]') !== undefined) {
	jQ('.team_panel[role="dialog"]').each(function () {
		jQ(this).appendTo('body');
	});
}


jQ(".btn-modal").click(function () {
	jQ(".team-bios-modal").removeClass("hide");
});

jQ(".team-bios-modal .close").click(function () {
	jQ(this).parent().parent().parent().parent().parent().toggleClass("hide");
	jQ(this).parent().parent().parent().parent().parent().toggleClass("show");

	setTimeout(() => {
		jQ(this).parent().parent().parent().parent().parent().css("display", 'none');
		jQ('.modal-backdrop').remove();
		jQ('body').removeClass('modal-open');
		jQ(".team-bios-modal").removeClass("hide");

	}, 500);
});

// jQ("body:not(.home) .interior-section-i .nav-link").click(function() {
// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

// 		var target = jQ(this.hash);
// 		target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
// 		if (target.length) {
// 			jQ('html,body').animate({
// 					scrollTop: target.offset().top - 100
// 			}, 600);
// 			return false;
// 		}   
// 	}
// });



/*FUNCTION SLOW ANIMATION ANCHOR LINKS-------------------------------*/

/* Add rel="external" to links that are external (this.hostname !== location.hostname) BUT don't add to anchors containing images */
// jQ('body p a').each(function() {
//   // Compare the anchor tag's host name with location's host name
//   return this.hostname && this.hostname !== location.hostname;
// }).not('a:has(img)').attr("rel","external");


jQ(".anchor, li.anchor a, p.anchor a, .anchor a").click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

		var target = jQ(this.hash);
		target = target.length ? target : jQ('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			jQ('html,body').animate({
				scrollTop: target.offset().top - 135
			}, 600);
			return false;
		}
	}
});

// jQ("#accordionBlock .card .card-header h2 .btn").click(function() {
// 	jQ('html,body').animate({
// 		scrollTop: target.offset().top - 180
// 	}, 600);
// 	return false;
// });


var $donateBarHeight = jQ('.donate-bar');
jQ(".donate-bar .close").click(function () {
	jQ('.donate-bar').css('margin-top', - $donateBarHeight.outerHeight() + 'px');
});




var $headerHeight = jQ('header.fixed-top');
// jQ('body').css('padding-top',$headerHeight.height()+'px');

jQ('.collapse').on('shown.bs.collapse', function (e) {
	var $card = jQ(this).closest('.card');
	jQ('html,body').animate({
		scrollTop: $card.offset().top - $headerHeight.height()
	}, 500);
});



// ===== Scroll to Top ==== 
/*
	jQ(window).scroll(function() {
			if (jQ(this).scrollTop() >= 600) {     // If page is scrolled more than 50px
				jQ('#return-to-top').fadeIn('slow');    // Fade in the arrow
			} else {
				jQ('#return-to-top').fadeOut('fast');   // Else fade out the arrow
			}
	});
*/
jQ(function () {
	jQ('#return-to-top').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var target = jQ(this.hash);
			target = target.length ? target : jQ('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				jQ('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

jQ(".anchor-box").click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

		var target = jQ(this.hash);
		target = target.length ? target : jQ('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			jQ('html,body').animate({
				scrollTop: target.offset().top - 135
			}, 600);
			return false;
		}
	}
});

jQ(".anchor-link").click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

		var target = jQ(this.hash);
		target = target.length ? target : jQ('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			jQ('html,body').animate({
				scrollTop: target.offset().top - 135
			}, 600);
			return false;
		}
	}
});



jQ(".btn-video").click(function () {
	var parentVideoContainer = jQ(this).parents(".image-video-container");
	var imageContainer = parentVideoContainer.find(".image-container");
	imageContainer.fadeOut(600);
	var videoContainer = parentVideoContainer.find(".video-container");
	videoContainer.addClass("active");
});
