
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const cartList = document.getElementById('cart-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemText = input.value.trim();
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        cartList.appendChild(li);
        input.value = '';
    }
});
