import { menuItems } from './menu-data.js'
import { menuCategories } from './menu-data.js';


const id = new URLSearchParams(window.location.search).get('item')
let deleveryLinks = document.getElementById("categoriesNav")
let productPage = document.getElementById("productPage")
let productDetailInfo = document.getElementById("productDetail") 
let productAddons = document.getElementById("product-addons")
let swiperSlideWhen = document.getElementById("swiper-slide__when")
let leftWrapper = document.getElementById("left-wrapper__images")
let swiperSlides = document.getElementById("swiper-slides")





deleveryLinks.innerHTML = menuCategories.map(category => `<a class="tab" href="#">${category.name}</a>`).join('');

const ford = menuItems.find(item => item.id == id);

leftWrapper.innerHTML = ford.thumbnails.map(thumbnail => ` <div class="swiper-slide swiper-slider">
    <img style="width: 110px; height: 93px;" src="${thumbnail}" />
</div>
`).join('');

swiperSlides.innerHTML= ford.thumbnails.map(thumbnail => ` <div class="swiper-slide swiper-slider">
    <img src="${thumbnail}" />
</div>
`).join('');

swiperSlideWhen.innerHTML=`<img  src=${ford.image} />`


productDetailInfo.innerHTML = `<div class="product-detail__info">
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
            </label>
          `).join('')}
        </div>
      </div>
    </div>`



   





var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  
});

var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});









