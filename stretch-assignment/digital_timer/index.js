var counter = 0;
var timeRemaining = 60;

//number format = nf -- only display 2 digits
function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':'; + nf(sec, 2);
}

var ding;
function preload(){
     ding = loadSound("ding.mp3");
}

function setup(){ 
    noCanvas();
}
var params = getURLParams();
    console.log(params);
if (params.minute){
    var min = params.minute;
    timeRemaining = min * 60;
}

var timer = select("#timer");
timer.html(convertSeconds(timeRemaining - counter));

function timeIt(){
    counter ++;
    timer.html(convertSeconds(timeRemaining - counter));
}

// setInterval(timeIt, 1000){

// }