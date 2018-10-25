// Smooth scroll for the menu
$('.navbar-nav a').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            var top_space = 0;

            if ($('#header').length) {
                top_space = $('#header').outerHeight();

                if( ! $('#header').hasClass('header-fixed') ) {
                    top_space = top_space - 20;
                }
            }

            $('html, body').animate({
                scrollTop: target.offset().top - top_space
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
            return false;
        }
    }
});