$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        dots: false,
        loop: true,
        nav: true,
        smartSpeed: 700,
        margin: 30,
        navText: ["<img src='icons/prev.svg'>", "<img src='icons/next.svg'>"]
    });
// nav menu
    $('.nav__ul_li').on('click', function () {
        $('.nav__ul_li').removeClass('active');
        $(this).addClass('active');
    });
    $('.nav-size').on('click', function () {
        $('.nav-size').removeClass('active');
        $(this).addClass('active');
    });
    $('.wrapper__block').on('click', function () {
        $('.wrapper__block').removeClass('active');
        $(this).addClass('active');
    });
});