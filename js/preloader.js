/*"use strict";
jQuery(document).ready(function ($) {
*/
//Pour le  Preloader

   /* $(window).load(function () {
        $("#loading").fadeOut(200);
    });*/
	jQuery(window).load(function() { // S'assurer que le site est chargé en entier
    $('#status').fadeOut(); // d'abord fade out l'animation du loading 
    $('#preloader').delay(100).fadeOut('slow'); //ensuite  fade out la DIV blanche qui couvre le site web.
    $('body').delay(100).css({
        'overflow': 'visible'
    });
})

//---------------------------------------------
// Bouton Scroll up to top
//---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



    //Fin

//});













