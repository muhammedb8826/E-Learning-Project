const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.getElementById('nav');
const mobileMenuBg = document.querySelector('.mobile-menu-bg');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change');
  nav.classList.toggle('change');
  mobileMenuBg.classList.toggle('change');
});
