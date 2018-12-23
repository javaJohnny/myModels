$(document).ready(() => {
        $('.menu-icon').on('click', () => {
            $('nav ul').toggleClass('showing');

        });
});

    $(window).on('scroll', () => {
        if($(window).scrollTop()) {
            $('nav').addClass('black');
        }else {
            $('nav').removeClass('black');
        }
    });
