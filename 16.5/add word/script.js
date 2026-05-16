// Get elements from HTML
const wordInput = document.getElementById('wordInput');
const addButton = document.getElementById('addButton');
const wordContainer = document.getElementById('wordContainer');

// Array to store all words
let words = [];

// Function to add a word
function addWord() {
    // Get the value from input
    const word = wordInput.value.trim();
    
    // Check if input is not empty
    if (word === '') {
        alert('Please enter a word!');
        return;
    }
    
    // Add word to array
    words.push(word);
    
    // Clear the input field
    wordInput.value = '';
    
    // Focus back on input for better UX
    wordInput.focus();
    
    // Display all words
    displayWords();
}

// Function to display all words
function displayWords() {
    // Clear the container
    wordContainer.innerHTML = '';
    
    // Loop through words array and create elements
    words.forEach((word, index) => {
        // Create a div for each word
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        
        // Add word text
        wordItem.innerHTML = `
            ${word}
        `;
        
        // Add to container
        wordContainer.appendChild(wordItem);
    });
}

// Function to remove a word
function removeWord(index) {
    // Remove word at specific index
    words.splice(index, 1);
    
    // Display updated words
    displayWords();
}

// Add event listener to button
addButton.addEventListener('click', addWord);

// Add event listener for Enter key
wordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addWord();
    }
});