$(document).ready(function(e) {
    $(document).keyup(function(e) {
	    if (e.which == 13) {
	        $('ul').append('<li><button>-</button><p class="item">' + $("input").val() + '</p></li>');
	    }	
	});
	$('#add').on('click', function(){
			$('ul').append('<li><button>-</button><p class="item">' + $("input").val() + '</p></li>');
	    });
	$('.item').mouseup(function() {
		$(this).toggleClass('done');
	});
});
