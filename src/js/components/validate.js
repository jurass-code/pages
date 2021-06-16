/*global submitHandler*/
/*eslint no-undef: "error"*/
$('#log').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        }
    },
    messages: {
        email: {
            email: 'Email введен не корректно',
            required: 'Это поле обязательно для заполнения'
        },
        password: {
            minlength: 'Не менее 8 символов',
            required: 'Это поле обязательно для заполнения'
        }
    },
    submitHandler: function () {
        $('#log').submit(e => e.preventDefault());
        submitHandler();
    }
});
$('#reg').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        },
        name: {
            required: true,
            minlength: 2,
            validName: true
        }
    },
    messages: {
        email: {
            email: 'Email введен не корректно',
            required: 'Это поле обязательно для заполнения'
        },
        password: {
            minlength: 'Не менее 8 символов',
            required: 'Это поле обязательно для заполнения'
        },
        name: {
            minlength: 'Не менее 2 символов',
            required: 'Это поле обязательно для заполнения',
            validName: 'Недопустимое имя'
        }
    },
    submitHandler: function () {
        $('#reg').submit(e => e.preventDefault());
        submitHandler();
    }
});
$.validator.addMethod('validName', function (val) {
    return /[A-ZА-Я]{1}|[a-zа-я]/.test(val);
});