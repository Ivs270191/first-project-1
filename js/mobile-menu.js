const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-button');
const mobileBtnClose = document.querySelector('.mobile-menu__close-btn');

const toggleMobile = () => mobileMenu.classList.toggle('outpage');

mobileBtnOpen.addEventListener('click', toggleMobile);
mobileBtnClose.addEventListener('click', toggleMobile);