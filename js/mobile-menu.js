const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-button');
const mobileBtnClose = document.querySelector('.mobile-menu__close-btn')
const mobileBtnClose1 = document.querySelector(".mob-close1");
const mobileBtnClose2 = document.querySelector(".mob-close2");
const mobileBtnClose3 = document.querySelector(".mob-close3");
const mobileBtnClose4 = document.querySelector(".mob-close4");

const toggleMobile = () => mobileMenu.classList.toggle('outpage');

mobileBtnOpen.addEventListener('click', toggleMobile);
mobileBtnClose.addEventListener('click', toggleMobile);
mobileBtnClose1.addEventListener('click', toggleMobile);
mobileBtnClose2.addEventListener('click', toggleMobile);
mobileBtnClose3.addEventListener('click', toggleMobile);
mobileBtnClose4.addEventListener('click', toggleMobile);