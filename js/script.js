  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('bookingModal');

 

  document.addEventListener('DOMContentLoaded', () => {
    // ===== Booking Modal =====
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('bookingModal');
  
    if (modal && closeBtn) {
      // Barcha "data-open-modal" atributiga ega tugmalarni topib, hammasiga ulaymiz
      document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
          modal.classList.add('active');
          // agar tugma mobile menyu ichida bo'lsa, menyuni yopib qo'yamiz
          const mobileMenuEl = document.getElementById('mobileMenu');
          if (mobileMenuEl) mobileMenuEl.classList.remove('active');
        });
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
  
    // ===== Mobile Menu =====
    const openMobileBtn = document.getElementById('openMobileMenu');
    const openMobileBtnNav = document.getElementById('openMobileMenuNav');
    const closeMobileBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
  
    if (closeMobileBtn && mobileMenu) {
      const openMobileMenuHandler = (e) => {
        e.preventDefault();
        mobileMenu.classList.add('active');
      };
  
      if (openMobileBtn) openMobileBtn.addEventListener('click', openMobileMenuHandler);
      if (openMobileBtnNav) openMobileBtnNav.addEventListener('click', openMobileMenuHandler);
  
      closeMobileBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    }
  
    // Escape билан ёпиш
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal) modal.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });