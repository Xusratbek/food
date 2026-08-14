document.addEventListener('DOMContentLoaded', () => {
  const landingSections = document.querySelectorAll('.landing-section');
  const heroWrapper = document.querySelector('.wrapper');
  const deliveryPage = document.getElementById('deliveryPage');
  const productPage = document.getElementById('productPage');
  const deliveryGrid = document.getElementById('deliveryGrid');
  const categoriesNav = document.getElementById('categoriesNav');
  const productCategoriesNav = document.getElementById('productCategoriesNav');
  const deliveryLinks = document.querySelectorAll('[data-open-delivery]');
  const menuLinks = document.querySelectorAll('[data-open-landing]');
  const dostavkaMoreBtn = document.querySelector('.dostavka-more__btn');
  const contactsSection = document.querySelector('.contacts-section');

  let activeCategory = 'breakfast';
  let currentItemId = null;

  function showLanding() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.remove('active');

    landingSections.forEach((section) => section.classList.remove('hidden'));
    if (heroWrapper) heroWrapper.classList.remove('hidden');
    if (deliveryPage) deliveryPage.classList.add('hidden');
    if (productPage) productPage.classList.add('hidden');
    if (contactsSection) contactsSection.classList.remove('hidden');
    document.body.classList.remove('delivery-active');
  }

  function showDelivery() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.remove('active');

    landingSections.forEach((section) => section.classList.add('hidden'));
    if (heroWrapper) heroWrapper.classList.add('hidden');
    if (deliveryPage) deliveryPage.classList.remove('hidden');
    if (productPage) productPage.classList.add('hidden');
    if (contactsSection) contactsSection.classList.remove('hidden');
    document.body.classList.add('delivery-active');
    setCategory(activeCategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showProduct(itemId) {
    const item = menuItems.find((menuItem) => menuItem.id === itemId);
    if (!item) return;

    currentItemId = itemId;

    if (deliveryPage) deliveryPage.classList.add('hidden');
    if (productPage) productPage.classList.remove('hidden');
    renderProduct(item);
    updateCategoryButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToGrid() {
    if (productPage) productPage.classList.add('hidden');
    if (deliveryPage) deliveryPage.classList.remove('hidden');
    if (contactsSection) contactsSection.classList.remove('hidden');
    renderGrid();
    updateCategoryButtons();
  }

  function setCategory(categoryId) {
    activeCategory = categoryId;

    if (productPage && !productPage.classList.contains('hidden')) {
      backToGrid();
      return;
    }

    updateCategoryButtons();
    renderGrid();
  }

  function updateCategoryButtons() {
    document.querySelectorAll('[data-category]').forEach((btn) => {
      const isActive = btn.dataset.category === activeCategory;
      btn.classList.toggle('active', isActive);

      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  function renderCategories() {
    const categoryButtons = menuCategories
      .map(
        (cat) => `
        <button
          type="button"
          class="delivery-category${cat.id === activeCategory ? ' active' : ''}"
          data-category="${cat.id}"
        >${getCategoryName(cat)}</button>
      `
      )
      .join('');

    if (categoriesNav) categoriesNav.innerHTML = categoryButtons;
    if (productCategoriesNav) productCategoriesNav.innerHTML = categoryButtons;
  }

  function getCategoryItems(categoryId) {
    const seenIds = new Set();
    const seenTitles = new Set();

    return menuItems.filter((item) => {
      if (item.category !== categoryId) return false;
      if (seenIds.has(item.id)) return false;

      const titleKey = item.title.trim().toLowerCase();
      if (seenTitles.has(titleKey)) return false;

      seenIds.add(item.id);
      seenTitles.add(titleKey);
      return true;
    });
  }

  function renderGrid() {
    if (!deliveryGrid) return;

    const items = getCategoryItems(activeCategory);

    if (items.length === 0) {
      deliveryGrid.innerHTML = `
        <div class="delivery-empty">
          <p>${t('delivery.empty')}</p>
        </div>
      `;
      return;
    }

    deliveryGrid.innerHTML = items
      .map(
        (item) => `
        <article class="food-card" data-id="${item.id}">
          <div class="food-card__image-wrap">
            <img src="${item.image}" alt="${getItemTitle(item)}" class="food-card__image" loading="lazy">
          </div>
          <div class="food-card__body">
            <h3 class="food-card__title">${getItemTitle(item)}</h3>
            <div class="food-card__footer">
              <span class="food-card__price">${formatItemPrice(item)}</span>
              <button type="button" class="food-card__btn" data-add-cart="${item.id}">${t('delivery.addToCart')}</button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    deliveryGrid.querySelectorAll('.food-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-add-cart]')) {
          e.stopPropagation();
          return;
        }
        showProduct(Number(card.dataset.id));
      });
    });

    deliveryGrid.querySelectorAll('[data-add-cart]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }

  function getProductThumbnails(item) {
    if (item.thumbnails?.length) return item.thumbnails;
    return [item.image];
  }

  function renderProduct(item) {
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productWeight = document.getElementById('productWeight');
    const productMainImage = document.getElementById('productMainImage');
    const productQuantity = document.getElementById('productQuantity');
    const thumbsContainer = document.getElementById('productThumbs');
    const addonsContainer = document.getElementById('productAddons');

    if (!productTitle || !productPrice || !productWeight || !productMainImage) return;

    productTitle.textContent = getItemTitle(item);
    productPrice.textContent = formatItemPrice(item);
    productWeight.textContent = formatItemWeight(item.weight);
    productMainImage.src = item.image;
    productMainImage.alt = getItemTitle(item);
    if (productQuantity) productQuantity.value = 1;

    if (!thumbsContainer) return;

    const thumbnails = getProductThumbnails(item);
    thumbsContainer.innerHTML = thumbnails
      .map(
        (src, index) => `
        <button type="button" class="product-thumb${index === 0 ? ' active' : ''}" data-src="${src}">
          <img src="${src}" alt="${getItemTitle(item)}">
        </button>
      `
      )
      .join('');

    thumbsContainer.querySelectorAll('.product-thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        productMainImage.src = thumb.dataset.src;
        thumbsContainer.querySelectorAll('.product-thumb').forEach((btn) => btn.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    if (!addonsContainer) return;

    addonsContainer.innerHTML = item.addons
      .map(
        (addon) => `
        <label class="product-addon">
          <div class="product-addon__info">
            <span class="product-addon__title">${getAddonTitle(addon)}</span>
            <span class="product-addon__price">${addon.price} ₽</span>
          </div>
          <input type="checkbox" class="product-addon__checkbox" value="${addon.id}">
        </label>
      `
      )
      .join('');
  }

  function refreshDeliveryContent() {
    renderCategories();
    if (deliveryPage && !deliveryPage.classList.contains('hidden')) {
      renderGrid();
    }
    if (productPage && !productPage.classList.contains('hidden') && currentItemId) {
      const current = menuItems.find((menuItem) => menuItem.id === currentItemId);
      if (current) renderProduct(current);
    }
  }

  document.addEventListener('click', (e) => {
    const categoryBtn = e.target.closest('[data-category]');
    if (!categoryBtn) return;

    const isDeliveryNav =
      categoriesNav?.contains(categoryBtn) || productCategoriesNav?.contains(categoryBtn);

    if (!isDeliveryNav) return;

    e.preventDefault();
    setCategory(categoryBtn.dataset.category);
  });

  document.addEventListener('languageChanged', () => {
    refreshDeliveryContent();
  });

  renderCategories();

  if (deliveryGrid) {
    const deliveryVisible = !deliveryPage || !deliveryPage.classList.contains('hidden');
    const productHidden = !productPage || productPage.classList.contains('hidden');

    if (deliveryVisible && productHidden) {
      renderGrid();
    }
  }

  deliveryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showDelivery();
    });
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showLanding();
    });
  });

  if (dostavkaMoreBtn) {
    dostavkaMoreBtn.addEventListener('click', showDelivery);
  }

  const logoLinks = document.querySelectorAll('.sidebar-left a:first-child, .mobile-menu-logo a');
  logoLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (document.body.classList.contains('delivery-active')) {
        e.preventDefault();
        showLanding();
      }
    });
  });
});
