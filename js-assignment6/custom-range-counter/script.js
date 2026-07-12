const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const fromValueDisplay = document.getElementById('from-value');
const toValueDisplay = document.getElementById('to-value');
const counterContainer = document.getElementById('range-counter');
const form = document.querySelector('form');
let intervalId = null;

function updateDisplayValues() {
    fromValueDisplay.textContent = fromInput.value;
    toValueDisplay.textContent = toInput.value;
}

fromInput.addEventListener('input', updateDisplayValues);
toInput.addEventListener('input', updateDisplayValues);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fromValue = parseInt(fromInput.value);
    const toValue = parseInt(toInput.value);
    
    if (isNaN(fromValue) || isNaN(toValue)) {
        alert('Please select valid numbers for from and to!');
        return;
    }
    
    if (fromValue === toValue) {
        alert('From and To values must be different!');
        return;
    }
    
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    let current = fromValue;
    const target = toValue;
    const increment = current <= target ? 1 : -1;
    
    counterContainer.textContent = current;
    
    intervalId = setInterval(() => {
        current += increment;
        counterContainer.textContent = current;
        
        if (current === target) {
            clearInterval(intervalId);
        }
    }, 1000);
});
