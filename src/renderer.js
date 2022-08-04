// const { app } = require("electron");
// let w = remote.getCurrentWindow();

const currentDate = new Date();
currentDate.setHours(22, 0, 0, 0);
const countDownDate = currentDate.getTime();
const infoEl = document.getElementById("info");

// infoEl.addEventListener("click", () => {
//   w.close();
// });

function addZero(num) {
  num = Math.floor(num);
  return num > 9 ? num : "0" + num;
}

var x = setInterval(function () {
  var distance = countDownDate - new Date().getTime();
  var hours = addZero((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = addZero((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = addZero((distance % (1000 * 60)) / 1000);

  infoEl.innerHTML = [hours, minutes, seconds].join(":");

  if (distance < 0) {
    clearInterval(x);
    infoEl.innerHTML = "...";
    // app.quit();
  }
}, 1000);
