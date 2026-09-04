


import { menuCategories, menuItems } from "./menu-data.js";

const deleveryLinks = document.getElementById("categoriesNav");
const productCards = document.querySelector(".product-card");

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

function renderProducts(items) {
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

document.addEventListener('DOMContentLoaded', () => {
    // ===== Booking Modal =====
        const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('bookingModal');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    }
  
    

    const openModalMobile = document.getElementById('openModalMobile');
    if (openModalMobile && modal) {
      openModalMobile.addEventListener('click', () => {
        modal.classList.add('active');
      });
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
  });


let currentCategory = null;

function categoryFilter(categoryName) {
  const filtered = menuItems.filter(
    item => item.category.trim() === categoryName.trim()
  );

  currentCategory = categoryName;
  renderProducts(filtered);

  const contactsSection = document.getElementById('contactsSection');
  if (contactsSection) contactsSection.classList.add('hidden');

  deleveryLinks.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryName);
  });
}


window.categoryFilter = categoryFilter;


function renderTabs() {
  deleveryLinks.innerHTML = menuCategories.map(category => `
    <span class="tab${currentCategory === category.name ? ' active' : ''}" data-category="${category.name}" onclick="categoryFilter('${category.name}')">
      ${getCategoryLabel(category)}
    </span>
  `).join("");
}

renderTabs();


renderProducts(menuItems);


document.addEventListener('languageChanged', () => {
  renderTabs();
  if (currentCategory) {
    categoryFilter(currentCategory);
  } else {
    renderProducts(menuItems);
  }
});