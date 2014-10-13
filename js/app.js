$(document).ready(function(e) {
    $(document).keyup(function(e) {
	    if (e.which == 13) {
	        $('ul').append('<li class="item">' + $("input").val() + '</li>');
	    }	
	});
	$('#add').on('click', function(){
			$('ul').append('<li class="item">' + $("input").val() + '</li>');
	    });
	$('.item').mouseup(function() {
		$(this).addClass('done');
	});
});
$('.item').on("click",function() {
	$(this).addClass('.done');
});x