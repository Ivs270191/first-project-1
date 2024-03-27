const swiper = new Swiper('.swiper-container', {
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1280: {
            slidesPerView: 3,
        },

    },

    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
    },

    navigation: {
        nextEl: '.arrow-button__after',
        prevEl: '.arrow-button',

    }

});