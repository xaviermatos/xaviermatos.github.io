$(document).ready(function () {
	$(".dropdown").on("hide.bs.dropdown", function () {
			$(".click").html('Resume <span class="caret"></span>');
		});

	$(".dropdown").on("show.bs.dropdown", function () {
			$(".click").html('Resume <span class="caret caret-up"></span>');
		});
});
//Flips the dropdown carrot when the dropdown link is clicked.

$(document).scroll(function () {
	if ($(this).scrollTop() > a) {
		$('.navbar').css({
			"background": "Black"
		});
}

else {
	$('.navbar').css({
		"background": "rgba(10, 10, 10, 0.6)"
	});
}
});
//flips the carrot back to normal when the dropdown link is clicked again.

$(window).scroll({
previousTop: 0
}

,
function () {
var currentTop=$(window).scrollTop();

if (currentTop < this.previousTop) {
	$(".navbar").fadeIn();

}

else {
	$(".navbar").fadeOut();
}

this.previousTop=currentTop;
});

var a=$(".navbar");
//Removes the navbar when scrolling down and returns it when scrolling up.

//Attempt to fix mobile anchors
 $('a.native-anchor').bind('click', function(ev) {
         var target = $( $(this).attr('href') ).get(0).offsetTop;
         $.mobile.silentScroll(target);
         return false;
     });
