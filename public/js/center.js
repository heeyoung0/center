$(function(){
    $('.btn-menu').on('click',function(){
        $('.btn-menu').toggleClass('on');
        $('.menu-list').fadeToggle();
})
})

$(function(){
    $('.intro').delay(3000).fadeOut(500)

    $('.first-text').delay(300).animate({
        opacity : 1,
    },800, function(){
        $('.second-text').delay(600).animate({
            opacity :1,
        })
    });
});