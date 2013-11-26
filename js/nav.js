$(function() {
	var $items     = $('.nav-bar-nav, .nav-bar-drawer, .nav-bar, .content');
	var openClass  = 'nav-bar-is-open';
	var closeClass = 'nav-bar-is-closed';

	if ($('.nav-bar-drawer').length > 0) {
		$('body').addClass('has-nav-bar-drawer');
	}

	var open = function() {
		$items.removeClass(closeClass).addClass(openClass);
	}

	var close = function() {
		$items.removeClass(openClass).addClass(closeClass);
		window.location.hash = '';
	}

	$('#nav-bar-toggle').click(function(event) {
		event.stopPropagation();
		event.preventDefault();

		if ($items.hasClass(openClass)) {
			close();
		}
		else {
			open();
		}
	});
	
	$('.content').click(function(event) {
		if ($items.hasClass(openClass)) {
			close();
		}
	});

	$(window).resize(function() {
		if ($(this).width() >= 720) {
			$items.removeClass(openClass).removeClass(closeClass);
		}
	});
});