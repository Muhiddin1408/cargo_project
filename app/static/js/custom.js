// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
    'use strict'; // use strict mode

    // hide preloader
    jQuery('#preloader').delay(500).fadeOut(500);


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // touch and swipe owl carousel
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    jQuery("#testi-carousel").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        navigation: false
    });
    jQuery("#testi-carousel-2").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        navigation: false,
        pagination: true
    });

    jQuery("#awards-carousel").owlCarousel({
        items: 3,
        navigation: false,
        pagination: false,
    });
	
	
    jQuery(".gallery-carousel").owlCarousel({
        items: 3,
        navigation: false,
        pagination: true,
    });
	
    jQuery(".carousel-text").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        navigation: false,
        pagination: false
    });
    jQuery(".single-carousel-arrow-nav").owlCarousel({
        singleItem: true,
        lazyLoad: false,
        navigation: false,
        pagination: false
    });

    jQuery(".single-carousel-no-nav").owlCarousel({
        singleItem: true,
        lazyLoad: false,
        navigation: false,
        pagination: false
    });
	
	jQuery(".carousel-1").owlCarousel({
        singleItem: true,
        lazyLoad: false,
        navigation: false,
        pagination: false,
		autoPlay: true,
    });
	
	jQuery(".single-carousel-1").owlCarousel({
        singleItem: true,
        lazyLoad: false,
        navigation: false,
        pagination: true,
		mouseDrag: false,
        transitionStyle: "fade"
    });
	
	jQuery(".client-quotes").owlCarousel({
        singleItem: true,
        lazyLoad: false,
        navigation: false,
        pagination: true
    });
	

    // wow jquery
    new WOW().init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // fit video
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    jQuery(".container").fitVids();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // filtering gallery
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    var $container = jQuery('#gallery-isotope');
    $container.imagesLoaded( function() {
        $container.isotope({
        itemSelector: '.item',
        filter: '*',
        });
    })
    var $newslist = jQuery('#newslist');
	 $newslist.imagesLoaded( function() {
        $newslist.isotope({
        itemSelector: '.item',
        filter: '*',
        });
    })
    jQuery('#filters a').on( "click", function() {
        var $this = jQuery(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents();
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var selector = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: selector,
        });
        return false;
    });
    jQuery('.animated').fadeTo(0, 0);

    // - - - - - - - - - -
    function equalHeight(group) {
        var tallest = 0;
        group.each(function () {
            thisHeight = $(this).parent().height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }
    
     equalHeight($(".item-blog"));
   
    
	function setHeight(column) {
		var maxHeight = 0;
		//Get all the element with class = col
		column = $(column);
		//Loop all the column
		column.each(function() {
			//Store the highest value
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		//Set the height
		column.height(maxHeight);
	}
	
	setHeight('.col-1, .col-2');
	setHeight('.footer-col');
   
    jQuery('.small-pic').each(function () {
        w = jQuery(this).parent().css("width");
        wd = (parseInt(w, 10) - 40) / 4;
        jQuery(this).css("width", wd);
        jQuery(this).css("height", wd);
    });
    jQuery('.wide-pic').each(function () {
        w = jQuery(this).parent().css("width");
        wd = (parseInt(w, 10) - 40) / 2;
        jQuery(this).css("width", wd + 10);
        jQuery(this).css("height", wd / 2);
    });
    jQuery('.long-pic').each(function () {
        w = jQuery(this).parent().css("width");
        wd = (parseInt(w, 10) - 40) / 4;
        jQuery(this).css("width", wd);
        jQuery(this).css("height", wd * 2 + 10);
    });

    function init() {
        // - - - - - - - - - -
        // gallery overlay autosize
        // - - - - - - - - - -
        jQuery('#gallery .item').each(function () {
            jQuery(this).find(".overlay").fadeTo(1, 0);
            jQuery(this).find("img").css("width", "100%");
            jQuery(this).find("img").css("height", "auto");

            jQuery(this).find("img").on('load', function () {
                var w = jQuery(this).css("width");
                var h = jQuery(this).css("height");
                jQuery(this).parent().find(".overlay").css("width", w);
                jQuery(this).parent().find(".overlay").css("height", h);
                jQuery(this).parent().find(".pf_text").css("width", w);
                jQuery(this).parent().find(".pf_text").css("height", h);
            }).each(function () {
                if (this.complete) $(this).load();
            });
        });
		
		jQuery('.center-xy').each(function () {

            jQuery(this).parent().find("img").on('load', function () {
                var w = parseInt(jQuery(this).parent().find(".center-xy").css("width"),10);
				var h = parseInt(jQuery(this).parent().find(".center-xy").css("height"),10);
				
				var pic_w = jQuery(this).css("width");
                var pic_h = jQuery(this).css("height");
				
				jQuery(this).parent().find(".center-xy").css("left",parseInt(pic_w,10)/2-w/2);
				jQuery(this).parent().find(".center-xy").css("top",parseInt(pic_h,10)/2-h/2);
				
				jQuery(this).parent().find(".bg-overlay").css("width", pic_w);
                jQuery(this).parent().find(".bg-overlay").css("height", pic_h);
				
				
            }).each(function () {
                if (this.complete) $(this).load();
            });
        });

        // - - - - - - - - - -
        // gallery hover
        // - - - - - - - - - -
        jQuery("#gallery .item").on("mouseenter", function () {
            var w = jQuery(this).find("img").css("width");
            var h = jQuery(this).find("img").css("height");
            jQuery(this).find(".overlay").stop().fadeTo(300, 1);
            var margin_top = parseInt(h, 10) / 2 - 10;
            jQuery(this).find(".project-name").stop().animate({
                "margin-top": margin_top + "px"
            }, 400, 'easeOutCubic');
            jQuery(this).find(".small-border").stop().animate({
                "width": "150px"
            }, 600, 'easeOutCubic');
        }).on("mouseleave", function () {
            jQuery(this).find(".overlay").stop().fadeTo(300, 0);
            jQuery(this).find(".project-name").stop().animate({
                "margin-top": "20px"
            }, 400, 'easeOutCubic');
            jQuery(this).find(".small-border").stop().animate({
                "width": "50px"
            }, 600, 'easeOutCubic');
        });

        // - - - - - - - - - -
        jQuery('#gallery-isotope').isotope('reLayout');
        // - - - - - - - - - -


        var wh = jQuery(window).height();
        jQuery("section.autoheight").css("height", wh);

        var ch = jQuery('section.autoheight .center-y').css("height");
        var mt = (parseInt(wh, 10) - parseInt(ch, 10)) / 2;
        mt = Math.floor(mt);
        jQuery('section.autoheight .center-y').css("padding-top", mt);


    }
	
	function custom_bg() {
		$("div,section").css('background-color', function() {
			return jQuery(this).data('bgcolor');
		});
		$("div,section").css('background-image', function() {
			return jQuery(this).data('bgimage');
		});
		$("div,section").css('background-size', function() {
			return 'cover';
		});
		}
		
	
    init();
	custom_bg();

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // paralax background
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    var $window = jQuery(window);
    jQuery('section[data-type="background"]').each(function () {
        var $bgobj = jQuery(this); // assigning the object
        jQuery(window).scroll(function () {
            var yPos = -($window.scrollTop() / $bgobj.data(
                'speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
    document.createElement("article");
    document.createElement("section");
	
    // --------------------------------------------------
    // portfolio hover
    // --------------------------------------------------
    jQuery(".fx .desc").fadeTo(0, 0);
    jQuery(".fx .item").on("mouseenter", function () {
        speed = 700;
        jQuery(this).find(".desc").stop(true).animate({
            'height': "120px",
            'margin-top': "20px",
            "opacity": "100"
        }, speed, 'easeOutCubic');
        jQuery(this).find(".overlay").stop(true).animate({
            'height': "100%",
            'margin-top': "20px"
        }, speed, 'easeOutCubic');
        jQuery(this).parent().parent().find(".item").not(this).stop(
            true).fadeTo(speed, '.5');
    }).on("mouseleave", function () {
        jQuery(this).find(".desc").stop(true).animate({
            'height': "0px",
            'margin-top': "0px",
            "opacity": "0"
        }, speed, 'easeOutCubic');
        jQuery(this).find(".overlay").stop(true).animate({
            'height': "84px",
            'margin-top': "20px"
        }, speed, 'easeOutCubic');
        jQuery(this).parent().parent().find(".item").not(this).stop(
            true).fadeTo(speed, 1);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // scroll to top
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery().UItoTop({
        easingType: 'easeInOutExpo'
    });
	
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // gallery hover
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    jQuery('.img-hover').on("mouseenter", function () {
        jQuery(this).stop().animate({
            opacity: '.5'
        }, 100);
    }).on("mouseleave", function () {
        jQuery(this).stop().animate({
            opacity: 1
        });
    }, 100);
	
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // resize
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    window.onresize = function (event) {
        init();
        equalHeight(jQuery(".item-blog"));
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // show / hide slider navigation
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery('.callbacks_nav').hide();
    jQuery('#slider').on("mouseenter", function () {
        jQuery('.callbacks_nav').stop().animate({
            opacity: 1
        }, 100);
    }).on("mouseleave", function () {
        jQuery('.callbacks_nav').stop().animate({
            opacity: 0
        });
    }, 100);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // image hover effect
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery(".pic-hover .hover").hide();
    jQuery(".pic-hover").on("mouseenter", function () {
        jQuery(this).find(".hover").width(jQuery(this).find(
            "img").css("width"));
        jQuery(this).find(".hover").height(jQuery(this).find(
            "img").css("height"));
        jQuery(this).find(".hover").fadeTo(150, '.9');
        picheight = jQuery(this).find("img").css("height");
        newheight = (picheight.substring(0, picheight.length -
            2) / 2);
        jQuery(this).find(".btn-view-details").css({
            'margin-top': newheight
        }, 'fast');
    }).on("mouseleave", function () {
        jQuery(this).find(".hover").fadeTo(150, 0);
    });

    // --------------------------------------------------
	// tabs
	// --------------------------------------------------
	jQuery('.exo_tab').find('.exo_tab_content > div').hide();
	jQuery('.exo_tab').find('.exo_tab_content > div:first').show();
	
	jQuery('.exo_nav .nav-item').click(function() {
		jQuery(this).parent().find('.nav-item span').removeClass("active");
		jQuery(this).find('span').addClass("active");
		jQuery(this).parent().parent().find('.exo_tab_content > div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.exo_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
	});
	
	
	// --------------------------------------------------
	// tabs
	// --------------------------------------------------
	jQuery('.exo_tab.tab_map').find('.exo_tab_content > div').css('height','0');
	jQuery('.exo_tab.tab_map').find('.exo_tab_content > div').show();
	jQuery('.exo_tab').find('.exo_tab_content > div:first').css('height','auto');
	
	jQuery('.tab_map .exo_nav .nav-item').click(function() {
		jQuery(this).parent().find('.nav-item span').removeClass("active");
		jQuery(this).find('span').addClass("active");
		jQuery(this).parent().parent().find('.exo_tab_content > div').css('height','0');
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.exo_tab_content > div:eq(' + indexer + ')').css('height','auto'); //uses whatever index the link has to open the corresponding box 
	});


    jQuery('#track-it').on( "click", function() {
        jQuery('#map-tracking').css("height", "400px");
    });

    jQuery('.expand .title').on( "click", function() {

        jQuery(this).parent().parent().removeClass(".active");

        jQuery(this).parent().parent().find(".content").slideUp();
        jQuery(this).parent().find(".content").slideDown();
        jQuery(this).parent().addClass("active");

    });
	
	// btn track click
	jQuery('#track-it').on( "click", function() {
		jQuery('#section-tracking-result').slideDown();
		jQuery('html,body').scrollTo("#section-tracking-result", "#section-tracking-result"); 
    });

        //  Accordion Panels
    jQuery(".accordion div").show();
    setTimeout("$('.accordion div').slideToggle('slow');", 1000);
        jQuery(".accordion h3").on( "click", function() {
		jQuery(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
		jQuery(this).toggleClass("current");
		jQuery(this).siblings("h3").removeClass("current");
    });

    // display the first div by default.
    $(".accordion div").first().css('display', 'block');


    // Get all the links.
    var link = $(".accordion a");

    // On clicking of the links do something.
    link.on('click', function (e) {

        e.preventDefault();

        var a = $(this).next(".content");

        $(a).slideDown('fast');

        //$(a).slideToggle('fast');
        $(".accordion div").not(a).slideUp('fast');

    });

    // magnific popup init

    jQuery('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

    jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
	
	 $('.gallery-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });
	
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

    // jquery typed plugin
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 100,
        backDelay: 1500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
    });

    // expand box
    jQuery(".expand-box .btn-expand").on( "click", function() {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                jQuery(this).parent().find(".hide-content").slideDown(500);
                jQuery(this).parent().parent().find(".btn-fullwidth").stop().fadeTo(100, 1);
                jQuery(this).parent().parent().find(".btn-fullwidth").css("margin-bottom", "30px");
				jQuery(this).parent().parent().find(".map-container").css("height", "300px");
				jQuery(this).parent().parent().find(".map-container").css("margin-bottom", "30px");
                jQuery(this).addClass('click');
                break;

            case 2:
                jQuery(this).parent().find(".hide-content").slideUp(500);
                jQuery(this).parent().parent().find(".btn-fullwidth").stop().fadeTo(100, 0);
                jQuery(this).parent().parent().find(".btn-fullwidth").css("margin-bottom", "0px");
				jQuery(this).parent().parent().find(".map-container").css("height", "0");
                jQuery(this).parent().parent().find(".map-container").css("margin-bottom", "0px");
                jQuery(this).removeClass('click');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });
	
	// expand box
    jQuery(".btn-open-map").on( "click", function() {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
				jQuery(this).parent().parent().parent().parent().find(".map-container").animate({height:300},300);
				jQuery(this).parent().parent().parent().parent().find(".map-container").css("margin", "30px 0 0 0");
				jQuery(this).find(".url").html("Close Map");
                jQuery(this).addClass('click');
                break;

            case 2:
				jQuery(this).parent().parent().parent().parent().find(".map-container").animate({height:0},300);
                jQuery(this).parent().parent().parent().parent().find(".map-container").animate({margin:0},300);
				jQuery(this).find(".url").html("View on Map");
                jQuery(this).removeClass('click');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });

    jQuery(".faq .btn-expand").on( "click", function() {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                jQuery(this).parent().find(".hide-content").slideDown(500);
                jQuery(this).addClass('click');
                break;

            case 2:
                jQuery(this).parent().find(".hide-content").slideUp(500);
                jQuery(this).removeClass('click');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });

    // clone header

    var $header = jQuery("header"),
        $clone = $header.before($header.clone().addClass("clone"));
    jQuery(window).on("scroll", function () {
        var fromTop = jQuery(window).scrollTop();
        jQuery("body").toggleClass("down", (fromTop > 240));
		
		
		
    });
	
	
	/**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = jQuery("#mainmenu li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = jQuery(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        jQuery(window).scroll(function(){
			if($('body').hasClass('onepage')){
            var windowPos = jQuery(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = jQuery(window).height(); // get the height of the window
            var docHeight = jQuery(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = jQuery(theID).offset().top - 100; // get the offset of the div from the top of page *edited
                var divHeight = jQuery(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    jQuery("a[href='" + theID + "']").addClass("active");
                } else {
                    jQuery("a[href='" + theID + "']").removeClass("active");
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!jQuery("#mainmenu li:last-child a").hasClass("active")) {
                    var navActiveCurrent = jQuery(".active").attr("href");
                    jQuery("a[href='" + navActiveCurrent + "']").removeClass("active");
                    jQuery("#mainmenu li:last-child a").addClass("active");
                }
            }
			}
        });	


    // mobile navigation
    var mb;
    jQuery('#menu-btn').on( "click", function() {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                jQuery('#mainmenu').show();
                jQuery('header').css("height", "auto");
                mb = 1;
                break;

            case 2:
                jQuery('#mainmenu').hide();
                jQuery('header').css("height", "80px");
                mb = 0;
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });
	
	// looping background
	
	$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('#section-welcome').css('background-position', x + 'px 0');
		$('#subheader.bgloop').css('background-position', x/2 + 'px 0');
    }, 10);
	});
	
	// sticky footer
	
	var footerHeight = jQuery("footer").css("height");	
	if(jQuery("footer").hasClass("sticky")){
		jQuery("body").css("margin-bottom",footerHeight);
	}
	
	// one page navigation
	
	        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
		 
        jQuery("#mainmenu a").click(function(evn){			
			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash); 
			}
        });	
	
	
	jQuery(window).load(function() {
		
	// custom

    jQuery('.owl-custom-nav').each(function () {
        var owl = $('.owl-custom-nav').next();
		var h = $(this).height();		
        var ow = owl.height();
        $(this).css("margin-top", (ow / 2) - h);
		

        owl.owlCarousel();

        // Custom Navigation Events
        $(".btn-next").on( "click", function() {
            owl.trigger('owl.next');
        });
        $(".btn-prev").on( "click", function() {
            owl.trigger('owl.prev');
        });
    });
	
	// stellar plugin
    $.stellar({
    horizontalScrolling: false,
    hideDistantElements: false
    });
        
    });
	
});