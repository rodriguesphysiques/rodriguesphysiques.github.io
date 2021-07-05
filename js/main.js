window.onscroll = function() {scrollFunc()};

// window.onload = function() {startFunction()};

var navbar = document.getElementById("navbar");
var navimg = document.getElementById("logo");
var imgheader = document.getElementById("imgheader");
var sticky = 70;

var svgel = document.getElementById("nwnw");
var emailContent1 = "I would like to enquire about purchasing the ";
var emailContent2 = " program for ";
var emailContent3 = ".  Please contact me back at the above email address.";
var emailContentm = "";
var emailContentp = "R350";


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
      $('#pageBody').load('blogm.html');
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
  var menuP = e.classList;
  menuP = menuP[0];
  window.scrollTo(0, 0);
  window.location = window.location.pathname + "#" + menuP;
}

function buyButton(typeB) {
  switch(typeB) {
    case 'bbEqn':
      emailContentm = "Beach Bumz";
      emailContentp = "R250";
      break;
    case 'rfrshEqn':
      emailContentm = "Re-Fresh";
      emailContentp = "R350";
      break;
    case 'lvlUpHEqn':
      emailContentm = "Level-Up Home";
      emailContentp = "R350";
      break;
    case 'lvlUpGEqn':
      emailContentm = "Level-Up Gym";
      emailContentp = "R350";
      break;
    default:
      emailContentm = "";
      break;
  }

  window.location = window.location.pathname + "#cusm";
}

function touchClick(e) {
  e.classList.toggle("smallmclc");
}


$(document).ready(function() {
  $('#navbar').load('navmenu.html');
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


function create_post(e) {
  //   $.post("http://int.bodiesbyrp.com:155/emailform", {
  //   randomWord: "Just Some Random word",
  //   email: $("#emad").value,
  //   name: $('#fname').value

  // }).complete(function( data ) {
  //   console.log(data);
  //   });

  // e.preventDefault();

  $.ajax({
    async: true,   // this will solve the problem
    url: "http://int.bodiesbyrp.com/emailform",
    type: 'POST',
    data: {
      randomWord: "Just Some Random word",
      email: $("#emad").value,
      name: $('#fname').value
  
    },
    enctype: 'multipart/form-data',
    contentType: false,
    processData: false,
    datatype: "script",
    beforeSend: function() {
      jQuery('#my_error_report').html('');
    },
    success:function( data ) {
      console.log(data);
      }
  });
  // });
  
  return false;
};