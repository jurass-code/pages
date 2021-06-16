$('.js-dropDown').click(function () {
    $('.js-dropDown-menu', this).slideToggle(100, function () {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
});

$('.js-btn-mobile-menu').click(function () {
    $('.js-mobileMenu').slideToggle(300, function () {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
});