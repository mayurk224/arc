const button = document.getElementById('random');

function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + hex.padStart(6, '0');
}

button.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});
