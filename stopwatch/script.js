const time = document.querySelector('#time');

let min = 0;
let sec = 0;
let msec = 0;

let interval;

function start() {

    interval = setInterval(function () {

        msec++;

        if (msec == 100) {
            sec++;
            msec = 0;
        }

        if (sec == 60) {
            min++;
            sec = 0;
        }

        time.textContent =
            `${min < 10 ? "0" + min : min}:` +
            `${sec < 10 ? "0" + sec : sec}:` +
            `${msec < 10 ? "0" + msec : msec}`;

    }, 10);

}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    time.textContent = '00:00:00';
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
document.querySelector('#reset').addEventListener('click', reset);