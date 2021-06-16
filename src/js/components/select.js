$('.js-select-item').click(function (e) {
    $(this)
        .closest('.js-dropDown-menu')
        .siblings('.js-active-select-box')
        .children('.js-active-select')
        .text(e.target.textContent);
});