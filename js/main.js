// Attivazione del menu al click dell'hamburger

$('.fa-bars').click(function(){
    $('.hamburger-menu').addClass('active');
}); 

$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
}); // Riattivo pulsante per chiudere menu
