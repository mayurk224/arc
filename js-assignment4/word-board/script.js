
const wordForm = document.getElementById('word-form');
const wordInput = document.getElementById('word-input');
const wordBoard = document.getElementById('word-board');

wordForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const word = wordInput.value.trim();

    if (word) {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;

        const randomSize = Math.floor(Math.random() * 21) + 10;
        wordElement.style.fontSize = randomSize + 'px';
        wordElement.style.marginRight = '10px';
        wordElement.style.marginBottom = '10px';
        wordElement.style.display = 'inline-block';

        wordBoard.appendChild(wordElement);
        wordInput.value = '';
    }
});
