let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;

  // Digital Clock
  let TSecond = document.querySelector("#tSecond");
  let TMinute = document.querySelector("#tMinute");
  let THour = document.querySelector("#tHour");
  let ampm = document.querySelector("#ampm");

  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //   convert 24hr clock to 12 hr clock
  if (h > 12) {
    h = h - 12;
  }

  //   add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  THour.innerHTML = h;
  TMinute.innerHTML = m;
  TSecond.innerHTML = s;
  ampm.innerHTML = am;
});
