document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dishName = document.getElementById('dish-name-input').value.trim();
    const imageUrl = document.getElementById('image-url-input').value.trim();
    const ingredientsInput = document.getElementById('ingredients-input').value.trim();

    const ingredients = ingredientsInput
        .split(',')
        .map(ingredient => ingredient.trim())
        .filter(ingredient => ingredient !== '');

    document.getElementById('dish-name-display').textContent = dishName;
    document.getElementById('dish-image-display').src = imageUrl;

    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById('dish-card').style.display = 'block';
});
