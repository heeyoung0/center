$(function(){
    $('.btn-menu').on('click',function(){
        $('.btn-menu').toggleClass('on')
        $('.menu-list').fadeToggle();
})
})

var swiper = new Swiper(".Detail-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
    enabled: true,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});