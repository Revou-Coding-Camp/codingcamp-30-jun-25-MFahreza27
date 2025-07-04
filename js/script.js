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

    function handleFormSubmit(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value;
      const tanggal = document.getElementById('tanggal').value;
      const jk = document.querySelector('input[name="jk"]:checked')?.value;
      const pesan = document.getElementById('pesan').value;

      const birthDate = new Date(tanggal);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      const output = document.getElementById('output');
      output.innerHTML = `
        <div class="space-y-4">
          <div class="border-b border-white/20 pb-2">
            <h4 class="font-bold text-white">Pesan</h4>
          </div>
          <div class="space-y-2">
            <p class="text-gray-300"><span class="font-bold text-white">Nama:</span> ${nama}</p>
            <p class="text-gray-300"><span class="font-bold text-white">Tanggal Lahir:</span> ${tanggal}</p>
            <p class="text-gray-300"><span class="font-bold text-white">Umur:</span> ${age} years old</p>
            <p class="text-gray-300"><span class="font-bold text-white">Jenis Kelamin:</span> ${jk}</p>
            <p class="text-gray-300"><span class="font-bold text-white">Pesan:</span></p>
            <p class="text-gray-300 italic">"${pesan}"</p>
          </div>
        </div>
      `;
    }

