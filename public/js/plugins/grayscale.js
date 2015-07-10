/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //remove class active
		$('.navbar-collapse ul li').removeClass('active');
        if($(".navbar").offset().top >= ($('#about').offset().top - 40) && $(".navbar").offset().top <= ($('#skills').offset().top - 40)){
            $('#itemAbout').addClass('active');
            $('#about .left').addClass('animated fadeInLeft');
            $('#about .right').addClass('animated fadeInRight');
        }
        if($(".navbar").offset().top >= ($('#skills').offset().top - 40) && $(".navbar").offset().top <= ($('#contact').offset().top - 40)){
            $('#itemSkills').addClass('active').addClass('animated fadeInDown');
        }
        if($(".navbar").offset().top >= $('#contact').offset().top - 40){
            $('#itemContact').addClass('active').addClass('animated fadeInDown');
        }
    } else {
        //remove class active
		$('.navbar-collapse ul li').removeClass('active');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    //apply WOW js library for web look nice
    new WOW().init();
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


    
// Google Maps Scripts
// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    
}
