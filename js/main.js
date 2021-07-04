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

function changeTo(pthloc) {
  switch(pthloc) {
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
    case "blogt4":
      $('#pageBody').load('./htmls/blogs/blog4.html');
      break;
    case "blogt5":
      $('#pageBody').load('./htmls/blogs/blog5.html');
      break;
    case "blogt6":
      $('#pageBody').load('./htmls/blogs/blog6.html');
      break;
    case "cusm":
      $('#pageBody').load('cntcus.html');
      break;
  }
}

function changePage(e) {
  console.log('change func');
  var menuP = e.classList;
  menuP = menuP[0];
  window.scrollTo(0, 0);
  window.location = window.location.pathname + "#" + menuP;
  // var pathg = window.location.href.split('#');
  // if (pathg.length>1) changeTo(pathg[1]);
  // else changeTo('homem');
}


function touchClick(e) {
  e.classList.toggle("smallmclc");
}


$(document).ready(function() {
  $('#navbar').load('navmenu.html');
  console.log('ready func');
  var pathg = window.location.href.split('#');
  if (pathg.length>1) changeTo(pathg[1]);
  else changeTo('homem');
});

window.onhashchange = function() {
  window.scrollTo(0, 0);
  var pathg = window.location.href.split('#');
  if (pathg.length>1) changeTo(pathg[1]);
  else changeTo('homem');
}
