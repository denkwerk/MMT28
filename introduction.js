$(function() {
	interval = null;
	// Deck initialization
	$.deck('.slide');

	var socket = io.connect();

	socket.on('slide-prev', function () {
		$.deck('prev');
	});

	socket.on('slide-next', function () {
		console.log('fired');
		$.deck('next');
	});

	$(document).bind('deck.change', function(e, from, to) {
		var currentSlide = $.deck('getSlide', to).attr('id');

		if(currentSlide === 'the-me-slide') {
			interval = setInterval(function () {
				$.deck('next');
				$('#the-me-slide article').css({'opacity': 1});
			}, 1000);
		}

		if(currentSlide === 'the-me-slide-head-end') {
			clearInterval(interval);
			$('#the-me-slide-head-end').css({'opacity': 0.4});
		}

		if(currentSlide === 'true-story-http') {
			$('#true-story-http').css('color', 'yellow');
		} else {
			$('#true-story-http').css('color', 'white');
		}

		if(currentSlide === 'true-story-server') {
			$('#true-story-server').css('color', 'yellow');
			$('#server-end-thing').css('color', 'yellow');
			$('#server-end-thing').css({'opacity': 1});
		} else {
			$('#true-story-server').css('color', 'white');
			$('#server-end-thing').css('color', 'white');
		}

		if(currentSlide === 'true-story-rr') {
			$('#res').css('color', 'red');
			$('#req').css('color', 'blue');
			$('#server-end-thing').css({'opacity': 0.4});
			$('.true-function').css({'opacity': 1});			
		} else {
			$('#res').css('color', 'white');
			$('#req').css('color', 'white');		
		}

		if(currentSlide === 'true-story-headmeta') {
			$('#res2').css('color', 'red');
			$('#res5').css('color', 'lightblue');
			$('.true-function').css({'opacity': 0.4});	
		} else {
			$('#res2').css('color', 'white');
			$('#res5').css('color', 'white');	
		}

		if(currentSlide === 'true-story-body') {
			$('#res3').css('color', 'red');
			$('#res4').css('color', 'orange');		
		} else {
			$('#res3').css('color', 'white');
			$('#res4').css('color', 'white');	
		}

		if(currentSlide === 'true-console') {
			$('#cons-1').css('color', 'red');
			$('#cons-2').css('color', 'orange');
			$('#like-the-console').hide();
			$('#like-the-console-2').show();		
		} else {
			$('#cons-1').css('color', 'white');
			$('#cons-2').css('color', 'white');
			$('#like-the-console-2').hide('slow');
			$('#like-the-console').show('slow');			
		}

	});
});