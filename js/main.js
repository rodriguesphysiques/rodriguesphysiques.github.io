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

// function startFunction() {
//   // document.getElementById('home').focus();
//   Scrolldown();
//   }

// function Scrolldown() {
//   window.scroll(0,300); 
// }

function liClicked(e) {
  var els = document.getElementsByClassName("liclck");
  
  // for (var i = 0; i < els.length; i++) {
    // els[i].classList.remove('liclck');
    // }


  while(els.length > 0){
    els[0].classList.remove('liclck');
  }
  e.classList.toggle("liclck");
}

$(document).ready(function() {
  $('#navbar').load('navmenu.html');
  $('#pageBody').load('home.html');
});
