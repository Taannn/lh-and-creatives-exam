const menu = document.getElementById('menu');
const close = document.querySelector('#menu i');
const nav = document.querySelector('.header-mobile');
let toggle = false;

menu.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle){
    close.classList.replace('fa-bars', 'fa-xmark');
    nav.classList.remove('hidden');
    nav.classList.add('show');
    menu.setAttribute('aria-label', 'Close menu');
    nav.setAttribute('aria-hidden', 'false');
  } else {
    close.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.remove('show');
    nav.classList.add('hidden');
    menu.setAttribute('aria-label', 'Open menu');
    nav.setAttribute('aria-hidden', 'true');
  }
});
