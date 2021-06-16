/*global Swiper*/
/*eslint no-undef: "error"*/
new Swiper('.swiperTwo-container', {

    breakpoints: {
        300: {
            slidesPerView: 1.3,
        },
        475: {
            slidesPerView: 1.7,
        },
        650: {
            slidesPerView: 2.6,
        },
        900: {
            slidesPerView: 3.6,
        },
        1200: {
            slidesPerView: 4.3,
        },
        1700: {
            slidesPerView: 6.9,
        }
    },
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '#solution__nav-next',
        prevEl: '#solution__nav-prev'
    }
});
new Swiper('.swiper-container', {
    breakpoints: {
        320:{
            slidesPerView: 1.2,
            centeredSlides: true
        },
        450:{
            slidesPerView: 1.9
        },
        950: {
            slidesPerView: 2.9
        },
        1000: {
            slidesPerView: 1.9,
        },
        1300: {
            slidesPerView: 2.4,
        },
        1700: {
            slidesPerView: 3.1,
        },
    },
    centeredSlides: true,
    navigation: {
        nextEl: '#reviews__nav-next',
        prevEl: '#reviews__nav-prev'
    },
});