$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    dots:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


baguetteBox.run('.tz-gallery');


AOS.init();

AOS.init({
    duration: 900
});
