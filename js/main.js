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
  $(".slwscrl").css("background-position-y", (scrollPosition*-0.1) + "px");
}

function startFunction() {
  
}



function liClicked(e) {
  var els = document.getElementsByClassName("liclck");
  
  if (els[0] != e) {
    while(els.length > 0){
      els[0].classList.remove('liclck');
    }
  }
  e.classList.toggle("liclck");
}


// JQuery only temporary

function changePage(e) {
  var menuP = e.classList;
  menuP = menuP[0];
  console.log(menuP);
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
    case "blogt":
      $('#pageBody').load('trnblog.html');
      break;
    case "blogt1":
      $('#pageBody').load('./htmls/blogs/blog1.html');
      break;
    case "blogt2":
      $('#pageBody').load('./htmls/blogs/blog2.html');
      break;
    case "blogt3":
      $('#pageBody').load('./htmls/blogs/blog3.html');
      break;
    
    case "blogn":
      $('#pageBody').load('blog.html');
      break;
    case "cusm":
      $('#pageBody').load('cntcus.html');
      break;
  }
}


function touchClick(e) {
  e.classList.toggle("smallmclc");
}


$(document).ready(function() {
  $('#navbar').load('navmenu.html');
  $('#pageBody').load('home.html');
});
