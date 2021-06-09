window.onscroll = function() {scrollFunc()};

// window.onload = function() {startFunction()};

var navbar = document.getElementById("navbar");
var navimg = document.getElementById("logo");
var imgheader = document.getElementById("imgheader");
var sticky = 70;


function scrollFunc() {
  var scrollPosition = window.pageYOffset;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else if (window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
  }
}

function startFunction() {
  // document.getElementById('home').focus();
  Scrolldown();
  }

function Scrolldown() {
  window.scroll(0,300); 
}

function menuExpand(e) {
  e.classList.toggle("menuecng");
}