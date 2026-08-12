  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('bookingModal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // ===== Booking Modal =====
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('bookingModal');
  
    if (openBtn && closeBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
      });

      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
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
    const closeMobileBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const openModalFromMenu = document.getElementById('openModalFromMenu');
  
    if (openMobileBtn && closeMobileBtn && mobileMenu) {
      openMobileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.add('active');
      });
  
      closeMobileBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
  
      // Менюдан "Бронь столика" босилса
      if (openModalFromMenu) {
        openModalFromMenu.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          modal.classList.add('active');
        });
      }
    }
  
    // Escape билан ёпиш
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal) modal.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });