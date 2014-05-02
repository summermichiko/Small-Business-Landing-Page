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

	$("#branchStudios").click(function() {
		window.scrollTo(0,0);
	});
	$("#about").click(function() {
		window.scrollTo(0,531);
	});
	$("#school").click(function() {
		window.scrollTo(0, 1176);
	});
	$("#courses").click(function() {
		window.scrollTo(0, 2161);
	});
	$("#events").click(function() {
		window.scrollTo(0, 2806);
	});
	$("#contact").click(function() {
		window.scrollTo(0, 4031);
	});
}); 





