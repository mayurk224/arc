let seconds = 0;
let interval;

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        document.getElementById("timer").textContent = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}