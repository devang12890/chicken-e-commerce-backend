let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total');
  cartItemsDiv.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    totalSpan.textContent = 0;
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${item.name}</span>
      <div>
        <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
      <span>₹${item.price * item.quantity}</span>
    `;

    cartItemsDiv.appendChild(itemDiv);
  });

  totalSpan.textContent = total;
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Proceeding to checkout...");
  localStorage.removeItem('cart');
  cart = [];
  renderCart();
});

renderCart();