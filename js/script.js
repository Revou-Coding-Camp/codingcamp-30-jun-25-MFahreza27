    function getUsername() {
      const urlParams = new URLSearchParams(window.location.search);
      let username = urlParams.get('username');

      if (!username) {
        username = prompt("Masukkan nama kamu:");
        if (username) {
          const url = new URL(window.location);
          url.searchParams.set('username', username);
          window.history.replaceState({}, '', url);
        }
      }

      if (username) {
        document.getElementById('username').textContent = username;
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      getUsername();
      
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
      }

      setupSmoothScroll();
    });