let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://images.pexels.com/photos/35123972/pexels-photo-35123972.jpeg",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

document.getElementById('dish-name-display').textContent = recipeObj.title;
document.getElementById('dish-image-display').src = recipeObj.imgSrc;

const ingredientsList = document.getElementById('ingredients-list');
recipeObj.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
});
