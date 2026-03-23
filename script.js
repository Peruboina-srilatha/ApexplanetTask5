// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 800, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 500, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 100, img: "https://via.placeholder.com/150" }
];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cart = [];

// Lazy load images
products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.img}" loading="lazy" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productContainer.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = `Total: $${total}`;
}
