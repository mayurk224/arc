const apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

const mensButton = document.getElementById('mens');
const womensButton = document.getElementById('womens');
const kidsButton = document.getElementById('kids');
const contentContainer = document.getElementById('content-container');

const tabMap = {
    mens: 'Men',
    womens: 'Women',
    kids: 'Kids',
};

let categories = [];

function setActiveTab(button) {
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.toggle('active', tab === button);
    });
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="image-container">
            <img src="${product.image || ''}" alt="${product.title || 'Product'}" loading="lazy">
            ${product.badge_text ? `<span class="badge-text">${product.badge_text}</span>` : ''}
        </div>
        <div class="product-details">
            <h2 class="product-title">${product.title || 'Untitled product'}</h2>
            <p class="vendor">${product.vendor || ''}</p>
            <div class="price-container">
                <p class="price">₹${product.price || '-'}</p>
                ${product.compare_at_price ? `<p class="compare-at-price">₹${product.compare_at_price}</p>` : ''}
            </div>
            <button type="button" class="add-to-cart">Add to cart</button>
        </div>
    `;

    return card;
}

function renderProducts(products) {
    contentContainer.innerHTML = '';

    if (!Array.isArray(products) || products.length === 0) {
        contentContainer.innerHTML = '<p class="empty-text">No products available for this category.</p>';
        return;
    }

    products.forEach(product => {
        const card = createProductCard(product);
        contentContainer.appendChild(card);
    });
}

function showMessage(message, className = 'loading-text') {
    contentContainer.innerHTML = `<p class="${className}">${message}</p>`;
}

function getCategoryNameFromTab(tabId) {
    return tabMap[tabId] || '';
}

function handleTabClick(event) {
    const tab = event.currentTarget;
    const categoryName = getCategoryNameFromTab(tab.id);
    const selectedCategory = categories.find(category => category.category_name === categoryName);

    if (!selectedCategory) {
        showMessage('Unable to find that category.', 'error-text');
        return;
    }

    setActiveTab(tab);
    renderProducts(selectedCategory.category_products);
}

async function fetchCategories() {
    showMessage('Loading products...');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        categories = Array.isArray(data.categories) ? data.categories : [];

        if (categories.length === 0) {
            showMessage('No categories found.', 'empty-text');
            return;
        }

        const defaultCategory = categories.find(cat => cat.category_name === 'Men') || categories[0];
        const defaultTab = defaultCategory.category_name === 'Women' ? womensButton : defaultCategory.category_name === 'Kids' ? kidsButton : mensButton;

        if (defaultTab) {
            setActiveTab(defaultTab);
        }

        renderProducts(defaultCategory.category_products);
    } catch (error) {
        console.error('Failed to load products', error);
        showMessage('Unable to load products. Please try again later.', 'error-text');
    }
}

if (mensButton) {
    mensButton.addEventListener('click', handleTabClick);
}

if (womensButton) {
    womensButton.addEventListener('click', handleTabClick);
}

if (kidsButton) {
    kidsButton.addEventListener('click', handleTabClick);
}

fetchCategories();