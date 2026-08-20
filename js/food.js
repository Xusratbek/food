import { menuItems } from './menu-data.js'
import { menuCategories } from './menu-data.js';


const id = new URLSearchParams(window.location.search).get('item')
let deleveryLinks = document.getElementById("categoriesNav")
let productPage = document.getElementById("productPage")
let productAddons=document.getElementById("product-addons")


deleveryLinks.innerHTML = menuCategories.map(category => `<a class="tab" href="#">${category.name}</a>`).join('');

const ford = menuItems.find(item => item.id == id);





productPage.innerHTML = `<div class="product-detail">
  <div class="product-detail__gallery">
      <div class="product-detail__main-image">
        <button type="button" class="product-gallery__arrow product-gallery__arrow--prev" id="productGalleryPrev" aria-label="Oldingi rasm">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <img id="productMainImage" src="${ford.image}" alt="">
        <button onclick="nextImage()" class="product-gallery__arrow product-gallery__arrow--next" id="productGalleryNext" aria-label="Keyingi rasm">
          <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="product-detail__thumbs" id="productThumbs">

 
      ${ford.thumbnails.map((src, index) => `
              <button type="button" class="product-thumb${index === 0 ? ' active' : ''}" data-src="${src}">
                <img src="${src}" alt="sfsdfsd">
              </button>
            `).join('')}


      
      </div>
  </div>
  <div class="product-detail__info">
    <h1 class="product-detail__title" id="productTitle">${ford.title}</h1>
    <div class="product-detail__price-row">
      <span class="product-detail__price" id="productPrice">${ford.price}</span>
      <span class="product-detail__weight" id="productWeight">${ford.weight}</span>
    </div>
    <div class="product-detail__actions">
      <div class="product-detail__quantity">
        <label for="productQuantity">Количество порций:</label>
        <input type="number" id="productQuantity" value="1" min="1" max="99">
      </div>
      <button type="button" class="product-detail__cart-btn">В корзину</button>
    </div>
    <div class="product-detail__addons">
      <h3 class="product-detail__title">Сделать еще вкуснее</h3>
      <div id="product-addons">
        ${ford.addons.map(item => `
              <label class="product-addon">
                <div class="product-addon__info">
                  <span class="product-addon__title">${item.titleKey}</span>
                  <span class="product-addon__price">${item.price} ₽</span>
                </div>
                <input type="checkbox" class="product-addon__checkbox" value="${item.id}">
              </label>`).join('')}
      </div>
    </div>
    
  </div>
</div>`









