
// Get all buttons
const summerBtn = document.getElementById('summer-btn');
const winterBtn = document.getElementById('winter-btn');
const springBtn = document.getElementById('spring-btn');
const rainyBtn = document.getElementById('rainy-btn');

// Get all images
const summerImg = document.getElementById('summer');
const winterImg = document.getElementById('winter');
const springImg = document.getElementById('spring');
const rainyImg = document.getElementById('rainy');

const imageContainer = document.querySelector('.image-container');

function showImage(selectedImg) {
    summerImg.classList.remove('active');
    winterImg.classList.remove('active');
    springImg.classList.remove('active');
    rainyImg.classList.remove('active');
    
    selectedImg.classList.add('active');
    
    imageContainer.classList.add('single-view');
}

summerBtn.addEventListener('click', () => showImage(summerImg));
winterBtn.addEventListener('click', () => showImage(winterImg));
springBtn.addEventListener('click', () => showImage(springImg));
rainyBtn.addEventListener('click', () => showImage(rainyImg));
