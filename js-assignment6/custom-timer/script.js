const timerDisplay = document.getElementById('timer');
let currentInterval = null;

function startTimer(seconds) {
    if (currentInterval) {
        clearInterval(currentInterval);
    }

    let remaining = seconds;
    timerDisplay.textContent = remaining;

    currentInterval = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
            clearInterval(currentInterval);
            timerDisplay.textContent = "Time's up!";
        } else {
            timerDisplay.textContent = remaining;
        }
    }, 1000);
}

document.getElementById('20-btn').addEventListener('click', () => startTimer(20));
document.getElementById('40-btn').addEventListener('click', () => startTimer(40));
document.getElementById('60-btn').addEventListener('click', () => startTimer(60));
document.getElementById('90-btn').addEventListener('click', () => startTimer(90));
