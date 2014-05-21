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
	
}); 





