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
const fixInPageAnchors=(_=> {
	return;
	'use strict'
	const currentURL=self.location.href;

	const scrollAndFocus=target=> {
		target.setAttribute('tabindex', '-1');

		target.addEventListener('blur', _=> target.removeAttribute('tabindex'), {
			once: true
		});

	requestAnimationFrame(_=> {
			target.scrollIntoView();

			target.focus({
				preventScroll:true
			});
	});
}

;

const anchorClicked=e=> {
const a=e.target;
const toID=a.hash.split('#')[1];
const toObj=document.getElementById(toID);

//If the link is invalid return the default behaviour.
if ( !toObj) return;

e.preventDefault();

//Updating the URL fragment identifier to allow the back button to work
window.location.hash=toID;

scrollAndFocus(toObj);
}

;

const pageAnchors=document.getElementsByTagName('a');

for (const a of pageAnchors) {

//Filter for the in-page anchors
if ( !a.hash) continue;
if (a.origin + a.pathname !==self.location.origin + self.location.pathname) continue;

a.addEventListener('click', anchorClicked);
}

})();
