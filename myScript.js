//Flips the dropdown carrot when the dropdown link is clicked.
$(document).ready(function() {
	$(".dropdown").on("hide.bs.dropdown", function() {
		$(".click").html('Resume <span class="caret"></span>');
	});

	$(".dropdown").on("show.bs.dropdown", function() {
		$(".click").html('Resume <span class="caret caret-up"></span>');
	});
});

//flips the carrot back to normal when the dropdown link is clicked again.
$(document).scroll(function() {
	if ($(this).scrollTop() > a) {
		$('.navbar').css({
			"background": "Black"
		});
	} else {
		$('.navbar').css({
			"background": "rgba(10, 10, 10, 0.6)"
		});
	}
});

//Removes the navbar when scrolling down and returns it when scrolling up.
$(window).scroll({
		previousTop: 0
	}

	,
	function() {
		var currentTop = $(window).scrollTop();

		if (currentTop < this.previousTop) {
			$(".navbar").fadeIn();

		} else {
			$(".navbar").fadeOut();
		}

		this.previousTop = currentTop;
	});

var a = $(".navbar");

//Hides the navbar whenever any navigation menu link is clicked.
$(document).ready(function() {
	$(".hide-nav").click(function() {
		$(".navbar-default").hide();
	});
});
