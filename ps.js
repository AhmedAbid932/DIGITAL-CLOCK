const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  let hr12 = h % 12 || 12; // convert to 12-hour format
  const amPm = h < 12 ? "AM" : "PM";
  if (hr12 < 10) {
    hr12 = "0" + hr12;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hourElement.textContent = hr12;
  minutesElement.textContent = m;
  secondsElement.textContent = s;
  ampm.textContent = amPm;
}

setInterval(updateClock, 1000);
