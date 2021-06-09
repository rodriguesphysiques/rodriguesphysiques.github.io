window.onscroll = function() {scrollFunc()};

// window.onload = function() {startFunction()};

var navbar = document.getElementById("navbar");
var navimg = document.getElementById("logo");
var imgheader = document.getElementById("imgheader");
var sticky = navbar.offsetTop;


function scrollFunc() {
  var scrollPosition = window.pageYOffset;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // imgheader.style.opacity = 0;
    // navimg.style.opacity = 100;
  } else {
    navbar.classList.remove("sticky");
    // imgheader.style.opacity = 100;
    // navimg.style.opacity = 0;
  }
}

// function startFunction() {
//   document.getElementById('home').focus();
// }

function menuExpand(e) {
  e.classList.toggle("menuecng");
}