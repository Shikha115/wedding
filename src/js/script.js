$(document).ready(function() {

    var owl = $('.sec_1 .owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'fadeOut'
    });

});

$(() => {
    $(document).scroll(() => {
        var scroll = $(this).scrollTop();
        $('.logo').toggleClass('logo_bg', scroll > 100);
        if (scroll > 100) {
            $('.logo2').css({
                "display": "none"
            });
            $('.logo1').css({
                "display": "block"
            });
        } else {
            $('.logo2').css({
                "display": "block"
            });
            $('.logo1').css({
                "display": "none"
            });
        }
    });
});