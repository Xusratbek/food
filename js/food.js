import { menuItems } from './menu-data.js'
import { menuCategories } from './menu-data.js';

const id = new URLSearchParams(window.location.search).get('item')
let deleveryLinks = document.getElementById("categoriesNav")
let productPage = document.getElementById("productPage")
let productDetailInfo = document.getElementById("productDetail") 

let swiperSlideWhen = document.getElementById("swiper-slide__when")
let leftWrapper = document.getElementById("left-wrapper__images")
let foodMainWrapper = document.getElementById("foodMainWrapper")
let productCards = document.getElementById("productCards")
const modal = document.getElementById('bookingModal');

const categoryKeys = {
  1: 'cat.breakfast',
  2: 'cat.raw',
  3: 'cat.cold',
  4: 'cat.bruschetta',
  5: 'cat.wine',
  6: 'cat.salads',
  7: 'cat.soups',
  8: 'cat.pasta',
  9: 'cat.meat',
  10: 'cat.fish',
  11: 'cat.grill',
};

function getCategoryLabel(cat) {
  return t(categoryKeys[cat.id]) || cat.name;
}

// ===== Mobile Menu =====

const openMobileBtn = document.getElementById('openMobileMenu');
const openMobileBtnNav = document.getElementById('openMobileMenuNav'); // yangi qo'shildi
const closeMobileBtn = document.querySelector('#closeMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');
const openModalFromMenu = document.getElementById('openModalFromMenu');

if (closeMobileBtn && mobileMenu) {

  const openMobileMenuHandler = (e) => {
    e.preventDefault();
    mobileMenu.classList.add('active');
  };

  if (openMobileBtn) {
    openMobileBtn.addEventListener('click', openMobileMenuHandler);
  }
  if (openMobileBtnNav) {
    openMobileBtnNav.addEventListener('click', openMobileMenuHandler);
  }

  closeMobileBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  if (openModalFromMenu) {
    openModalFromMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      modal.classList.add('active');
    });
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal) modal.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('active');
  }
});


function renderProducts(items) {
  if (!items || items.length === 0) {
    productCards.innerHTML = `<p class="empty-category">${t('delivery.empty') || 'Bu kategoriyada mahsulot topilmadi'}</p>`;
    return;
  }

  productCards.innerHTML = items.map(item => `
    <a href="food.html?item=${item.id}" class="product-card__item">
      <img class="product-card__image" src="${item.image}" alt="${getItemTitle(item)}">

      <div class="product-info">
        <h4 class="product-info__title">${getItemTitle(item)}</h4>
      </div>

      <div class="product-info__price">
        <span class="product-info__price-amount">${item.price}₽</span>
        <button class="product-info__button">${t('delivery.addToCart')}</button>
      </div>
    </a>
  `).join("");
}

let currentCategory = null;

function renderTabs() {
  deleveryLinks.innerHTML = menuCategories.map(category => `
    <span class="tab${currentCategory === category.name ? ' active' : ''}" data-category="${category.name}" onclick="categoryFilter('${category.name}')">
      ${getCategoryLabel(category)}
    </span>
  `).join('');
}

renderTabs();

function categoryFilter(categoryName) { 
  const filtered = menuItems.filter(
    item => (item.category || '').toString().trim() === categoryName.toString().trim()
  );


  currentCategory = categoryName;

  productPage.innerHTML = '';
  productDetailInfo.innerHTML = '';
  productPage.classList.add('hidden');

  productCards.classList.remove('hidden');
  renderProducts(filtered);

  deleveryLinks.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryName);
  });
}

window.categoryFilter = categoryFilter;

let currentProduct = null;

function renderDetailText(ford) {
  const addons = ford.addons || [];
  return `<div class="product-detail__info">
          <h1 class="product-detail__title" id="productTitle">${getItemTitle(ford)}</h1>
          <div class="product-detail__price-row">
            <span class="product-detail__price" id="productPrice">${ford.price}</span>
            <span class="product-detail__weight" id="productWeight">${ford.weight}</span>
          </div>
          <div class="product-detail__actions">
            <div class="product-detail__quantity">
              <label for="productQuantity">${t('delivery.quantity')}</label>
              <input type="number" id="productQuantity" value="1" min="1" max="99">
            </div>
            <button type="button" class="product-detail__cart-btn">${t('delivery.addToCart')}</button>
          </div>
          <div class="product-detail__addons">
            <h3 class="product-detail__title">${t('delivery.addons')}</h3>
            <div id="product-addons">
              ${addons.map(item => `
                <label class="product-addon">
                  <div class="product-addon__info">
                    <span class="product-addon__title">${getAddonTitle(item)}</span>
                    <span class="product-addon__price">${item.price} ₽</span>
                  </div>
                  <input type="checkbox" class="product-addon__checkbox" value="${item.id}">
                </label>
              `).join('')}
            </div>
          </div>
        </div>`;
}

function renderDetail(ford) {
  if (!productDetailInfo) return;
  productDetailInfo.innerHTML = renderDetailText(ford);
}


renderTabs();

productCards = document.getElementById("productCards");
productCards.classList.add('hidden');

const defaultItem = menuItems.find(item => item.id == id) || menuItems[0];

if (defaultItem) {
  productPage.classList.remove('hidden');

  const ford = defaultItem;

  if (ford) {
    currentProduct = ford;

    leftWrapper.innerHTML = ford.thumbnails.map(thumbnail => ` <div class="swiper-slide swiper-slider">
      <img style="width: 110px; height: 93px;" src="${thumbnail}" />
    </div>
    `).join('');

    swiperSlideWhen.innerHTML=`<img  src=${ford.image} />`

    foodMainWrapper.innerHTML += ford.thumbnails.slice(0, 1).map(thumbnail => `
      <div class="swiper-slide swiper-slider">
        <img src="${thumbnail}" />
      </div>
    `).join('');


    renderDetail(ford);


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
  }
}


document.addEventListener('languageChanged', () => {
  renderTabs();
  if (currentCategory) {
    categoryFilter(currentCategory);
  } else {
    productCards.classList.add('hidden');
  }
  if (currentProduct) {
    renderDetail(currentProduct);
  }
});