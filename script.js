// Sample product data
const products = [
    { id: 1, name: 'Mobile', price: 500 },
    { id: 2, name: 'Book', price: 20 },
    // Add more products as needed
];

// Sample user data
const userData = {
    email: 'user@example.com',
    password: 'password'
};

// Initialize cart array
let shoppingCart = [];

// Function to render product list
function renderProductList() {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '<h2>Product List</h2>';
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListDiv.appendChild(productItem);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        shoppingCart.push(selectedProduct);
        renderShoppingCart();
    }
}

// Function to render shopping cart
function renderShoppingCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '<h2>Shopping Cart</h2>';

    shoppingCart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(cartItem);
    });
}

// Function to handle login
function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput.value === userData.email && passwordInput.value === userData.password) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to handle checkout
function checkout() {
    if (shoppingCart.length > 0) {
        alert('Proceeding to checkout. Thank you for shopping with us!');
        shoppingCart = []; // Clear the cart after checkout
        renderShoppingCart();
    } else {
        alert('Your shopping cart is empty. Add items before checking out.');
    }
}

// Initialize the page
renderProductList();

// Event listeners
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('checkout-btn').addEventListener('click', checkout);
