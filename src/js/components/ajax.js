/* eslint-disable no-unused-vars */
function submitHandler() {
    $.fancybox.close();
    const $form = $('#log');
    console.log($form.attr('action'));
    $.ajax($form.attr('action'))
        .done(data => {
            if (data.status) {
                $.fancybox.open({
                    src: '#js-modal',
                    type: 'inline',
                    touch: true,
                    smallBtn : false,
                });
                $form.trigger('reset');
            } 
        })
        .fail(err => {

        });

}