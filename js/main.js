window.onscroll = function() {scrollFunc()};

// window.onload = function() {startFunction()};

var navbar = document.getElementById("navbar");
var navimg = document.getElementById("logo");
var imgheader = document.getElementById("imgheader");
var sticky = 70;

var svgel = document.getElementById("nwnw");


function scrollFunc() {
  var scrollPosition = window.pageYOffset;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else if (window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
  }

  $(".adbr").css("background-position-y", (scrollPosition*0.4) + "px");
}

function startFunction() {
  
}



function liClicked(e) {
  var els = document.getElementsByClassName("liclck");
  
  while(els.length > 0){
    els[0].classList.remove('liclck');
  }
  e.classList.toggle("liclck");
}


// JQuery only temporary

function changePage(e) {
  var menuP = e.classList;
  menuP = menuP[0];
  switch(menuP) {
    case "homem":
      $('#pageBody').load('home.html');
      break;
    case "progm":
      $('#pageBody').load('progs.html');
      break;
    case "4wkh":
      $('#pageBody').load('./htmls/programmes/4wkh.html');
      break;
    case "6wkh":
      $('#pageBody').load('./htmls/programmes/6wkh.html');
      break;
    case "6wkg":
      $('#pageBody').load('./htmls/programmes/6wkg.html');
      break;
    case "blogm":
      $('#pageBody').load('blog.html');
      break;
    case "cusm":
      $('#pageBody').load('cntcus.html');
      break;
  }
}





$(document).ready(function() {
  $('#navbar').load('navmenu.html');
  $('#pageBody').load('home.html');
});
