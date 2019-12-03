/* Sticky Nav Javascript */
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("site-navigation");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

/* Accordian Link Javascript */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Responsive Nav Javascript */
function responsiveNav() {
    var x = document.getElementById("nav-list");
    if (x.className === "nav-menu") {
      x.className += " responsive";
    } else {
      x.className = "nav-menu";
    }
  }
