/*
 * Copyright (c) 2014 MyPassion
 * Author: MyPassion 
 * This file is made for CURRENT TEMPLATES
*/

	

// ----------------------------------------------------  CONTACT FORM

function submitForm(){
	"use strict";
	var msg;
	$.post('plugin/sendmail.html',$('#contactForm').serialize(), function(msg) {
		$(".alertMessage").html(msg);
	});
	// Hide previous response text
	$(msg).remove();
	// Show response message
	contactform.prepend(msg);
}



// -----------------------------------------------------  LOADING

window.onload=function() {
    document.getElementById('loading-mask').style.display='none';

}



jQuery(document).ready(function($){
		
	"use strict";	
	
	
	
// -----------------------------------------------------  LOGO

	var logoheight = jQuery(".logo-wrap").outerHeight();
	var navheight = jQuery(".sf-menu>li>a").outerHeight();
	
	var resultheight = (logoheight-navheight)/2;
	
	jQuery(".sf-menu>li>a").css({paddingTop:resultheight, paddingBottom:resultheight,});
	
	
	
// ----------------------------------------------------- REVOLUTION SLIDER

	if (jQuery.fn.cssOriginal!=undefined)
	  jQuery.fn.css = jQuery.fn.cssOriginal;
	  jQuery('.fullwidthbanner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:500,

		onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

		thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight:50,
		thumbAmount:3,

		hideThumbs:1,
		navigationType:"none",				// bullet, thumb, none
		navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

		navigationStyle:"round-old",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


		navigationHAlign:"center",				// Vertical Align top,center,bottom
		navigationVAlign:"bottom",					// Horizontal Align left,center,right
		navigationHOffset:0,
		navigationVOffset:10,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,

		touchenabled:"on",						// Enable Swipe Function : on/off


		stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


		fullWidth:"on",

		shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
	});

	
		
// -----------------------------------------------------  CBPQTROTATOR		
	
	jQuery( '#cbp-qtrotator' ).cbpQTRotator({
		/*
		- how to call the plugin:
		$( selector ).cbpQTRotator( [options] );
		- options:
		{
			// default transition speed (ms)
			speed : 700,
			// default transition easing
			easing : 'ease',
			// rotator interval (ms)
			interval : 8000
		}
		- destroy:
		$( selector ).cbpQTRotator( 'destroy' );
		*/

	});



// -----------------------------------------------------  MENU
	
	if(jQuery().superfish){
		jQuery('ul.sf-menu').superfish({
			delay:       100,                            // one second delay on mouseout
			speed:       'slow',                          // faster animation speed
			autoArrows:  true                            // disable generation of arrow mark-up	
		});	
	}
	
	jQuery('#nav ul li li a').mouseenter(function() {
			jQuery(this).animate({ paddingLeft:'+=10'}, 200, 'swing');
		}).mouseleave(function() {
			jQuery(this).animate({ paddingLeft:'-=10'}, 200, 'swing');
		});
	
	
	var winWidth = jQuery(window).width();
	
	if( winWidth > 979 ){
		jQuery("nav").sticky({ topSpacing: 0});	
	}
		
	
	

// -----------------------------------------------------  PAGE SCROLL	
	
	jQuery(function() {
		jQuery('.scroll').bind('click', function(event) {
			var $anchor = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery($anchor.attr('href')).offset().top - 73
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	}); 


	jQuery(function() {
		jQuery('.scroll-mobile').bind('click', function(event) {
			var anchora = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery(anchora.attr('href')).offset().top - 675
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	


// -----------------------------------------------------  MOBILE MENU TOGGLE
	
	jQuery('.nav-toggle a').click(function(){
		jQuery('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	jQuery('.mobile-menu ul li a').prepend('<i class="icon-right-dir"></i>');
	
	jQuery('.menu li a').click(function(){
		jQuery('.mobile-menu').stop(true,true).fadeOut(500);
		return false;
	});




// -----------------------------------------------------  Animation
	
	jQuery(window).load(function(e) {
		
		jQuery(".service-animation").waypoint({  // Service
	
			handler: function portfolioPopup(){
						jQuery('.service-animation>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".portfolio-animation").waypoint({  // portfolio 
	
			handler: function portfolioPopup(){
						jQuery('.portfolio-animation>li').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".og-grid-5").waypoint({  // Pricess 
	
			handler: function portfolioPopup(){
						jQuery('.og-grid-5>article').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
    });
	


// -----------------------------------------------------  EASY PIE CHART
	
	jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage').easyPieChart({
						barColor: '#41769c',
						trackColor: '#fff',
						scaleColor: false,
						lineCap: 'round',
						rotate: 0,
						lineWidth: 5,
						animate: 2000,
						size:180,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
				},
		offset: '95%'
	
	})
	
	jQuery('.fun-fact').waypoint({
		handler: function mpchart(){
			jQuery(this).find('.percentage-2').easyPieChart({
				barColor: false,
				trackColor: false,
				scaleColor: false,
				lineCap: 'butt',
				rotate: 0,
				lineWidth: false,
				animate: 3000,
				size:false,
				onStep: function(value) {
					this.$el.find('h1').text(Math.round(value));
				}
			});	
		},
		offset: '95%'
	})
	
	
	
// -----------------------------------------------------  FLEX SLIDER
	
	if(jQuery().flexslider) {
		jQuery('.flexslider').flexslider({
			animation: 'fade',
			controlNav: true,
			slideshowSpeed: 4000,
			animationDuration: 300
		});	
	}
	


// -----------------------------------------------------  COOLCAROUSEL
		
	function teamCarousel(){
		jQuery('.team-carousel').each(function() {		
			jQuery(this).find('ul').carouFredSel({
				auto: {
					items: 1,
					duration        : 0.2, 
					timeoutDuration : 3000,
					pauseOnHover    : true,
					easing          : 'easeInOutBack',
				},
				prev : {
					button : jQuery(this).find('.tfs-nav-left'),
					key : "left",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				next : {
					button : jQuery(this).find('.tfs-nav-right'),
					key : "right",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				swipe : {
					onTouch     : true,
					onMouse     : true,
					options      : {
			        	excludedElements: "button, input, select, textarea, .noSwipe"	
			        }
				},
				width: '100%',
				height: 'variable',
				align: 'center',
			});
		});
	}
	
	
	if(jQuery().carouFredSel) {
		teamCarousel();
	}
	
	
	
	
	function clientCarousel(){
		jQuery('.clients-carousel').each(function() {		
			jQuery(this).find('ul').carouFredSel({
				auto: {
					items: 1,
					duration        : 0.2, 
					timeoutDuration : 3000,
					pauseOnHover    : true,
					easing          : 'easeInOutBack',
				},
				prev : {
					button : jQuery(this).find('.cfs-nav-left'),
					key : "left",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				next : {
					button : jQuery(this).find('.cfs-nav-right'),
					key : "right",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				swipe : {
					onTouch     : true,
					onMouse     : true,
					options      : {
			        	excludedElements: "button, input, select, textarea, .noSwipe"	
			        }
				},
				width: '100%',
				height: 'variable',
				align: 'center',
			});
		});
	}
	
	
	if(jQuery().carouFredSel) {
		clientCarousel();
	}



// -----------------------------------------------------  GOOGLE MAP		
	
	jQuery(document).ready(function(){ 
		var myLatlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
		  center: myLatlng,
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById("map"),  myOptions);
		var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title:"Click Me for more info!"
		});
		
		var infowindow = new google.maps.InfoWindow({});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent("Write here some description"); //sets the content of your global infowindow to string "Tests: "
			infowindow.open(map,marker); //then opens the infowindow at the marker
		});
		marker.setMap(map);
	});	
	

	
// -----------------------------------------------------  PORTFOLIO	
	
	Grid.init();
	
	

});
