var gadiv=document.getElementById('gadiv');
var gftdiv=document.getElementById('gftdiv');

window.onload = function() {startFunction()};

function startFunction() {
    console.log(gftdiv.offsetHeight, gadiv.offsetHeight);
    gadiv.offsetHeight= gftdiv.offsetHeight;
    gadiv.offsetWidth = gftdiv.offsetWidth;
    console.log(gftdiv.offsetHeight, gadiv.offsetHeight);
}

