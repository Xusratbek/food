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
    const openMobileBtnNav = document.getElementById('openMobileMenuNav'); // yangi qo'shildi
    const closeMobileBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const openModalFromMenu = document.getElementById('openModalFromMenu');
    
    if (closeMobileBtn && mobileMenu) {
      // Ikkala tugma uchun ham umumiy funksiya
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
  
    // Escape билан ёпиш
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal) modal.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });