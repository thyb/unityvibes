$('document').ready(function() {
	$('#menu1, #menu2').css('width', (($(window).width() - 622) / 2) + 'px');

	$(window).resize(function() {
		$('#menu1, #menu2').css('width', (($(window).width() - 622) / 2) + 'px');
	})
})