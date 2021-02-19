//// Service section
var serviceItem=$(".service-item");
serviceItem.hover(function(){
    serviceItem.removeClass("active");
    $(this).addClass("active");
});


$('#our-team-section .owl-carousel').owlCarousel({
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
});
$('#slider-section .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoPlay:true,
    navClass:["slider-prev" , "slider-next"],
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
})
$('#brands-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


  AOS.init();


///navbar

const vegan = document.querySelector(".vegan");
const navList = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

vegan.addEventListener('click',()=>{
    navList.classList.toggle('open');
    links.forEach(link=>{
        link.classList.toggle('fade');
    })
})
