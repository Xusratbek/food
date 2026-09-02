


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