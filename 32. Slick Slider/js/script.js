const swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    slidesOffsetBefore: 140,
    slidesOffsetAfter: 140,
    spaceBetween: 44,
    slidesPerView: 4,

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});