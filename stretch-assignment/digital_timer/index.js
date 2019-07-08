// New Timer

// let secondOnes = document.querySelector("#secondOnes");
// secondOnes.innerHTML = 0;
// let secondTens = document.querySelector('#secondTens');
// secondTens.innerHTML = 0;
// let msTens = document.querySelector('#msTens');
// msTens.innerHTML = 0;
// let msHundreds = document.querySelector('#msHundreds');
// msHundreds.innerHTML = 0;

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   secondOnes.textContent = 0;
//   secondTens.textContent = 0;
//   msTens.textContent = 0;
//   msHundreds.textContent = 0;
//   button.style.display = 'none';
//   timer()
// });

// let secondOnes = 0;
// let secondTens = 0;
// let msTens = 0;
// let msHundreds = 0;

// function timer(){
//   secondTens = 0;
//   secondOnes.style.color = "black";
//   secondTens.style.color = "black";
//   msTens.style.color = "black";
//   msHundreds.style.color = "black";
//   if(msTens <= 0) {
//     let timerOff = setInterval(() => {
//       msTens++;
//         if(msTens >= 10) {
//           msHundreds++;
//           msTens = 0;
//         }   
//         if (msHundreds >= 10) {
//             secondOnes++;
//             msHundreds = 0;
//         }
//         if(secondOnes >= 10) {
//           secondTens++;
//           secondOnes = 0;
//         }
//         if(secondTens >= 1) {
//           msTens.style.color = 'red';
//           msHundreds.style.color = 'red';
//           secondOnes.style.color = 'red';
//           secondTens.style.color = 'red';
//           button.style.display = 'block';
//           clearInterval(timerOff);
//         }
      
//           msTens.textContent = msTens;
//           msHundreds.textContent = msHundreds;
//           secondOnes.textContent = secondOnes;
//           secondTens.textContent = secondTens;
//       }, 10)
//   }
// }

// End New Timer


// let secondOnes = document.getElementById('secondOnes');
// secondOnes.innerHTML = 0;
// let secondTens = document.getElementById('secondTens');
// secondTens.innerHTML = 0;
// let msTens = document.getElementById('msTens');
// msTens.innerHTML = 0;
// let msHundreds = document.getAnimations('msHundreds');
// msHundreds.innerHTML = 0;

// const addToCount = () => {
//   setInterval(function() {
//     if(secondTens.innerHTML < 1) {
//       if(msTens.innerHTML < 9) {
//         msTens.innerHTML++;
//       } else {
//         msTens.innerHTML = 0;
//         if(msHundreds.innerHTML = 9) {
//          msHundreds.innerHTML++;
//         } else {
//           msHundreds.innerHTML = 0;
//           if(secondOnes.innerHTML < 9) {
//             secondOnes.innerHTML++;
//           } else {
//           secondOnes.innerHTML = 0;
//           secondTens.innerHTML++;
//           }
//         }
//       }
//     }
//   }, 10)
// }

// resetCount = () => {
//   clearInterval(addToCount);
//   secondOnes.innerHTML = 0;
//   secondTens.innerHTML = 0;
//   msTens.innerHTML = 0;
//   msHundreds.innerHTML = 0;
// }

// const startBtn = document.createElement("button");
// startBtn.appendChild(document.createTextNode("Start Timer"));
// startBtn.id = "button";
// document.body.appendChild(startBtn);
// document.getElementById("button").onclick = addToCount;


// const resetBtn = document.createElement('button');
// resetBtn.appendChild(document.createTextNode("Reset"));
// resetBtn.id = "reset";
// document.body.appendChild(resetBtn);
// document.getElementById("button").onclick = resetCount;




// End New Timer





// timer  

const button = document.createElement('button');
button.textContent = "Start";
document.querySelector('body').appendChild(button);

const stopButton = document.createElement('button');
stopButton.textContent = "Stop";
document.querySelector('body').appendChild(stopButton);

// let secondOnes = 0,
//     lock = false;

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


// let resizing = false;

// window.addEventListener('resize', event => {
//   if (!resizing) {
//     resizing = true;
//     console.log('resize');
//     setTimeout(() => resizing = false, 500);
//   }
// });

// End timer

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