const inputField = document.getElementById('input');
const body = document.body;

inputField.addEventListener('input', (e) => {
    const value = e.target.value.trim().toLowerCase();
    if (value === 'light') {
        body.style.backgroundColor = '#ffffe0'; // light yellow
    } else if (value === 'dark') {
        body.style.backgroundColor = '#808080'; // gray
    }
});
