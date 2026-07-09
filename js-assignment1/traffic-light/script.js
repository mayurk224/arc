document.addEventListener('DOMContentLoaded', function () {
    const stopBtn = document.querySelectorAll('button')[0];
    const readyBtn = document.querySelectorAll('button')[1];
    const goBtn = document.querySelectorAll('button')[2];
    const redLight = document.getElementById('red-light');
    const yellowLight = document.getElementById('yellow-light');
    const greenLight = document.getElementById('green-light');

    stopBtn.addEventListener('click', function () {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = '';
    });

    readyBtn.addEventListener('click', function () {
        yellowLight.style.backgroundColor = 'yellow';
        redLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = '';
    });

    goBtn.addEventListener('click', function () {
        greenLight.style.backgroundColor = 'green';
        redLight.style.backgroundColor = '';
        yellowLight.style.backgroundColor = '';
    });
});
