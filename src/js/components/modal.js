/* eslint-disable no-unused-vars */
$('.js-btn-reg').click(()=>{
    $.fancybox.close();
    $.fancybox.open({
        src: '#js-modal-reg',
        type: 'inline',
        touch: false,
        smallBtn : false,
    });
});
$('.js-btn-log').click(()=>{
    $.fancybox.close();
    $.fancybox.open({
        src: '#js-modal-log',
        type: 'inline',
        touch: false,
        smallBtn : false,
    });
});
