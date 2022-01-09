/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
		//scrolltop hide when top is 0
		var scroll_show = $('nav').outerHeight();
		if($(window).scrollTop()>scroll_show) {
				$('.scroll-top').show();
		} else {
				$('.scroll-top').hide();					
		}
		//scrolltop show when scroll over navbar
		$(window).scroll(function(){
				if($(this).scrollTop()>scroll_show) {
						$('.scroll-top').fadeIn('fast');
				} else {
						$('.scroll-top').fadeOut('fast');					
				}
		});
		//scroll top when click
    $('body').on('click', '.scroll-top a', function(event) {
			$('html,body').stop().animate({scrollTop:0},1000,'easeInOutExpo');
			return false;
    });
});