"use strict";

if ($('.text-slider').length == 1) {
var typed_strings = $('.text-slider-items').text();
	var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 100,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	});
}

