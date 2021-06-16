var gadiv=document.getElementById('gadiv');
var gftdiv=document.getElementById('gftdiv');

window.onload = function() {startFunction()};

function startFunction() {
    console.log(gftdiv.offsetHeight, gadiv.offsetHeight);
    gadiv.offsetHeight= gftdiv.offsetHeight;
    gadiv.offsetWidth = gftdiv.offsetWidth;
    console.log(gftdiv.offsetHeight, gadiv.offsetHeight);
}

$(document).ready(function() {
    $('.crscrs').load('./res/images/svg/crisscross.svg');
    $('.hpag').load('./res/images/svg/heartspag.svg');
    $('.htwo').load('./res/images/svg/hearttwos.svg');
    $('.hshine').load('./res/images/svg/heart-shine.svg');
});
