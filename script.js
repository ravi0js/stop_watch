let startTime, elapsedTime = 0, timerInterval;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  hoursDisplay.innerText="00";
  minutesDisplay.innerHTML="00";
  secondsDisplay.innerText="00";
  millisecondsDisplay.innerText="00";
}

function updateTimer() {
  const currentTime = Date.now() - startTime;
  const milliseconds = Math.floor((currentTime % 1000) / 10);
  const seconds = Math.floor((currentTime / 1000) % 60);
  const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
  const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);

  hoursDisplay.textContent = pad(hours, 2);
  minutesDisplay.textContent = pad(minutes, 2);
  secondsDisplay.textContent = pad(seconds, 2);
  millisecondsDisplay.textContent = pad(milliseconds, 2);
}

function pad(number, length) {
  return number.toString().padStart(length, '0');
}
