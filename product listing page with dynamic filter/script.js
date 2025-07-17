const products = [
  { title: "Smartphone", category: "electronics", price: 599 },
  { title: "T-Shirt", category: "fashion", price: 29 },
  { title: "Laptop", category: "electronics", price: 1200 },
  { title: "Jeans", category: "fashion", price: 49 },
  { title: "Book: JavaScript Basics", category: "books", price: 15 },
  { title: "Book: CSS Mastery", category: "books", price: 20 }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

function renderProducts(productList) {
  productGrid.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-title">${product.title}</div>
      <div class="product-category">${product.category}</div>
      <div class="product-price">$${product.price}</div>
    `;
    productGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const sortOrder = priceSort.value;

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm));
  }

  // Category filter
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Sort
  if (sortOrder === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceSort.addEventListener("change", applyFilters);

// Initial render
renderProducts(products);

