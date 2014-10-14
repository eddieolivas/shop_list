$(document).ready(function(e) {
    $(document).keyup(function(e) {
	    if (e.which == 13) {
	        $('ul').append('<li><p class="item">' + $("input").val() + '</p></li>');
	    }	
	});
	$('#add').on('click', function(){
		$('ul').append('<li><p class="item">' + $("input").val() + '</p></li>');
	});
	

	$('main').on('click', 'li', function() {
		$(this).find('.item').toggleClass('done');
	});
});

