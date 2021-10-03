$('.owl-carousel-1').owlCarousel({
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


$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
});

baguetteBox.run('.tz-gallery');


AOS.init();

AOS.init({
    duration: 900
});
