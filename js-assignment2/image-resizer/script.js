const image = document.getElementById('image');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeDisplay = document.getElementById('size');

let currentSize = 100;
const MIN_SIZE = 100;
const MAX_SIZE = 800;
const STEP = 10;

function updateImageSize() {
    image.style.width = currentSize + 'px';
    image.style.height = currentSize + 'px';
    sizeDisplay.textContent = currentSize + 'px';

    increaseBtn.disabled = currentSize >= MAX_SIZE;
    decreaseBtn.disabled = currentSize <= MIN_SIZE;
}

increaseBtn.addEventListener('click', () => {
    if (currentSize < MAX_SIZE) {
        currentSize = Math.min(currentSize + STEP, MAX_SIZE);
        updateImageSize();
    }
});

decreaseBtn.addEventListener('click', () => {
    if (currentSize > MIN_SIZE) {
        currentSize = Math.max(currentSize - STEP, MIN_SIZE);
        updateImageSize();
    }
});

updateImageSize();
