$(function() {

// HEADER ====================================================

let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

let nav = $("#nav");
let navToggle = $("#navToggle");

checkScroll(scrollPos, introH);

$(window).on("scroll resize", function(){

    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);

});

function checkScroll(scrollPos, introH) {

    if( scrollPos >= introH) {

        header.addClass("fixed");

    } else {

        header.removeClass("fixed");

    }

    }

    // SMOOTH SCROLL(ПЛАВНЫЙ СКРОЛ) ====================================================

    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({

            scrollTop: elementOffset 

        }, 1000);

    });

    // NAV TOGGLE(БУРГЕР МЕНЮ) ====================================================

    navToggle.on("click", function(event){

        event.preventDefault();

        nav.toggleClass("show");

    });

    // NAV TOGGLE(БУРГЕР МЕНЮ) ====================================================

    let slider = $("#introSlider");

    slider.slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false, //стрелочки
        dots:true // точки .slick-dots
    })
});