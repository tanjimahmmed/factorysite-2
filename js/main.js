(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
    $(".homepage_slides").owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        dots:false,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        mouseDrag:false,
        touchDrag:false,
    });

    $(".homepage_slides").on("translate.owl.carousel", function(){
        $(".single_slide_item h2").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slide_item p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slide_item .slide_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".homepage_slides").on("translated.owl.carousel", function(){
        $(".single_slide_item h2").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slide_item p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slide_item .slide_btn").addClass("animated fadeInDown").css("opacity", "1");
    });
    

    $(".gallery_light_box").magnificPopup({
        type:'image',
        gallery: {
            enabled:true
          }
    });

    new WOW().init();

    $("ul#navigation").slicknav({
        prependTo:".responsive_menu_wrap"
    })
     // -- End work -- //
            
    });

   jQuery(window).load(function(){
     $(".factory_site_preloader_wrap").fadeOut(5000);
     $(".factory_side_preloader_wrap").fadeOut(8000);
   });

}(jQuery));	