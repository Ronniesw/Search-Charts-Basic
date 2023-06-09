// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// Fungsi untuk mengirim pesan ke WhatsApp
function sendMessage() {
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  // Format pesan dengan menggunakan parameter dalam URL
  var text = "Halo, saya " + name + ". Pesan saya: " + message;

  // Nomor telepon penerima WhatsApp
  var phoneNumber = "nomor_telepon";

  // Membangun URL untuk membuka WhatsApp dengan pesan terisi
  var url = "https://wa.me/" + +6282130188790 + "?text=" + encodeURIComponent(text);

  // Buka WhatsApp pada tab baru
  window.open(url, '_blank');
}

// Menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  sendMessage(); // Mengirim pesan ke WhatsApp setelah formulir dikirim
});
