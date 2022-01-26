const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const years = document.getElementById("year");
const month2 = document.getElementById("month");
const days = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const form = document.getElementById("form");
const reset = document.getElementById("reset");

let futureDate = new Date(2022, 0, 31, 11, 30, 0);

let monthValue;
let dayValue;
let hourValue;
let minuteValue;
let yearValue;


form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearInterval(countdown);

  monthValue = parseInt(month2.value) - 1;
  dayValue = parseInt(days.value);
  hourValue = parseInt(hour.value);
  minuteValue = parseInt(minute.value);
  yearValue = parseInt(years.value);

  futureDate = new Date(yearValue, monthValue, dayValue, hourValue, minuteValue, 0);

  console.log(futureDate);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];
  console.log(futureDate.getDay());

  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  // future time in ms
  const futureTime = futureDate.getTime();

  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    
    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    let values = [days, hours, minutes, seconds];

    function format(item) {
      if (item < 10){
        return item = `0${item}`;
      } 
      return item;
    }

    items.forEach(function(item, index) {
      item.innerHTML = format(values[index]);
    });

    if (t < 0) {
      clearInterval(countdown2);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveway has expired</h4>`;
    }
  }



  //countdown
  let countdown2 = setInterval(getRemainingTime, 1000);

  getRemainingTime();

  reset.addEventListener("click", function () {
    clearInterval(countdown);
    clearInterval(countdown2);
    futureDate = new Date(0, 0, 0, 0, 0, 0);
    values = [00, 00, 00, 00];

    function format(item) {
      if (item < 10){
        return item = `0${item}`;
      } 
      return item;
    }
  
    items.forEach(function(item, index) {
      item.innerHTML = format(values[index]);
    });

  });

});



console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(futureDate.getDay());

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  let values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10){
      return item = `0${item}`;
    } 
    return item;
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveway has expired</h4>`;
  }
}



//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
