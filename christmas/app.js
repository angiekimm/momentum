// Date, setInterval
function getTimeLeft() {
  const today = new Date();
  const christmas = new Date("December 25, 2022 00:00:00");

  const diff = (christmas.getTime() - today.getTime()) / 1000; // second
  const day = Math.floor(diff / (60 * 60 * 24));
  const hour = String(Math.floor((diff / (60 * 60)) % 24)).padStart(2, "0");
  const minute = String(Math.floor((diff / 60) % 60)).padStart(2, "0");
  const second = String(Math.floor(diff % 60)).padStart(2, "0");

  const timeLeft = document.querySelector("#js-clock");
  timeLeft.innerText = `${day}d ${hour}h ${minute}m ${second}s `;
}

getTimeLeft();
setInterval(getTimeLeft, 1000);