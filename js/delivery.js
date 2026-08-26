import { menuCategories, menuItems } from "./menu-data.js";

const deleveryLinks = document.getElementById("categoriesNav");
const productCards = document.querySelector(".product-card");


function renderProducts(items) {
  productCards.innerHTML = items.map(item => `
    <a href="food.html?item=${item.id}" class="product-card__item">
      <img class="product-card__image" src="${item.image}" alt="${item.title}">

      <div class="product-info">
        <h4 class="product-info__title">${item.title}</h4>
      </div>

      <div class="product-info__price">
        <span class="product-info__price-amount">${item.price}₽</span>
        <button class="product-info__button">Добавить</button>
      </div>
    </a>
  `).join("");
}


function categoryFilter(categoryName) {
  const filtered = menuItems.filter(
    item => item.category.trim() === categoryName.trim()
  );

  renderProducts(filtered);
}


window.categoryFilter = categoryFilter;


deleveryLinks.innerHTML = menuCategories.map(category => `
  <span class="tab" onclick="categoryFilter('${category.name}')">
    ${category.name}
  </span>
`).join("");


renderProducts(menuItems);