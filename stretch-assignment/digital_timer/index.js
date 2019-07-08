const button = document.createElement('button');
button.textContent = "Start";
document.querySelector('body').appendChild(button);

// const stopButton = document.createElement('button');
// stopButton.textContent = "Stop";
// document.querySelector('body').appendChild(stopButton);

let milliSeconds = 0,
    lock = false;

const msTens = document.querySelector('#msTens'),
      msHundreds = document.querySelector('#msHundreds'),
      secondOnes = document.querySelector('#secondOnes'),
      secondTens = document.querySelector('#secondTens'),
      digits = document.querySelectorAll('.digit');

button.addEventListener('click', () => {
  if (!lock) {
    lock = true;
    milliSeconds = 0;
    digits.forEach(digit => digit.style.color = "");
    const interval = setInterval(() => {
      milliSeconds += 10;
      msTens.textContent = (milliSeconds / 10) % 10;
      msHundreds.textContent = Math.floor(milliSeconds / 100) % 10;
      secondOnes.textContent = Math.floor(milliSeconds / 1000) % 10;
      secondTens.textContent = Math.floor(milliSeconds / 10000) % 10;
      if (milliSeconds >= 3000) {
        clearInterval(interval);
        digits.forEach(digit => digit.style.color = "red");
        lock = false;
      }
      console.log(milliSeconds);
    }, 10);
  }
});


let resizing = false;

window.addEventListener('resize', event => {
  if (!resizing) {
    resizing = true;
    console.log('resize');
    setTimeout(() => resizing = false, 500);
  }
});



// var counter = 0;
// var timeRemaining = 60;

// //number format = nf -- only display 2 digits
// function convertSeconds(s) {
//     var min = floor(s / 60);
//     var sec = s % 60;
//     return nf(min, 2) + ':'; + nf(sec, 2);
// }

// var ding;
// function preload(){
//      ding = loadSound("ding.mp3");
// }

// function setup(){ 
//     noCanvas();
// }
// var params = getURLParams();
//     console.log(params);
// if (params.minute){
//     var min = params.minute;
//     timeRemaining = min * 60;
// }

// var timer = select("#timer");
// timer.html(convertSeconds(timeRemaining - counter));

// function timeIt(){
//     counter ++;
//     timer.html(convertSeconds(timeRemaining - counter));
// }

// setInterval(timeIt, 1000){

// }