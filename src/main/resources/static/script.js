document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle Functionality
  const themeBtn = document.getElementById('themeBtn');
  const body = document.body;

  // Set theme on load
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Toggle theme on button click
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.featured, .product-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// Add to Cart Function
function addToCart(button) {
  const productCard = button.closest('.product-card');
  const name = productCard.querySelector('.product-title').textContent;
  const priceText = productCard.querySelector('.product-price').textContent;
  const price = parseInt(priceText.replace(/[^\d]/g, ''));

  const product = {
    id: name.replace(/\s+/g, '-').toLowerCase(), // use name as id
    name: name,
    price: price,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Update cart count in navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountSpan = document.querySelector('.cart-count');
  if (cartCountSpan) {
    cartCountSpan.textContent = count;
  }
}
// Initialize cart count on load
document.addEventListener('DOMContentLoaded', updateCartCount);

document.addEventListener('DOMContentLoaded', function () {
  // your theme toggle, animations, etc...
  updateCartCount(); // 👈 Add this here
});
updateCartCount();
