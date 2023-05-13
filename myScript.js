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

//Allows for the anchor links to work on mobile
//This link expains why anchor links don't work the same on mobile and how to fix it: https://codepen.io/2kool2/pen/JjYGdmZ
// Add tabindex, to target, on clicking an in-page anchor
//   - Remove tabindex on bluring the target element.
const xxxinPageAnchors = (_ => {
  return;
  'use strict'
  const currentURL = self.location.href;

  const scrollAndFocus = target => {
    target.setAttribute('tabindex', '-1');
    target.addEventListener('blur', _ => target.removeAttribute('tabindex'), {once: true});
    requestAnimationFrame(_ => {
      target.scrollIntoView();
      target.focus({preventScroll:true});
    });
  };

  const anchorClicked = e => {
    const a = e.target;
    const to_id = a.hash.split('#')[1];
    const to_obj = document.getElementById(to_id);

    // If invalid return retaining default behaviour.
    if (!to_obj) return;

    e.preventDefault();
    
    // Update the URL fragment identifier
    // - so the back button works!
    window.location.hash = to_id;

    scrollAndFocus(to_obj);
  };

  const anchors = document.getElementsByTagName('a');
  for (const a of anchors) {

    // Filter for in-page anchors only!
    if (!a.hash) continue;
    if (a.origin + a.pathname !== self.location.origin + self.location.pathname) continue;

    a.addEventListener('click', anchorClicked);
  }

})();
