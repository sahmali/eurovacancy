//// Service section
var serviceItem=$(".service-item");
serviceItem.hover(function(){
    serviceItem.removeClass("active");
    $(this).addClass("active");
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})