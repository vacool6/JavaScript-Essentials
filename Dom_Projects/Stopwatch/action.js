let time = 0;
let timeId;
let timerStart = false;

const timePara = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const pauseBtn = document.querySelector("#pause");

function setTime() {
  timePara.innerText = `0${parseInt(time / 3600)}:${
    parseInt((time / 60) % 60) < 10
      ? "0" + parseInt((time / 60) % 60)
      : parseInt((time / 60) % 60)
  }:${
    parseInt(time % 60) < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60)
  }`;
}

setTime();

function start() {
  if (!timerStart) {
    timeId = setInterval(() => {
      time = time + 1;
      console.log(time);
      setTime();
    }, 1000);
  }

  startBtn.setAttribute("disabled", true);
  pauseBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");

  timerStart = true;
}
function stop() {
  stopBtn.setAttribute("disabled", true);
  pauseBtn.setAttribute("disabled", true);
  startBtn.removeAttribute("disabled");

  time = 0;
  setTime();
  clearInterval(timeId);
  timerStart = false;
}
function pause() {
  if (timerStart) {
    clearInterval(timeId);
    timerStart = false;
    pauseBtn.innerText = "continue";
  } else {
    start();
    pauseBtn.innerText = "pause";
  }
}
