$(document).ready(function(e) {
    $(document).keypress(function(e) {
    if(e.which == 13) {
        $('ul').append('<li class="item"> $("input").val() </li>');
    }
	
});
$(this).mouseup(function() {
$(this).addClass('done');
});
});