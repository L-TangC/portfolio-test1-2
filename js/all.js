$(document).ready(function () {
    $('.contact-buttom').click(function (e) { 
        e.preventDefault();
        $('.contact').fadeToggle(200);
    });
    $('.cancel_buttom').click(function (e) { 
        e.preventDefault();
        $('.contact').fadeOut(200);
    });
});
$(window).scroll(function () { 
    parallax();
})
function parallax(){
    var wScroll = $(window).scrollTop();
    $('.moodapp').css('background-position','center '+(wScroll)+'px')

}
