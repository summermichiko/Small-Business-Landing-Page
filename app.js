$(document).ready(function() { 
	var fixedMainMenu = $(".mainMenu").offset().top;
	var fixedMenu = function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > fixedMainMenu) {
			$(".mainMenu").addClass("fixed");
		} else {
			$(".mainMenu").removeClass("fixed");
		}
	}; 
	$(window).scroll(function() {
		fixedMenu();
	});
	$(function() {
    	$('ul li a').bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top - 133
        	}, 700);
    	});
	});

	$(function() {
    	$('#branchstudios').bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top
        	}, 700);
    	});
	});
}); 





