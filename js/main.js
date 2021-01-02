let milli = 0;
let seconds = 0;
let minutes = 0;

let millidisplay;

let secondsdisplay = '0' + seconds;

let minutesdisplay = '0' + minutes;

function stopwatch() {
if (milli < 10){
  millidisplay = '0' + milli;
  milli++;
}
if (milli < 100 && milli > 9) {
  millidisplay = milli;
  milli++;
}

if (milli === 99) {
  milli = 0;
  if (seconds > 58) {
      seconds = 0;
      minutes++;

  if (minutes < 10) {
    minutesdisplay = '0' + minutes;
  }
} else {
    seconds++;
}
if (seconds < 10) {
  secondsdisplay = '0' + seconds;
} else {
  secondsdisplay = seconds;

}

}

document.getElementById('show-clock').innerHTML = minutesdisplay + ':' + secondsdisplay + ':' + millidisplay;
}
let interval;

document.getElementById('start').addEventListener('click', start);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('stop').addEventListener('click', stop);
function start() {
  interval = setInterval(stopwatch, 10);
}

function reset() {
  milli = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById('show-clock').innerHTML = minutesdisplay + ':' + secondsdisplay + ':' + millidisplay;
}

function stop() {
  clearInterval(interval);
}
