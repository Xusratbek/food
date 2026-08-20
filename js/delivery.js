import { menuCategories } from './menu-data.js';
import { menuItems } from './menu-data.js';




let deleveryLinks = document.getElementById("categoriesNav")
let productCards= document.querySelector(".product-card")



deleveryLinks.innerHTML = menuCategories.map(category => `<a class="tab" href="#">${category.name}</a>`).join('');





productCards.innerHTML = menuItems.map(item => `<a href="food.html?item=${item.id}" class="product-card__item">
    <img class="product-card__image" src="${item.image}" alt="${item.title}">
    <div class="product-info">
        <h4 class="product-info__title">${item.title}</h4>
    </div>
    <div class="product-info__price">
        <span class="product-info__price-amount">${item.price}₽</span>
        <button class="product-info__button">Добавить</button>
    </div>
</a>`).join('')


















