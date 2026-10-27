const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
}
if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
document.querySelectorAll('.primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    dropdown?.classList.remove('open');
    dropdownToggle?.setAttribute('aria-expanded', 'false');
  });
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.addEventListener('click', event => {
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
    dropdownToggle?.setAttribute('aria-expanded', 'false');
  }
});
