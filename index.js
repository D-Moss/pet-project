function myFunction() {
	var x = document.getElementById('myTopnav');
	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}



function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function keepReading() {
	var dot = document.getElementById("dot");
	var moreText = document.getElementById("continue");
	var btnText = document.getElementById("myBtn1");

	if (dot.style.display === "none") {
		dot.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dot.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function readAhead() {
	var period = document.getElementById("period");
	var moreText = document.getElementById("extra");
	var btnText = document.getElementById("myBtn2");

	if (period.style.display === "none") {
		period.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		period.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}



// Get the button
let topbutton = document.getElementById("topBtn");
// When the user scrolls down 350px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};
function scrollFunction() {
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		topbutton.style.display = "block";
	} else {
		topbutton.style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}