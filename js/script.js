// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu"); // Gunakan variabel yang jelas

// ketika hamburger menu di klik
hamburgerMenu.onclick = (e) => {
  // tambahkan (e) untuk preventDefault
  navbarNav.classList.toggle("active");
  e.preventDefault(); // Mencegah perilaku default (misal: scroll ke atas jika #hamburger-menu adalah link)
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button"); // Gunakan variabel yang jelas

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button"); // Gunakan variabel yang jelas

shoppingCartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen (perbaikan di sini)
document.addEventListener("click", function (e) {
  // Tutup navbarNav jika bukan hamburgerMenu dan bukan navbarNav itu sendiri
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Tutup searchForm jika bukan searchButton dan bukan searchForm itu sendiri
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Tutup shoppingCart jika bukan shoppingCartButton dan bukan shoppingCart itu sendiri
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box (Tidak ada perubahan di sini, tetap seperti yang Anda miliki)
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
