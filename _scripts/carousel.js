/*
  creates a carousel.
*/

$(document).ready(function(){
    $('.publication-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,

    });
});

