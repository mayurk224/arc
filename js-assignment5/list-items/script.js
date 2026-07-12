let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

const listItems = document.getElementById('listItems');

groceryList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listItems.appendChild(li);
});