//! Task 1
// var newsIndex = 1;
// function NewsRotator() {
//   $(".news").hide();
//   $(".news" + newsIndex).show();

//   var newsCount = 2;
//   newsIndex++;
//   if(newsIndex > newsCount) {
//     newsIndex = 1;
//   }
// }

// $(document).ready(function() {
//   NewsRotator();
//   setInterval(NewsRotator, 10000);
// });

//! Task 2

// let a = document.querySelector('.item');

// const colorMenu = [
// {name: 'blue', interval: 1000},
// {name: 'yellow', interval: 1000},
// {name: 'red', interval: 1000},
// {name: 'green', interval: 1000}
// ];

// let count = 0;

// let go = setTimeout(function change() {
// if (count === colorMenu.length) {
// count = 0;
// }

// a.style.background = colorMenu[count].name;
// go = setTimeout(change,colorMenu[count].interval );
// count = count + 1;

// },1000);

//! Task 3

// let timerElement = document.getElementById("timer");
// let startButton = document.getElementById("start");
// let stopButton = document.getElementById("stop");
// let restartButton = document.getElementById("restart");

// let seconds = 0;
// let intervalId = null;

// function updateTimer() {
//   let minutes = Math.round(seconds / 60);
//   let remainingSeconds = seconds % 60;
//   let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
//   let secondsDisplay =
//     remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
//   timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
// }
// startButton.addEventListener("click", () => {
//   if (!intervalId) {
//     intervalId = setInterval(() => {
//       seconds++;
//       updateTimer();
//     }, 1000);
//   }
// });
// stopButton.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = null;
// });
// restartButton.addEventListener("click", () => {
//   clearInterval(intervalId);
//   updateTimer();
//   seconds = 0;
//   intervalId = null;
// });
