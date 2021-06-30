//I use vanilla JS instead of jQuery or a framework to develop this app.
const title = document.querySelector("h1"); //select h1
    title.textContent = title.textContent.toUpperCase(); //make uppercase

const label = document.querySelectorAll(".timer-section-time-label p"); //select every element of label p as a array
  label.forEach(element => { //loop over the array and make uppercase
    element.textContent = element.textContent.toUpperCase(); //we need to update .textContet property to get the upperCase.
  })

var numberDaysCountdown = 14; //number of days of the countdown (initial value)

var counterDay = new Date(); //today
counterDay = counterDay.setDate(counterDay.getDate() + numberDaysCountdown); //today + 14. If number < 31 => setDate is between month range. If number > 31 => counterDay object is updated to
//last day last month and then grab that int. Then sum that int plus 14 and we get counterDay.

function timer() {

  var now = new Date();
  totalRemainingSeconds = (counterDay - now) / 1000; //we get total remianing seconds by substracting from the counterDay (future date) the present moment (now variable = right now date).

  var remainingDays = Math.floor(totalRemainingSeconds / 60 / 60 / 24); //we get remaining days. From seconds to minutes to hours to days. Then Math.floor because we don't need a floating.
  var remainingHours = Math.floor(totalRemainingSeconds / 60 / 60) % 24;
  var remainingMinutes = Math.floor(totalRemainingSeconds / 60) % 60;
  var remainingSeconds = Math.floor(totalRemainingSeconds) % 60;

  const cssDays = document.querySelector("#remainingdays");
  const cssHours = document.querySelector("#remaininghours");
  const cssMinutes = document.querySelector("#remainingminutes");
  const cssSeconds = document.querySelector("#remainingseconds");

  if (remainingDays < 10) {
    cssDays.textContent = "0" + remainingDays;
  }
  else {
    cssDays.textContent = remainingDays;
  }

  if (remainingHours < 10) {
    cssHours.textContent = "0" + remainingHours;
  }
  else {
    cssHours.textContent = remainingHours;
  }

  if (remainingMinutes < 10) {
    cssMinutes.textContent = "0" + remainingMinutes;
  }
  else {
    cssMinutes.textContent = remainingMinutes;
  }

  if (remainingSeconds < 10) {
    cssSeconds.textContent = "0" + remainingSeconds;
  }
  else {
    cssSeconds.textContent = remainingSeconds;
  }

}

setInterval(timer, 1000); //function timer executes every 1000 ms = 1 s.
