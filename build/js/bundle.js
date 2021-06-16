"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

document.addEventListener('DOMContentLoaded', function () {
  /*global Swiper*/

  /*eslint no-undef: "error"*/
  new Swiper('.swiperTwo-container', {
    breakpoints: {
      300: {
        slidesPerView: 1.3
      },
      475: {
        slidesPerView: 1.7
      },
      650: {
        slidesPerView: 2.6
      },
      900: {
        slidesPerView: 3.6
      },
      1200: {
        slidesPerView: 4.3
      },
      1700: {
        slidesPerView: 6.9
      }
    },
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '#solution__nav-next',
      prevEl: '#solution__nav-prev'
    }
  });
  new Swiper('.swiper-container', {
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        centeredSlides: true
      },
      450: {
        slidesPerView: 1.9
      },
      950: {
        slidesPerView: 2.9
      },
      1000: {
        slidesPerView: 1.9
      },
      1300: {
        slidesPerView: 2.4
      },
      1700: {
        slidesPerView: 3.1
      }
    },
    centeredSlides: true,
    navigation: {
      nextEl: '#reviews__nav-next',
      prevEl: '#reviews__nav-prev'
    }
  });
  /* eslint-disable no-unused-vars */

  $('.js-btn-reg').click(function () {
    $.fancybox.close();
    $.fancybox.open({
      src: '#js-modal-reg',
      type: 'inline',
      touch: false,
      smallBtn: false
    });
  });
  $('.js-btn-log').click(function () {
    $.fancybox.close();
    $.fancybox.open({
      src: '#js-modal-log',
      type: 'inline',
      touch: false,
      smallBtn: false
    });
  });
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
  $('.js-select-item').click(function (e) {
    $(this).closest('.js-dropDown-menu').siblings('.js-active-select-box').children('.js-active-select').text(e.target.textContent);
  });
  /*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
   * https://jqueryvalidation.org/
   * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */

  !function (a) {
    'function' == typeof define && define.amd ? define(['jquery'], a) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require('jquery')) : a(jQuery);
  }(function (a) {
    a.extend(a.fn, {
      validate: function validate(b) {
        if (!this.length) return void (b && b.debug && window.console && console.warn('Nothing selected, can\'t validate, returning nothing.'));
        var c = a.data(this[0], 'validator');
        return c ? c : (this.attr('novalidate', 'novalidate'), c = new a.validator(b, this[0]), a.data(this[0], 'validator', c), c.settings.onsubmit && (this.on('click.validate', ':submit', function (b) {
          c.submitButton = b.currentTarget, a(this).hasClass('cancel') && (c.cancelSubmit = !0), void 0 !== a(this).attr('formnovalidate') && (c.cancelSubmit = !0);
        }), this.on('submit.validate', function (b) {
          function d() {
            var d, e;
            return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a('<input type=\'hidden\'/>').attr('name', c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
          }

          return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
        })), c);
      },
      valid: function valid() {
        var b, c, d;
        return a(this[0]).is('form') ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
          b = c.element(this) && b, b || (d = d.concat(c.errorList));
        }), c.errorList = d), b;
      },
      rules: function rules(b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j = this[0],
            k = 'undefined' != typeof this.attr('contenteditable') && 'false' !== this.attr('contenteditable');

        if (null != j && (!j.form && k && (j.form = this.closest('form')[0], j.name = this.attr('name')), null != j.form)) {
          if (b) switch (d = a.data(j.form, 'validator').settings, e = d.rules, f = a.validator.staticRules(j), b) {
            case 'add':
              a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
              break;

            case 'remove':
              return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
                i[b] = f[b], delete f[b];
              }), i) : (delete e[j.name], f);
          }
          return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
            required: h
          }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
            remote: h
          })), g;
        }
      }
    });

    var b = function b(a) {
      return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };

    a.extend(a.expr.pseudos || a.expr[':'], {
      blank: function blank(c) {
        return !b('' + a(c).val());
      },
      filled: function filled(c) {
        var d = a(c).val();
        return null !== d && !!b('' + d);
      },
      unchecked: function unchecked(b) {
        return !a(b).prop('checked');
      }
    }), a.validator = function (b, c) {
      this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
    }, a.validator.format = function (b, c) {
      return 1 === arguments.length ? function () {
        var c = a.makeArray(arguments);
        return c.unshift(b), a.validator.format.apply(this, c);
      } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
        b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function () {
          return c;
        });
      }), b);
    }, a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: 'error',
        pendingClass: 'pending',
        validClass: 'valid',
        errorElement: 'label',
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ':hidden',
        ignoreTitle: !1,
        onfocusin: function onfocusin(a) {
          this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function onfocusout(a) {
          this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
        },
        onkeyup: function onkeyup(b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          9 === c.which && '' === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
        },
        onclick: function onclick(a) {
          a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function highlight(b, c, d) {
          'radio' === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function unhighlight(b, c, d) {
          'radio' === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
        }
      },
      setDefaults: function setDefaults(b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: 'This field is required.',
        remote: 'Please fix this field.',
        email: 'Please enter a valid email address.',
        url: 'Please enter a valid URL.',
        date: 'Please enter a valid date.',
        dateISO: 'Please enter a valid date (ISO).',
        number: 'Please enter a valid number.',
        digits: 'Please enter only digits.',
        equalTo: 'Please enter the same value again.',
        maxlength: a.validator.format('Please enter no more than {0} characters.'),
        minlength: a.validator.format('Please enter at least {0} characters.'),
        rangelength: a.validator.format('Please enter a value between {0} and {1} characters long.'),
        range: a.validator.format('Please enter a value between {0} and {1}.'),
        max: a.validator.format('Please enter a value less than or equal to {0}.'),
        min: a.validator.format('Please enter a value greater than or equal to {0}.'),
        step: a.validator.format('Please enter a multiple of {0}.')
      },
      autoCreateRanges: !1,
      prototype: {
        init: function init() {
          function b(b) {
            var c = 'undefined' != typeof a(this).attr('contenteditable') && 'false' !== a(this).attr('contenteditable');

            if (!this.form && c && (this.form = a(this).closest('form')[0], this.name = a(this).attr('name')), d === this.form) {
              var e = a.data(this.form, 'validator'),
                  f = 'on' + b.type.replace(/^validate/, ''),
                  g = e.settings;
              g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
            }
          }

          this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var c,
              d = this.currentForm,
              e = this.groups = {};
          a.each(this.settings.groups, function (b, c) {
            'string' == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
              e[c] = b;
            });
          }), c = this.settings.rules, a.each(c, function (b, d) {
            c[b] = a.validator.normalizeRule(d);
          }), a(this.currentForm).on('focusin.validate focusout.validate keyup.validate', ':text, [type=\'password\'], [type=\'file\'], select, textarea, [type=\'number\'], [type=\'search\'], [type=\'tel\'], [type=\'url\'], [type=\'email\'], [type=\'datetime\'], [type=\'date\'], [type=\'month\'], [type=\'week\'], [type=\'time\'], [type=\'datetime-local\'], [type=\'range\'], [type=\'color\'], [type=\'radio\'], [type=\'checkbox\'], [contenteditable], [type=\'button\']', b).on('click.validate', 'select, option, [type=\'radio\'], [type=\'checkbox\']', b), this.settings.invalidHandler && a(this.currentForm).on('invalid-form.validate', this.settings.invalidHandler);
        },
        form: function form() {
          return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler('invalid-form', [this]), this.showErrors(), this.valid();
        },
        checkForm: function checkForm() {
          this.prepareForm();

          for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
            this.check(b[a]);
          }

          return this.valid();
        },
        element: function element(b) {
          var c,
              d,
              e = this.clean(b),
              f = this.validationTargetFor(e),
              g = this,
              h = !0;
          return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
            b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
          }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr('aria-invalid', !c)), h;
        },
        showErrors: function showErrors(b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
              return {
                message: a,
                element: c.findByName(b)[0]
              };
            }), this.successList = a.grep(this.successList, function (a) {
              return !(a.name in b);
            });
          }

          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
        },
        resetForm: function resetForm() {
          a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
          var b = this.elements().removeData('previousValue').removeAttr('aria-invalid');
          this.resetElements(b);
        },
        resetElements: function resetElements(a) {
          var b;
          if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
            this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ''), this.findByName(a[b].name).removeClass(this.settings.validClass);
          } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        },
        numberOfInvalids: function numberOfInvalids() {
          return this.objectLength(this.invalid);
        },
        objectLength: function objectLength(a) {
          var b,
              c = 0;

          for (b in a) {
            void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
          }

          return c;
        },
        hideErrors: function hideErrors() {
          this.hideThese(this.toHide);
        },
        hideThese: function hideThese(a) {
          a.not(this.containers).text(''), this.addWrapper(a).hide();
        },
        valid: function valid() {
          return 0 === this.size();
        },
        size: function size() {
          return this.errorList.length;
        },
        focusInvalid: function focusInvalid() {
          if (this.settings.focusInvalid) try {
            a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(':visible').trigger('focus').trigger('focusin');
          } catch (b) {}
        },
        findLastActive: function findLastActive() {
          var b = this.lastActive;
          return b && 1 === a.grep(this.errorList, function (a) {
            return a.element.name === b.name;
          }).length && b;
        },
        elements: function elements() {
          var b = this,
              c = {};
          return a(this.currentForm).find('input, select, textarea, [contenteditable]').not(':submit, :reset, :image, :disabled').not(this.settings.ignore).filter(function () {
            var d = this.name || a(this).attr('name'),
                e = 'undefined' != typeof a(this).attr('contenteditable') && 'false' !== a(this).attr('contenteditable');
            return !d && b.settings.debug && window.console && console.error('%o has no name assigned', this), e && (this.form = a(this).closest('form')[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
          });
        },
        clean: function clean(b) {
          return a(b)[0];
        },
        errors: function errors() {
          var b = this.settings.errorClass.split(' ').join('.');
          return a(this.settings.errorElement + '.' + b, this.errorContext);
        },
        resetInternals: function resetInternals() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
        },
        reset: function reset() {
          this.resetInternals(), this.currentElements = a([]);
        },
        prepareForm: function prepareForm() {
          this.reset(), this.toHide = this.errors().add(this.containers);
        },
        prepareElement: function prepareElement(a) {
          this.reset(), this.toHide = this.errorsFor(a);
        },
        elementValue: function elementValue(b) {
          var c,
              d,
              e = a(b),
              f = b.type,
              g = 'undefined' != typeof e.attr('contenteditable') && 'false' !== e.attr('contenteditable');
          return 'radio' === f || 'checkbox' === f ? this.findByName(b.name).filter(':checked').val() : 'number' === f && 'undefined' != typeof b.validity ? b.validity.badInput ? 'NaN' : e.val() : (c = g ? e.text() : e.val(), 'file' === f ? 'C:\\fakepath\\' === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf('/'), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf('\\'), d >= 0 ? c.substr(d + 1) : c)) : 'string' == typeof c ? c.replace(/\r/g, '') : c);
        },
        check: function check(b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
              d,
              e,
              f,
              g = a(b).rules(),
              h = a.map(g, function (a, b) {
            return b;
          }).length,
              i = !1,
              j = this.elementValue(b);
          'function' == typeof g.normalizer ? f = g.normalizer : 'function' == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

          for (d in g) {
            e = {
              method: d,
              parameters: g[d]
            };

            try {
              if (c = a.validator.methods[d].call(this, j, b, e.parameters), 'dependency-mismatch' === c && 1 === h) {
                i = !0;
                continue;
              }

              if (i = !1, 'pending' === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (k) {
              throw this.settings.debug && window.console && console.log('Exception occurred when checking element ' + b.id + ', check the \'' + e.method + '\' method.', k), k instanceof TypeError && (k.message += '.  Exception occurred when checking element ' + b.id + ', check the \'' + e.method + '\' method.'), k;
            }
          }

          if (!i) return this.objectLength(g) && this.successList.push(b), !0;
        },
        customDataMessage: function customDataMessage(b, c) {
          return a(b).data('msg' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data('msg');
        },
        customMessage: function customMessage(a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function findDefined() {
          for (var a = 0; a < arguments.length; a++) {
            if (void 0 !== arguments[a]) return arguments[a];
          }
        },
        defaultMessage: function defaultMessage(b, c) {
          'string' == typeof c && (c = {
            method: c
          });
          var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], '<strong>Warning: No message defined for ' + b.name + '</strong>'),
              e = /\$?\{(\d+)\}/g;
          return 'function' == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, '{$1}'), c.parameters)), d;
        },
        formatAndAdd: function formatAndAdd(a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({
            message: c,
            element: a,
            method: b.method
          }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
        },
        addWrapper: function addWrapper(a) {
          return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
        },
        defaultShowErrors: function defaultShowErrors() {
          var a, b, c;

          for (a = 0; this.errorList[a]; a++) {
            c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
          }

          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
            this.showLabel(this.successList[a]);
          }
          if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
            this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
          }
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
        },
        validElements: function validElements() {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function invalidElements() {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function showLabel(b, c) {
          var d,
              e,
              f,
              g,
              h = this.errorsFor(b),
              i = this.idOrName(b),
              j = a(b).attr('aria-describedby');
          h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a('<' + this.settings.errorElement + '>').attr('id', i + '-error').addClass(this.settings.errorClass).html(c || ''), d = h, this.settings.wrapper && (d = h.hide().show().wrap('<' + this.settings.wrapper + '/>').parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is('label') ? h.attr('for', i) : 0 === h.parents('label[for=\'' + this.escapeCssMeta(i) + '\']').length && (f = h.attr('id'), j ? j.match(new RegExp('\\b' + this.escapeCssMeta(f) + '\\b')) || (j += ' ' + f) : j = f, a(b).attr('aria-describedby', j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
            c === e && a('[name=\'' + g.escapeCssMeta(b) + '\']', g.currentForm).attr('aria-describedby', h.attr('id'));
          })))), !c && this.settings.success && (h.text(''), 'string' == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
        },
        errorsFor: function errorsFor(b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
              d = a(b).attr('aria-describedby'),
              e = 'label[for=\'' + c + '\'], label[for=\'' + c + '\'] *';
          return d && (e = e + ', #' + this.escapeCssMeta(d).replace(/\s+/g, ', #')), this.errors().filter(e);
        },
        escapeCssMeta: function escapeCssMeta(a) {
          return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, '\\$1');
        },
        idOrName: function idOrName(a) {
          return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
        },
        validationTargetFor: function validationTargetFor(b) {
          return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
        },
        checkable: function checkable(a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function findByName(b) {
          return a(this.currentForm).find('[name=\'' + this.escapeCssMeta(b) + '\']');
        },
        getLength: function getLength(b, c) {
          switch (c.nodeName.toLowerCase()) {
            case 'select':
              return a('option:selected', c).length;

            case 'input':
              if (this.checkable(c)) return this.findByName(c.name).filter(':checked').length;
          }

          return b.length;
        },
        depend: function depend(a, b) {
          return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
        },
        dependTypes: {
          'boolean': function boolean(a) {
            return a;
          },
          string: function string(b, c) {
            return !!a(b, c.form).length;
          },
          'function': function _function(a, b) {
            return a(b);
          }
        },
        optional: function optional(b) {
          var c = this.elementValue(b);
          return !a.validator.methods.required.call(this, c, b) && 'dependency-mismatch';
        },
        startRequest: function startRequest(b) {
          this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
        },
        stopRequest: function stopRequest(b, c) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a('input:hidden[name=\'' + this.submitButton.name + '\']', this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler('invalid-form', [this]), this.formSubmitted = !1);
        },
        previousValue: function previousValue(b, c) {
          return c = 'string' == typeof c && c || 'remote', a.data(b, 'previousValue') || a.data(b, 'previousValue', {
            old: null,
            valid: !0,
            message: this.defaultMessage(b, {
              method: c
            })
          });
        },
        destroy: function destroy() {
          this.resetForm(), a(this.currentForm).off('.validate').removeData('validator').find('.validate-equalTo-blur').off('.validate-equalTo').removeClass('validate-equalTo-blur').find('.validate-lessThan-blur').off('.validate-lessThan').removeClass('validate-lessThan-blur').find('.validate-lessThanEqual-blur').off('.validate-lessThanEqual').removeClass('validate-lessThanEqual-blur').find('.validate-greaterThanEqual-blur').off('.validate-greaterThanEqual').removeClass('validate-greaterThanEqual-blur').find('.validate-greaterThan-blur').off('.validate-greaterThan').removeClass('validate-greaterThan-blur');
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function addClassRules(b, c) {
        b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
      },
      classRules: function classRules(b) {
        var c = {},
            d = a(b).attr('class');
        return d && a.each(d.split(' '), function () {
          this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
        }), c;
      },
      normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
        /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && 'range' !== b && (a[c] = !0);
      },
      attributeRules: function attributeRules(b) {
        var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute('type');

        for (c in a.validator.methods) {
          'required' === c ? (d = b.getAttribute(c), '' === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
        }

        return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
      },
      dataRules: function dataRules(b) {
        var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute('type');

        for (c in a.validator.methods) {
          d = f.data('rule' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), '' === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
        }

        return e;
      },
      staticRules: function staticRules(b) {
        var c = {},
            d = a.data(b.form, 'validator');
        return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
      },
      normalizeRules: function normalizeRules(b, c) {
        return a.each(b, function (d, e) {
          if (e === !1) return void delete b[d];

          if (e.param || e.depends) {
            var f = !0;

            switch (_typeof(e.depends)) {
              case 'string':
                f = !!a(e.depends, c.form).length;
                break;

              case 'function':
                f = e.depends.call(c, c);
            }

            f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, 'validator').resetElements(a(c)), delete b[d]);
          }
        }), a.each(b, function (a, d) {
          b[a] = 'function' == typeof d && 'normalizer' !== a ? d(c) : d;
        }), a.each(['minlength', 'maxlength'], function () {
          b[this] && (b[this] = Number(b[this]));
        }), a.each(['rangelength', 'range'], function () {
          var a;
          b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : 'string' == typeof b[this] && (a = b[this].replace(/[\[\]]/g, '').split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]));
        }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
      },
      normalizeRule: function normalizeRule(b) {
        if ('string' == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }), b = c;
        }

        return b;
      },
      addMethod: function addMethod(b, c, d) {
        a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function required(b, c, d) {
          if (!this.depend(d, c)) return 'dependency-mismatch';

          if ('select' === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }

          return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
        },
        email: function email(a, b) {
          return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
        },
        url: function url(a, b) {
          return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
        },
        date: function () {
          var a = !1;
          return function (b, c) {
            return a || (a = !0, this.settings.debug && window.console && console.warn('The `date` method is deprecated and will be removed in version \'2.0.0\'.\nPlease don\'t use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.')), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
          };
        }(),
        dateISO: function dateISO(a, b) {
          return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
        },
        number: function number(a, b) {
          return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
        },
        digits: function digits(a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function minlength(a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d >= c;
        },
        maxlength: function maxlength(a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d <= c;
        },
        rangelength: function rangelength(a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d >= c[0] && d <= c[1];
        },
        min: function min(a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function max(a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function range(a, b, c) {
          return this.optional(b) || a >= c[0] && a <= c[1];
        },
        step: function step(b, c, d) {
          var e,
              f = a(c).attr('type'),
              g = 'Step attribute on input type ' + f + ' is not supported.',
              h = ['text', 'number', 'range'],
              i = new RegExp('\\b' + f + '\\b'),
              j = f && !i.test(h.join()),
              k = function k(a) {
            var b = ('' + a).match(/(?:\.(\d+))?$/);
            return b && b[1] ? b[1].length : 0;
          },
              l = function l(a) {
            return Math.round(a * Math.pow(10, e));
          },
              m = !0;

          if (j) throw new Error(g);
          return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
        },
        equalTo: function equalTo(b, c, d) {
          var e = a(d);
          return this.settings.onfocusout && e.not('.validate-equalTo-blur').length && e.addClass('validate-equalTo-blur').on('blur.validate-equalTo', function () {
            a(c).valid();
          }), b === e.val();
        },
        remote: function remote(b, c, d, e) {
          if (this.optional(c)) return 'dependency-mismatch';
          e = 'string' == typeof e && e || 'remote';
          var f,
              g,
              h,
              i = this.previousValue(c, e);
          return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = 'string' == typeof d && {
            url: d
          } || d, h = a.param(a.extend({
            data: b
          }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
            mode: 'abort',
            port: 'validate' + c.name,
            dataType: 'json',
            data: g,
            context: f.currentForm,
            success: function success(a) {
              var d,
                  g,
                  h,
                  j = a === !0 || 'true' === a;
              f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                method: e,
                parameters: b
              }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
            }
          }, d)), 'pending');
        }
      }
    });
    var c,
        d = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, c) {
      var e = a.port;
      'abort' === a.mode && (d[e] && d[e].abort(), d[e] = c);
    }) : (c = a.ajax, a.ajax = function (b) {
      var e = ('mode' in b ? b : a.ajaxSettings).mode,
          f = ('port' in b ? b : a.ajaxSettings).port;
      return 'abort' === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments);
    }), a;
  });
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
    submitHandler: function submitHandler() {
      $('#log').submit(function (e) {
        return e.preventDefault();
      });

      _submitHandler();
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
    submitHandler: function submitHandler() {
      $('#reg').submit(function (e) {
        return e.preventDefault();
      });

      _submitHandler();
    }
  });
  $.validator.addMethod('validName', function (val) {
    return /[A-ZА-Я]{1}|[a-zа-я]/.test(val);
  });
  /* eslint-disable no-unused-vars */

  function _submitHandler() {
    $.fancybox.close();
    var $form = $('#log');
    console.log($form.attr('action'));
    $.ajax($form.attr('action')).done(function (data) {
      if (data.status) {
        $.fancybox.open({
          src: '#js-modal',
          type: 'inline',
          touch: true,
          smallBtn: false
        });
        $form.trigger('reset');
      }
    }).fail(function (err) {});
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlN3aXBlciIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImNlbnRlcmVkU2xpZGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIiQiLCJjbGljayIsImZhbmN5Ym94IiwiY2xvc2UiLCJvcGVuIiwic3JjIiwidHlwZSIsInRvdWNoIiwic21hbGxCdG4iLCJzbGlkZVRvZ2dsZSIsImNzcyIsInJlbW92ZUF0dHIiLCJlIiwiY2xvc2VzdCIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCJ0ZXh0IiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJhIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnkiLCJleHRlbmQiLCJmbiIsInZhbGlkYXRlIiwiYiIsImxlbmd0aCIsImRlYnVnIiwid2luZG93IiwiY29uc29sZSIsIndhcm4iLCJjIiwiZGF0YSIsImF0dHIiLCJ2YWxpZGF0b3IiLCJzZXR0aW5ncyIsIm9uc3VibWl0Iiwib24iLCJzdWJtaXRCdXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJjYW5jZWxTdWJtaXQiLCJkIiwic3VibWl0SGFuZGxlciIsImZvcm1TdWJtaXR0ZWQiLCJuYW1lIiwidmFsIiwiYXBwZW5kVG8iLCJjdXJyZW50Rm9ybSIsImNhbGwiLCJyZW1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJwZW5kaW5nUmVxdWVzdCIsImZvY3VzSW52YWxpZCIsInZhbGlkIiwiaXMiLCJlYWNoIiwiZWxlbWVudCIsImNvbmNhdCIsImVycm9yTGlzdCIsInJ1bGVzIiwiZiIsImciLCJoIiwiaSIsImoiLCJrIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJzcGxpdCIsIm5vcm1hbGl6ZVJ1bGVzIiwiY2xhc3NSdWxlcyIsImF0dHJpYnV0ZVJ1bGVzIiwiZGF0YVJ1bGVzIiwicmVxdWlyZWQiLCJyZW1vdGUiLCJyZXBsYWNlIiwiZXhwciIsInBzZXVkb3MiLCJibGFuayIsImZpbGxlZCIsInVuY2hlY2tlZCIsInByb3AiLCJkZWZhdWx0cyIsImluaXQiLCJmb3JtYXQiLCJhcmd1bWVudHMiLCJtYWtlQXJyYXkiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJjb25zdHJ1Y3RvciIsIkFycmF5Iiwic2xpY2UiLCJSZWdFeHAiLCJncm91cHMiLCJlcnJvckNsYXNzIiwicGVuZGluZ0NsYXNzIiwidmFsaWRDbGFzcyIsImVycm9yRWxlbWVudCIsImZvY3VzQ2xlYW51cCIsImVycm9yQ29udGFpbmVyIiwiZXJyb3JMYWJlbENvbnRhaW5lciIsImlnbm9yZSIsImlnbm9yZVRpdGxlIiwib25mb2N1c2luIiwibGFzdEFjdGl2ZSIsInVuaGlnaGxpZ2h0IiwiaGlkZVRoZXNlIiwiZXJyb3JzRm9yIiwib25mb2N1c291dCIsImNoZWNrYWJsZSIsInN1Ym1pdHRlZCIsIm9wdGlvbmFsIiwib25rZXl1cCIsIndoaWNoIiwiZWxlbWVudFZhbHVlIiwiaW5BcnJheSIsImtleUNvZGUiLCJpbnZhbGlkIiwib25jbGljayIsInBhcmVudE5vZGUiLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNldERlZmF1bHRzIiwiZW1haWwiLCJ1cmwiLCJkYXRlIiwiZGF0ZUlTTyIsIm51bWJlciIsImRpZ2l0cyIsImVxdWFsVG8iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJyYW5nZWxlbmd0aCIsInJhbmdlIiwibWF4IiwibWluIiwic3RlcCIsImF1dG9DcmVhdGVSYW5nZXMiLCJwcm90b3R5cGUiLCJsYWJlbENvbnRhaW5lciIsImVycm9yQ29udGV4dCIsImNvbnRhaW5lcnMiLCJhZGQiLCJ2YWx1ZUNhY2hlIiwicGVuZGluZyIsInJlc2V0IiwiaW52YWxpZEhhbmRsZXIiLCJjaGVja0Zvcm0iLCJlcnJvck1hcCIsInRyaWdnZXJIYW5kbGVyIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwicHVzaCIsIm51bWJlck9mSW52YWxpZHMiLCJ0b0hpZGUiLCJtYXAiLCJtZXNzYWdlIiwic3VjY2Vzc0xpc3QiLCJncmVwIiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVtb3ZlRGF0YSIsInJlc2V0RWxlbWVudHMiLCJvYmplY3RMZW5ndGgiLCJub3QiLCJhZGRXcmFwcGVyIiwiaGlkZSIsInNpemUiLCJmaW5kTGFzdEFjdGl2ZSIsImZpbHRlciIsInRyaWdnZXIiLCJmaW5kIiwiZXJyb3IiLCJlcnJvcnMiLCJqb2luIiwicmVzZXRJbnRlcm5hbHMiLCJ0b1Nob3ciLCJ2YWxpZGl0eSIsImJhZElucHV0Iiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJub3JtYWxpemVyIiwibWV0aG9kIiwicGFyYW1ldGVycyIsIm1ldGhvZHMiLCJmb3JtYXRBbmRBZGQiLCJsb2ciLCJpZCIsIlR5cGVFcnJvciIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImN1c3RvbU1lc3NhZ2UiLCJTdHJpbmciLCJmaW5kRGVmaW5lZCIsImRlZmF1bHRNZXNzYWdlIiwidGl0bGUiLCJ0ZXN0Iiwid3JhcHBlciIsInBhcmVudCIsInNob3dMYWJlbCIsInN1Y2Nlc3MiLCJ2YWxpZEVsZW1lbnRzIiwic2hvdyIsImludmFsaWRFbGVtZW50cyIsImlkT3JOYW1lIiwiaHRtbCIsIndyYXAiLCJhcHBlbmQiLCJlcnJvclBsYWNlbWVudCIsImluc2VydEFmdGVyIiwicGFyZW50cyIsImVzY2FwZUNzc01ldGEiLCJtYXRjaCIsImdldExlbmd0aCIsIm5vZGVOYW1lIiwiZGVwZW5kIiwiZGVwZW5kVHlwZXMiLCJzdHJpbmciLCJzdGFydFJlcXVlc3QiLCJzdG9wUmVxdWVzdCIsInN1Ym1pdCIsInByZXZpb3VzVmFsdWUiLCJvbGQiLCJkZXN0cm95Iiwib2ZmIiwiY2xhc3NSdWxlU2V0dGluZ3MiLCJjcmVkaXRjYXJkIiwiYWRkQ2xhc3NSdWxlcyIsIm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUiLCJOdW1iZXIiLCJpc05hTiIsImdldEF0dHJpYnV0ZSIsInBhcmFtIiwiZGVwZW5kcyIsImlzQXJyYXkiLCJhZGRNZXRob2QiLCJEYXRlIiwidG9TdHJpbmciLCJsIiwiTWF0aCIsInJvdW5kIiwicG93IiwibSIsIkVycm9yIiwib3JpZ2luYWxNZXNzYWdlIiwiYWpheCIsIm1vZGUiLCJwb3J0IiwiZGF0YVR5cGUiLCJjb250ZXh0IiwiYWpheFByZWZpbHRlciIsImFib3J0IiwiYWpheFNldHRpbmdzIiwicGFzc3dvcmQiLCJ2YWxpZE5hbWUiLCIkZm9ybSIsImRvbmUiLCJzdGF0dXMiLCJmYWlsIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDcEQ7O0FBQ0E7QUFDQSxNQUFJQyxNQUFKLENBQVcsc0JBQVgsRUFBbUM7QUFFL0JDLElBQUFBLFdBQVcsRUFBRTtBQUNULFdBQUs7QUFDREMsUUFBQUEsYUFBYSxFQUFFO0FBRGQsT0FESTtBQUlULFdBQUs7QUFDREEsUUFBQUEsYUFBYSxFQUFFO0FBRGQsT0FKSTtBQU9ULFdBQUs7QUFDREEsUUFBQUEsYUFBYSxFQUFFO0FBRGQsT0FQSTtBQVVULFdBQUs7QUFDREEsUUFBQUEsYUFBYSxFQUFFO0FBRGQsT0FWSTtBQWFULFlBQU07QUFDRkEsUUFBQUEsYUFBYSxFQUFFO0FBRGIsT0FiRztBQWdCVCxZQUFNO0FBQ0ZBLFFBQUFBLGFBQWEsRUFBRTtBQURiO0FBaEJHLEtBRmtCO0FBc0IvQkMsSUFBQUEsWUFBWSxFQUFFLEVBdEJpQjtBQXVCL0JDLElBQUFBLGNBQWMsRUFBRSxJ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LENBQUMsQ0FBQ3NDLFNBQUYsQ0FBWXdOLFNBQVosQ0FBc0IsV0FBdEIsRUFBbUMsVUFBVTVNLEdBQVYsRUFBZTtBQUM5QyxXQUFPLHVCQUF1QnFLLElBQXZCLENBQTRCckssR0FBNUIsQ0FBUDtBQUNILEdBRkQ7QUFHQTs7QUFDQSxXQUFTSCxjQUFULEdBQXlCO0FBQ3JCL0MsSUFBQUEsQ0FBQyxDQUFDRSxRQUFGLENBQVdDLEtBQVg7QUFDQSxRQUFNK1EsS0FBSyxHQUFHbFIsQ0FBQyxDQUFDLE1BQUQsQ0FBZjtBQUNBaUMsSUFBQUEsT0FBTyxDQUFDeUssR0FBUixDQUFZd0UsS0FBSyxDQUFDN08sSUFBTixDQUFXLFFBQVgsQ0FBWjtBQUNBckMsSUFBQUEsQ0FBQyxDQUFDd1EsSUFBRixDQUFPVSxLQUFLLENBQUM3TyxJQUFOLENBQVcsUUFBWCxDQUFQLEVBQ0s4TyxJQURMLENBQ1UsVUFBQS9PLElBQUksRUFBSTtBQUNWLFVBQUlBLElBQUksQ0FBQ2dQLE1BQVQsRUFBaUI7QUFDYnBSLFFBQUFBLENBQUMsQ0FBQ0UsUUFBRixDQUFXRSxJQUFYLENBQWdCO0FBQ1pDLFVBQUFBLEdBQUcsRUFBRSxXQURPO0FBRVpDLFVBQUFBLElBQUksRUFBRSxRQUZNO0FBR1pDLFVBQUFBLEtBQUssRUFBRSxJQUhLO0FBSVpDLFVBQUFBLFFBQVEsRUFBRztBQUpDLFNBQWhCO0FBTUEwUSxRQUFBQSxLQUFLLENBQUN4RixPQUFOLENBQWMsT0FBZDtBQUNIO0FBQ0osS0FYTCxFQVlLMkYsSUFaTCxDQVlVLFVBQUFDLEdBQUcsRUFBSSxDQUVaLENBZEw7QUFnQkg7QUFDQSxDQWxNRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLypnbG9iYWwgU3dpcGVyKi9cbi8qZXNsaW50IG5vLXVuZGVmOiBcImVycm9yXCIqL1xubmV3IFN3aXBlcignLnN3aXBlclR3by1jb250YWluZXInLCB7XG5cbiAgICBicmVha3BvaW50czoge1xuICAgICAgICAzMDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcbiAgICAgICAgfSxcbiAgICAgICAgNDc1OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjcsXG4gICAgICAgIH0sXG4gICAgICAgIDY1MDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi42LFxuICAgICAgICB9LFxuICAgICAgICA5MDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMuNixcbiAgICAgICAgfSxcbiAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNC4zLFxuICAgICAgICB9LFxuICAgICAgICAxNzAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LjksXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcjc29sdXRpb25fX25hdi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnI3NvbHV0aW9uX19uYXYtcHJldidcbiAgICB9XG59KTtcbm5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDMyMDp7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjIsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICA0NTA6e1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS45XG4gICAgICAgIH0sXG4gICAgICAgIDk1MDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi45XG4gICAgICAgIH0sXG4gICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuOSxcbiAgICAgICAgfSxcbiAgICAgICAgMTMwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi40LFxuICAgICAgICB9LFxuICAgICAgICAxNzAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjEsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJyNyZXZpZXdzX19uYXYtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJyNyZXZpZXdzX19uYXYtcHJldidcbiAgICB9LFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuJCgnLmpzLWJ0bi1yZWcnKS5jbGljaygoKT0+e1xuICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICBzcmM6ICcjanMtbW9kYWwtcmVnJyxcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgc21hbGxCdG4gOiBmYWxzZSxcbiAgICB9KTtcbn0pO1xuJCgnLmpzLWJ0bi1sb2cnKS5jbGljaygoKT0+e1xuICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICBzcmM6ICcjanMtbW9kYWwtbG9nJyxcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgc21hbGxCdG4gOiBmYWxzZSxcbiAgICB9KTtcbn0pO1xuJCgnLmpzLWRyb3BEb3duJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5qcy1kcm9wRG93bi1tZW51JywgdGhpcykuc2xpZGVUb2dnbGUoMTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQoJy5qcy1idG4tbW9iaWxlLW1lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmpzLW1vYmlsZU1lbnUnKS5zbGlkZVRvZ2dsZSgzMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiQoJy5qcy1zZWxlY3QtaXRlbScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgJCh0aGlzKVxuICAgICAgICAuY2xvc2VzdCgnLmpzLWRyb3BEb3duLW1lbnUnKVxuICAgICAgICAuc2libGluZ3MoJy5qcy1hY3RpdmUtc2VsZWN0LWJveCcpXG4gICAgICAgIC5jaGlsZHJlbignLmpzLWFjdGl2ZS1zZWxlY3QnKVxuICAgICAgICAudGV4dChlLnRhcmdldC50ZXh0Q29udGVudCk7XG59KTtcbi8qISBqUXVlcnkgVmFsaWRhdGlvbiBQbHVnaW4gLSB2MS4xOS4zIC0gMS85LzIwMjFcbiAqIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgSsO2cm4gWmFlZmZlcmVyOyBMaWNlbnNlZCBNSVQgKi9cbiFmdW5jdGlvbihhKXsnZnVuY3Rpb24nPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbJ2pxdWVyeSddLGEpOidvYmplY3QnPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoJ2pxdWVyeScpKTphKGpRdWVyeSk7fShmdW5jdGlvbihhKXthLmV4dGVuZChhLmZuLHt2YWxpZGF0ZTpmdW5jdGlvbihiKXtpZighdGhpcy5sZW5ndGgpcmV0dXJuIHZvaWQoYiYmYi5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybignTm90aGluZyBzZWxlY3RlZCwgY2FuXFwndCB2YWxpZGF0ZSwgcmV0dXJuaW5nIG5vdGhpbmcuJykpO3ZhciBjPWEuZGF0YSh0aGlzWzBdLCd2YWxpZGF0b3InKTtyZXR1cm4gYz9jOih0aGlzLmF0dHIoJ25vdmFsaWRhdGUnLCdub3ZhbGlkYXRlJyksYz1uZXcgYS52YWxpZGF0b3IoYix0aGlzWzBdKSxhLmRhdGEodGhpc1swXSwndmFsaWRhdG9yJyxjKSxjLnNldHRpbmdzLm9uc3VibWl0JiYodGhpcy5vbignY2xpY2sudmFsaWRhdGUnLCc6c3VibWl0JyxmdW5jdGlvbihiKXtjLnN1Ym1pdEJ1dHRvbj1iLmN1cnJlbnRUYXJnZXQsYSh0aGlzKS5oYXNDbGFzcygnY2FuY2VsJykmJihjLmNhbmNlbFN1Ym1pdD0hMCksdm9pZCAwIT09YSh0aGlzKS5hdHRyKCdmb3Jtbm92YWxpZGF0ZScpJiYoYy5jYW5jZWxTdWJtaXQ9ITApO30pLHRoaXMub24oJ3N1Ym1pdC52YWxpZGF0ZScsZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe3ZhciBkLGU7cmV0dXJuIGMuc3VibWl0QnV0dG9uJiYoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyfHxjLmZvcm1TdWJtaXR0ZWQpJiYoZD1hKCc8aW5wdXQgdHlwZT1cXCdoaWRkZW5cXCcvPicpLmF0dHIoJ25hbWUnLGMuc3VibWl0QnV0dG9uLm5hbWUpLnZhbChhKGMuc3VibWl0QnV0dG9uKS52YWwoKSkuYXBwZW5kVG8oYy5jdXJyZW50Rm9ybSkpLCEoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyJiYhYy5zZXR0aW5ncy5kZWJ1Zyl8fChlPWMuc2V0dGluZ3Muc3VibWl0SGFuZGxlci5jYWxsKGMsYy5jdXJyZW50Rm9ybSxiKSxkJiZkLnJlbW92ZSgpLHZvaWQgMCE9PWUmJmUpO31yZXR1cm4gYy5zZXR0aW5ncy5kZWJ1ZyYmYi5wcmV2ZW50RGVmYXVsdCgpLGMuY2FuY2VsU3VibWl0PyhjLmNhbmNlbFN1Ym1pdD0hMSxkKCkpOmMuZm9ybSgpP2MucGVuZGluZ1JlcXVlc3Q/KGMuZm9ybVN1Ym1pdHRlZD0hMCwhMSk6ZCgpOihjLmZvY3VzSW52YWxpZCgpLCExKTt9KSksYyk7fSx2YWxpZDpmdW5jdGlvbigpe3ZhciBiLGMsZDtyZXR1cm4gYSh0aGlzWzBdKS5pcygnZm9ybScpP2I9dGhpcy52YWxpZGF0ZSgpLmZvcm0oKTooZD1bXSxiPSEwLGM9YSh0aGlzWzBdLmZvcm0pLnZhbGlkYXRlKCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yj1jLmVsZW1lbnQodGhpcykmJmIsYnx8KGQ9ZC5jb25jYXQoYy5lcnJvckxpc3QpKTt9KSxjLmVycm9yTGlzdD1kKSxiO30scnVsZXM6ZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoLGksaj10aGlzWzBdLGs9J3VuZGVmaW5lZCchPXR5cGVvZiB0aGlzLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScpJiYnZmFsc2UnIT09dGhpcy5hdHRyKCdjb250ZW50ZWRpdGFibGUnKTtpZihudWxsIT1qJiYoIWouZm9ybSYmayYmKGouZm9ybT10aGlzLmNsb3Nlc3QoJ2Zvcm0nKVswXSxqLm5hbWU9dGhpcy5hdHRyKCduYW1lJykpLG51bGwhPWouZm9ybSkpe2lmKGIpc3dpdGNoKGQ9YS5kYXRhKGouZm9ybSwndmFsaWRhdG9yJykuc2V0dGluZ3MsZT1kLnJ1bGVzLGY9YS52YWxpZGF0b3Iuc3RhdGljUnVsZXMoaiksYil7Y2FzZSdhZGQnOmEuZXh0ZW5kKGYsYS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShjKSksZGVsZXRlIGYubWVzc2FnZXMsZVtqLm5hbWVdPWYsYy5tZXNzYWdlcyYmKGQubWVzc2FnZXNbai5uYW1lXT1hLmV4dGVuZChkLm1lc3NhZ2VzW2oubmFtZV0sYy5tZXNzYWdlcykpO2JyZWFrO2Nhc2UncmVtb3ZlJzpyZXR1cm4gYz8oaT17fSxhLmVhY2goYy5zcGxpdCgvXFxzLyksZnVuY3Rpb24oYSxiKXtpW2JdPWZbYl0sZGVsZXRlIGZbYl07fSksaSk6KGRlbGV0ZSBlW2oubmFtZV0sZik7fXJldHVybiBnPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGVzKGEuZXh0ZW5kKHt9LGEudmFsaWRhdG9yLmNsYXNzUnVsZXMoaiksYS52YWxpZGF0b3IuYXR0cmlidXRlUnVsZXMoaiksYS52YWxpZGF0b3IuZGF0YVJ1bGVzKGopLGEudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGopKSxqKSxnLnJlcXVpcmVkJiYoaD1nLnJlcXVpcmVkLGRlbGV0ZSBnLnJlcXVpcmVkLGc9YS5leHRlbmQoe3JlcXVpcmVkOmh9LGcpKSxnLnJlbW90ZSYmKGg9Zy5yZW1vdGUsZGVsZXRlIGcucmVtb3RlLGc9YS5leHRlbmQoZyx7cmVtb3RlOmh9KSksZzt9fX0pO3ZhciBiPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCcnKTt9O2EuZXh0ZW5kKGEuZXhwci5wc2V1ZG9zfHxhLmV4cHJbJzonXSx7Ymxhbms6ZnVuY3Rpb24oYyl7cmV0dXJuIWIoJycrYShjKS52YWwoKSk7fSxmaWxsZWQ6ZnVuY3Rpb24oYyl7dmFyIGQ9YShjKS52YWwoKTtyZXR1cm4gbnVsbCE9PWQmJiEhYignJytkKTt9LHVuY2hlY2tlZDpmdW5jdGlvbihiKXtyZXR1cm4hYShiKS5wcm9wKCdjaGVja2VkJyk7fX0pLGEudmFsaWRhdG9yPWZ1bmN0aW9uKGIsYyl7dGhpcy5zZXR0aW5ncz1hLmV4dGVuZCghMCx7fSxhLnZhbGlkYXRvci5kZWZhdWx0cyxiKSx0aGlzLmN1cnJlbnRGb3JtPWMsdGhpcy5pbml0KCk7fSxhLnZhbGlkYXRvci5mb3JtYXQ9ZnVuY3Rpb24oYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/ZnVuY3Rpb24oKXt2YXIgYz1hLm1ha2VBcnJheShhcmd1bWVudHMpO3JldHVybiBjLnVuc2hpZnQoYiksYS52YWxpZGF0b3IuZm9ybWF0LmFwcGx5KHRoaXMsYyk7fTp2b2lkIDA9PT1jP2I6KGFyZ3VtZW50cy5sZW5ndGg+MiYmYy5jb25zdHJ1Y3RvciE9PUFycmF5JiYoYz1hLm1ha2VBcnJheShhcmd1bWVudHMpLnNsaWNlKDEpKSxjLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjPVtjXSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtiPWIucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxceycrYSsnXFxcXH0nLCdnJyksZnVuY3Rpb24oKXtyZXR1cm4gYzt9KTt9KSxiKTt9LGEuZXh0ZW5kKGEudmFsaWRhdG9yLHtkZWZhdWx0czp7bWVzc2FnZXM6e30sZ3JvdXBzOnt9LHJ1bGVzOnt9LGVycm9yQ2xhc3M6J2Vycm9yJyxwZW5kaW5nQ2xhc3M6J3BlbmRpbmcnLHZhbGlkQ2xhc3M6J3ZhbGlkJyxlcnJvckVsZW1lbnQ6J2xhYmVsJyxmb2N1c0NsZWFudXA6ITEsZm9jdXNJbnZhbGlkOiEwLGVycm9yQ29udGFpbmVyOmEoW10pLGVycm9yTGFiZWxDb250YWluZXI6YShbXSksb25zdWJtaXQ6ITAsaWdub3JlOic6aGlkZGVuJyxpZ25vcmVUaXRsZTohMSxvbmZvY3VzaW46ZnVuY3Rpb24oYSl7dGhpcy5sYXN0QWN0aXZlPWEsdGhpcy5zZXR0aW5ncy5mb2N1c0NsZWFudXAmJih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0JiZ0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxhLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLHRoaXMuaGlkZVRoZXNlKHRoaXMuZXJyb3JzRm9yKGEpKSk7fSxvbmZvY3Vzb3V0OmZ1bmN0aW9uKGEpe3RoaXMuY2hlY2thYmxlKGEpfHwhKGEubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCkmJnRoaXMub3B0aW9uYWwoYSl8fHRoaXMuZWxlbWVudChhKTt9LG9ua2V5dXA6ZnVuY3Rpb24oYixjKXt2YXIgZD1bMTYsMTcsMTgsMjAsMzUsMzYsMzcsMzgsMzksNDAsNDUsMTQ0LDIyNV07OT09PWMud2hpY2gmJicnPT09dGhpcy5lbGVtZW50VmFsdWUoYil8fGEuaW5BcnJheShjLmtleUNvZGUsZCkhPT0tMXx8KGIubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZHx8Yi5uYW1lIGluIHRoaXMuaW52YWxpZCkmJnRoaXMuZWxlbWVudChiKTt9LG9uY2xpY2s6ZnVuY3Rpb24oYSl7YS5uYW1lIGluIHRoaXMuc3VibWl0dGVkP3RoaXMuZWxlbWVudChhKTphLnBhcmVudE5vZGUubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCYmdGhpcy5lbGVtZW50KGEucGFyZW50Tm9kZSk7fSxoaWdobGlnaHQ6ZnVuY3Rpb24oYixjLGQpeydyYWRpbyc9PT1iLnR5cGU/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkuYWRkQ2xhc3MoYykucmVtb3ZlQ2xhc3MoZCk6YShiKS5hZGRDbGFzcyhjKS5yZW1vdmVDbGFzcyhkKTt9LHVuaGlnaGxpZ2h0OmZ1bmN0aW9uKGIsYyxkKXsncmFkaW8nPT09Yi50eXBlP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLnJlbW92ZUNsYXNzKGMpLmFkZENsYXNzKGQpOmEoYikucmVtb3ZlQ2xhc3MoYykuYWRkQ2xhc3MoZCk7fX0sc2V0RGVmYXVsdHM6ZnVuY3Rpb24oYil7YS5leHRlbmQoYS52YWxpZGF0b3IuZGVmYXVsdHMsYik7fSxtZXNzYWdlczp7cmVxdWlyZWQ6J1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxyZW1vdGU6J1BsZWFzZSBmaXggdGhpcyBmaWVsZC4nLGVtYWlsOidQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicsdXJsOidQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuJyxkYXRlOidQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLicsZGF0ZUlTTzonUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS4nLG51bWJlcjonUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLicsZGlnaXRzOidQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuJyxlcXVhbFRvOidQbGVhc2UgZW50ZXIgdGhlIHNhbWUgdmFsdWUgYWdhaW4uJyxtYXhsZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KCdQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLicpLG1pbmxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy4nKSxyYW5nZWxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLicpLHJhbmdlOmEudmFsaWRhdG9yLmZvcm1hdCgnUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS4nKSxtYXg6YS52YWxpZGF0b3IuZm9ybWF0KCdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LicpLG1pbjphLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uJyksc3RlcDphLnZhbGlkYXRvci5mb3JtYXQoJ1BsZWFzZSBlbnRlciBhIG11bHRpcGxlIG9mIHswfS4nKX0sYXV0b0NyZWF0ZVJhbmdlczohMSxwcm90b3R5cGU6e2luaXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPSd1bmRlZmluZWQnIT10eXBlb2YgYSh0aGlzKS5hdHRyKCdjb250ZW50ZWRpdGFibGUnKSYmJ2ZhbHNlJyE9PWEodGhpcykuYXR0cignY29udGVudGVkaXRhYmxlJyk7aWYoIXRoaXMuZm9ybSYmYyYmKHRoaXMuZm9ybT1hKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKVswXSx0aGlzLm5hbWU9YSh0aGlzKS5hdHRyKCduYW1lJykpLGQ9PT10aGlzLmZvcm0pe3ZhciBlPWEuZGF0YSh0aGlzLmZvcm0sJ3ZhbGlkYXRvcicpLGY9J29uJytiLnR5cGUucmVwbGFjZSgvXnZhbGlkYXRlLywnJyksZz1lLnNldHRpbmdzO2dbZl0mJiFhKHRoaXMpLmlzKGcuaWdub3JlKSYmZ1tmXS5jYWxsKGUsdGhpcyxiKTt9fXRoaXMubGFiZWxDb250YWluZXI9YSh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuZXJyb3JDb250ZXh0PXRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoJiZ0aGlzLmxhYmVsQ29udGFpbmVyfHxhKHRoaXMuY3VycmVudEZvcm0pLHRoaXMuY29udGFpbmVycz1hKHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIpLmFkZCh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuc3VibWl0dGVkPXt9LHRoaXMudmFsdWVDYWNoZT17fSx0aGlzLnBlbmRpbmdSZXF1ZXN0PTAsdGhpcy5wZW5kaW5nPXt9LHRoaXMuaW52YWxpZD17fSx0aGlzLnJlc2V0KCk7dmFyIGMsZD10aGlzLmN1cnJlbnRGb3JtLGU9dGhpcy5ncm91cHM9e307YS5lYWNoKHRoaXMuc2V0dGluZ3MuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7J3N0cmluZyc9PXR5cGVvZiBjJiYoYz1jLnNwbGl0KC9cXHMvKSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtlW2NdPWI7fSk7fSksYz10aGlzLnNldHRpbmdzLnJ1bGVzLGEuZWFjaChjLGZ1bmN0aW9uKGIsZCl7Y1tiXT1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGQpO30pLGEodGhpcy5jdXJyZW50Rm9ybSkub24oJ2ZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGUnLCc6dGV4dCwgW3R5cGU9XFwncGFzc3dvcmRcXCddLCBbdHlwZT1cXCdmaWxlXFwnXSwgc2VsZWN0LCB0ZXh0YXJlYSwgW3R5cGU9XFwnbnVtYmVyXFwnXSwgW3R5cGU9XFwnc2VhcmNoXFwnXSwgW3R5cGU9XFwndGVsXFwnXSwgW3R5cGU9XFwndXJsXFwnXSwgW3R5cGU9XFwnZW1haWxcXCddLCBbdHlwZT1cXCdkYXRldGltZVxcJ10sIFt0eXBlPVxcJ2RhdGVcXCddLCBbdHlwZT1cXCdtb250aFxcJ10sIFt0eXBlPVxcJ3dlZWtcXCddLCBbdHlwZT1cXCd0aW1lXFwnXSwgW3R5cGU9XFwnZGF0ZXRpbWUtbG9jYWxcXCddLCBbdHlwZT1cXCdyYW5nZVxcJ10sIFt0eXBlPVxcJ2NvbG9yXFwnXSwgW3R5cGU9XFwncmFkaW9cXCddLCBbdHlwZT1cXCdjaGVja2JveFxcJ10sIFtjb250ZW50ZWRpdGFibGVdLCBbdHlwZT1cXCdidXR0b25cXCddJyxiKS5vbignY2xpY2sudmFsaWRhdGUnLCdzZWxlY3QsIG9wdGlvbiwgW3R5cGU9XFwncmFkaW9cXCddLCBbdHlwZT1cXCdjaGVja2JveFxcJ10nLGIpLHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXImJmEodGhpcy5jdXJyZW50Rm9ybSkub24oJ2ludmFsaWQtZm9ybS52YWxpZGF0ZScsdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcik7fSxmb3JtOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hlY2tGb3JtKCksYS5leHRlbmQodGhpcy5zdWJtaXR0ZWQsdGhpcy5lcnJvck1hcCksdGhpcy5pbnZhbGlkPWEuZXh0ZW5kKHt9LHRoaXMuZXJyb3JNYXApLHRoaXMudmFsaWQoKXx8YSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcignaW52YWxpZC1mb3JtJyxbdGhpc10pLHRoaXMuc2hvd0Vycm9ycygpLHRoaXMudmFsaWQoKTt9LGNoZWNrRm9ybTpmdW5jdGlvbigpe3RoaXMucHJlcGFyZUZvcm0oKTtmb3IodmFyIGE9MCxiPXRoaXMuY3VycmVudEVsZW1lbnRzPXRoaXMuZWxlbWVudHMoKTtiW2FdO2ErKyl0aGlzLmNoZWNrKGJbYV0pO3JldHVybiB0aGlzLnZhbGlkKCk7fSxlbGVtZW50OmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT10aGlzLmNsZWFuKGIpLGY9dGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGUpLGc9dGhpcyxoPSEwO3JldHVybiB2b2lkIDA9PT1mP2RlbGV0ZSB0aGlzLmludmFsaWRbZS5uYW1lXToodGhpcy5wcmVwYXJlRWxlbWVudChmKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKGYpLGQ9dGhpcy5ncm91cHNbZi5uYW1lXSxkJiZhLmVhY2godGhpcy5ncm91cHMsZnVuY3Rpb24oYSxiKXtiPT09ZCYmYSE9PWYubmFtZSYmKGU9Zy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGcuY2xlYW4oZy5maW5kQnlOYW1lKGEpKSksZSYmZS5uYW1lIGluIGcuaW52YWxpZCYmKGcuY3VycmVudEVsZW1lbnRzLnB1c2goZSksaD1nLmNoZWNrKGUpJiZoKSk7fSksYz10aGlzLmNoZWNrKGYpIT09ITEsaD1oJiZjLGM/dGhpcy5pbnZhbGlkW2YubmFtZV09ITE6dGhpcy5pbnZhbGlkW2YubmFtZV09ITAsdGhpcy5udW1iZXJPZkludmFsaWRzKCl8fCh0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zaG93RXJyb3JzKCksYShiKS5hdHRyKCdhcmlhLWludmFsaWQnLCFjKSksaDt9LHNob3dFcnJvcnM6ZnVuY3Rpb24oYil7aWYoYil7dmFyIGM9dGhpczthLmV4dGVuZCh0aGlzLmVycm9yTWFwLGIpLHRoaXMuZXJyb3JMaXN0PWEubWFwKHRoaXMuZXJyb3JNYXAsZnVuY3Rpb24oYSxiKXtyZXR1cm57bWVzc2FnZTphLGVsZW1lbnQ6Yy5maW5kQnlOYW1lKGIpWzBdfTt9KSx0aGlzLnN1Y2Nlc3NMaXN0PWEuZ3JlcCh0aGlzLnN1Y2Nlc3NMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiEoYS5uYW1lIGluIGIpO30pO310aGlzLnNldHRpbmdzLnNob3dFcnJvcnM/dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzLmNhbGwodGhpcyx0aGlzLmVycm9yTWFwLHRoaXMuZXJyb3JMaXN0KTp0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCk7fSxyZXNldEZvcm06ZnVuY3Rpb24oKXthLmZuLnJlc2V0Rm9ybSYmYSh0aGlzLmN1cnJlbnRGb3JtKS5yZXNldEZvcm0oKSx0aGlzLmludmFsaWQ9e30sdGhpcy5zdWJtaXR0ZWQ9e30sdGhpcy5wcmVwYXJlRm9ybSgpLHRoaXMuaGlkZUVycm9ycygpO3ZhciBiPXRoaXMuZWxlbWVudHMoKS5yZW1vdmVEYXRhKCdwcmV2aW91c1ZhbHVlJykucmVtb3ZlQXR0cignYXJpYS1pbnZhbGlkJyk7dGhpcy5yZXNldEVsZW1lbnRzKGIpO30scmVzZXRFbGVtZW50czpmdW5jdGlvbihhKXt2YXIgYjtpZih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KWZvcihiPTA7YVtiXTtiKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYVtiXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsJycpLHRoaXMuZmluZEJ5TmFtZShhW2JdLm5hbWUpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7ZWxzZSBhLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTt9LG51bWJlck9mSW52YWxpZHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgodGhpcy5pbnZhbGlkKTt9LG9iamVjdExlbmd0aDpmdW5jdGlvbihhKXt2YXIgYixjPTA7Zm9yKGIgaW4gYSl2b2lkIDAhPT1hW2JdJiZudWxsIT09YVtiXSYmYVtiXSE9PSExJiZjKys7cmV0dXJuIGM7fSxoaWRlRXJyb3JzOmZ1bmN0aW9uKCl7dGhpcy5oaWRlVGhlc2UodGhpcy50b0hpZGUpO30saGlkZVRoZXNlOmZ1bmN0aW9uKGEpe2Eubm90KHRoaXMuY29udGFpbmVycykudGV4dCgnJyksdGhpcy5hZGRXcmFwcGVyKGEpLmhpZGUoKTt9LHZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLnNpemUoKTt9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcnJvckxpc3QubGVuZ3RoO30sZm9jdXNJbnZhbGlkOmZ1bmN0aW9uKCl7aWYodGhpcy5zZXR0aW5ncy5mb2N1c0ludmFsaWQpdHJ5e2EodGhpcy5maW5kTGFzdEFjdGl2ZSgpfHx0aGlzLmVycm9yTGlzdC5sZW5ndGgmJnRoaXMuZXJyb3JMaXN0WzBdLmVsZW1lbnR8fFtdKS5maWx0ZXIoJzp2aXNpYmxlJykudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKCdmb2N1c2luJyk7fWNhdGNoKGIpe319LGZpbmRMYXN0QWN0aXZlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5sYXN0QWN0aXZlO3JldHVybiBiJiYxPT09YS5ncmVwKHRoaXMuZXJyb3JMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiBhLmVsZW1lbnQubmFtZT09PWIubmFtZTt9KS5sZW5ndGgmJmI7fSxlbGVtZW50czpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYz17fTtyZXR1cm4gYSh0aGlzLmN1cnJlbnRGb3JtKS5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW2NvbnRlbnRlZGl0YWJsZV0nKS5ub3QoJzpzdWJtaXQsIDpyZXNldCwgOmltYWdlLCA6ZGlzYWJsZWQnKS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpLmZpbHRlcihmdW5jdGlvbigpe3ZhciBkPXRoaXMubmFtZXx8YSh0aGlzKS5hdHRyKCduYW1lJyksZT0ndW5kZWZpbmVkJyE9dHlwZW9mIGEodGhpcykuYXR0cignY29udGVudGVkaXRhYmxlJykmJidmYWxzZSchPT1hKHRoaXMpLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScpO3JldHVybiFkJiZiLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5lcnJvcignJW8gaGFzIG5vIG5hbWUgYXNzaWduZWQnLHRoaXMpLGUmJih0aGlzLmZvcm09YSh0aGlzKS5jbG9zZXN0KCdmb3JtJylbMF0sdGhpcy5uYW1lPWQpLHRoaXMuZm9ybT09PWIuY3VycmVudEZvcm0mJighKGQgaW4gY3x8IWIub2JqZWN0TGVuZ3RoKGEodGhpcykucnVsZXMoKSkpJiYoY1tkXT0hMCwhMCkpO30pO30sY2xlYW46ZnVuY3Rpb24oYil7cmV0dXJuIGEoYilbMF07fSxlcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLnNldHRpbmdzLmVycm9yQ2xhc3Muc3BsaXQoJyAnKS5qb2luKCcuJyk7cmV0dXJuIGEodGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrJy4nK2IsdGhpcy5lcnJvckNvbnRleHQpO30scmVzZXRJbnRlcm5hbHM6ZnVuY3Rpb24oKXt0aGlzLnN1Y2Nlc3NMaXN0PVtdLHRoaXMuZXJyb3JMaXN0PVtdLHRoaXMuZXJyb3JNYXA9e30sdGhpcy50b1Nob3c9YShbXSksdGhpcy50b0hpZGU9YShbXSk7fSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVzZXRJbnRlcm5hbHMoKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKFtdKTt9LHByZXBhcmVGb3JtOmZ1bmN0aW9uKCl7dGhpcy5yZXNldCgpLHRoaXMudG9IaWRlPXRoaXMuZXJyb3JzKCkuYWRkKHRoaXMuY29udGFpbmVycyk7fSxwcmVwYXJlRWxlbWVudDpmdW5jdGlvbihhKXt0aGlzLnJlc2V0KCksdGhpcy50b0hpZGU9dGhpcy5lcnJvcnNGb3IoYSk7fSxlbGVtZW50VmFsdWU6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPWEoYiksZj1iLnR5cGUsZz0ndW5kZWZpbmVkJyE9dHlwZW9mIGUuYXR0cignY29udGVudGVkaXRhYmxlJykmJidmYWxzZSchPT1lLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScpO3JldHVybidyYWRpbyc9PT1mfHwnY2hlY2tib3gnPT09Zj90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5maWx0ZXIoJzpjaGVja2VkJykudmFsKCk6J251bWJlcic9PT1mJiYndW5kZWZpbmVkJyE9dHlwZW9mIGIudmFsaWRpdHk/Yi52YWxpZGl0eS5iYWRJbnB1dD8nTmFOJzplLnZhbCgpOihjPWc/ZS50ZXh0KCk6ZS52YWwoKSwnZmlsZSc9PT1mPydDOlxcXFxmYWtlcGF0aFxcXFwnPT09Yy5zdWJzdHIoMCwxMik/Yy5zdWJzdHIoMTIpOihkPWMubGFzdEluZGV4T2YoJy8nKSxkPj0wP2Muc3Vic3RyKGQrMSk6KGQ9Yy5sYXN0SW5kZXhPZignXFxcXCcpLGQ+PTA/Yy5zdWJzdHIoZCsxKTpjKSk6J3N0cmluZyc9PXR5cGVvZiBjP2MucmVwbGFjZSgvXFxyL2csJycpOmMpO30sY2hlY2s6ZnVuY3Rpb24oYil7Yj10aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IodGhpcy5jbGVhbihiKSk7dmFyIGMsZCxlLGYsZz1hKGIpLnJ1bGVzKCksaD1hLm1hcChnLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI7fSkubGVuZ3RoLGk9ITEsaj10aGlzLmVsZW1lbnRWYWx1ZShiKTsnZnVuY3Rpb24nPT10eXBlb2YgZy5ub3JtYWxpemVyP2Y9Zy5ub3JtYWxpemVyOidmdW5jdGlvbic9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXImJihmPXRoaXMuc2V0dGluZ3Mubm9ybWFsaXplciksZiYmKGo9Zi5jYWxsKGIsaiksZGVsZXRlIGcubm9ybWFsaXplcik7Zm9yKGQgaW4gZyl7ZT17bWV0aG9kOmQscGFyYW1ldGVyczpnW2RdfTt0cnl7aWYoYz1hLnZhbGlkYXRvci5tZXRob2RzW2RdLmNhbGwodGhpcyxqLGIsZS5wYXJhbWV0ZXJzKSwnZGVwZW5kZW5jeS1taXNtYXRjaCc9PT1jJiYxPT09aCl7aT0hMDtjb250aW51ZTt9aWYoaT0hMSwncGVuZGluZyc9PT1jKXJldHVybiB2b2lkKHRoaXMudG9IaWRlPXRoaXMudG9IaWRlLm5vdCh0aGlzLmVycm9yc0ZvcihiKSkpO2lmKCFjKXJldHVybiB0aGlzLmZvcm1hdEFuZEFkZChiLGUpLCExO31jYXRjaChrKXt0aHJvdyB0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5sb2coJ0V4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgJytiLmlkKycsIGNoZWNrIHRoZSBcXCcnK2UubWV0aG9kKydcXCcgbWV0aG9kLicsayksayBpbnN0YW5jZW9mIFR5cGVFcnJvciYmKGsubWVzc2FnZSs9Jy4gIEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgJytiLmlkKycsIGNoZWNrIHRoZSBcXCcnK2UubWV0aG9kKydcXCcgbWV0aG9kLicpLGs7fX1pZighaSlyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgoZykmJnRoaXMuc3VjY2Vzc0xpc3QucHVzaChiKSwhMDt9LGN1c3RvbURhdGFNZXNzYWdlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYikuZGF0YSgnbXNnJytjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpfHxhKGIpLmRhdGEoJ21zZycpO30sY3VzdG9tTWVzc2FnZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYV07cmV0dXJuIGMmJihjLmNvbnN0cnVjdG9yPT09U3RyaW5nP2M6Y1tiXSk7fSxmaW5kRGVmaW5lZDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspaWYodm9pZCAwIT09YXJndW1lbnRzW2FdKXJldHVybiBhcmd1bWVudHNbYV07fSxkZWZhdWx0TWVzc2FnZTpmdW5jdGlvbihiLGMpeydzdHJpbmcnPT10eXBlb2YgYyYmKGM9e21ldGhvZDpjfSk7dmFyIGQ9dGhpcy5maW5kRGVmaW5lZCh0aGlzLmN1c3RvbU1lc3NhZ2UoYi5uYW1lLGMubWV0aG9kKSx0aGlzLmN1c3RvbURhdGFNZXNzYWdlKGIsYy5tZXRob2QpLCF0aGlzLnNldHRpbmdzLmlnbm9yZVRpdGxlJiZiLnRpdGxlfHx2b2lkIDAsYS52YWxpZGF0b3IubWVzc2FnZXNbYy5tZXRob2RdLCc8c3Ryb25nPldhcm5pbmc6IE5vIG1lc3NhZ2UgZGVmaW5lZCBmb3IgJytiLm5hbWUrJzwvc3Ryb25nPicpLGU9L1xcJD9cXHsoXFxkKylcXH0vZztyZXR1cm4nZnVuY3Rpb24nPT10eXBlb2YgZD9kPWQuY2FsbCh0aGlzLGMucGFyYW1ldGVycyxiKTplLnRlc3QoZCkmJihkPWEudmFsaWRhdG9yLmZvcm1hdChkLnJlcGxhY2UoZSwneyQxfScpLGMucGFyYW1ldGVycykpLGQ7fSxmb3JtYXRBbmRBZGQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmRlZmF1bHRNZXNzYWdlKGEsYik7dGhpcy5lcnJvckxpc3QucHVzaCh7bWVzc2FnZTpjLGVsZW1lbnQ6YSxtZXRob2Q6Yi5tZXRob2R9KSx0aGlzLmVycm9yTWFwW2EubmFtZV09Yyx0aGlzLnN1Ym1pdHRlZFthLm5hbWVdPWM7fSxhZGRXcmFwcGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNldHRpbmdzLndyYXBwZXImJihhPWEuYWRkKGEucGFyZW50KHRoaXMuc2V0dGluZ3Mud3JhcHBlcikpKSxhO30sZGVmYXVsdFNob3dFcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYSxiLGM7Zm9yKGE9MDt0aGlzLmVycm9yTGlzdFthXTthKyspYz10aGlzLmVycm9yTGlzdFthXSx0aGlzLnNldHRpbmdzLmhpZ2hsaWdodCYmdGhpcy5zZXR0aW5ncy5oaWdobGlnaHQuY2FsbCh0aGlzLGMuZWxlbWVudCx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKSx0aGlzLnNob3dMYWJlbChjLmVsZW1lbnQsYy5tZXNzYWdlKTtpZih0aGlzLmVycm9yTGlzdC5sZW5ndGgmJih0aGlzLnRvU2hvdz10aGlzLnRvU2hvdy5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zZXR0aW5ncy5zdWNjZXNzKWZvcihhPTA7dGhpcy5zdWNjZXNzTGlzdFthXTthKyspdGhpcy5zaG93TGFiZWwodGhpcy5zdWNjZXNzTGlzdFthXSk7aWYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodClmb3IoYT0wLGI9dGhpcy52YWxpZEVsZW1lbnRzKCk7YlthXTthKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYlthXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTt0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5ub3QodGhpcy50b1Nob3cpLHRoaXMuaGlkZUVycm9ycygpLHRoaXMuYWRkV3JhcHBlcih0aGlzLnRvU2hvdykuc2hvdygpO30sdmFsaWRFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50cy5ub3QodGhpcy5pbnZhbGlkRWxlbWVudHMoKSk7fSxpbnZhbGlkRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLmVycm9yTGlzdCkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudDt9KTt9LHNob3dMYWJlbDpmdW5jdGlvbihiLGMpe3ZhciBkLGUsZixnLGg9dGhpcy5lcnJvcnNGb3IoYiksaT10aGlzLmlkT3JOYW1lKGIpLGo9YShiKS5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7aC5sZW5ndGg/KGgucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLGguaHRtbChjKSk6KGg9YSgnPCcrdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrJz4nKS5hdHRyKCdpZCcsaSsnLWVycm9yJykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKS5odG1sKGN8fCcnKSxkPWgsdGhpcy5zZXR0aW5ncy53cmFwcGVyJiYoZD1oLmhpZGUoKS5zaG93KCkud3JhcCgnPCcrdGhpcy5zZXR0aW5ncy53cmFwcGVyKycvPicpLnBhcmVudCgpKSx0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aD90aGlzLmxhYmVsQ29udGFpbmVyLmFwcGVuZChkKTp0aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50P3RoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQuY2FsbCh0aGlzLGQsYShiKSk6ZC5pbnNlcnRBZnRlcihiKSxoLmlzKCdsYWJlbCcpP2guYXR0cignZm9yJyxpKTowPT09aC5wYXJlbnRzKCdsYWJlbFtmb3I9XFwnJyt0aGlzLmVzY2FwZUNzc01ldGEoaSkrJ1xcJ10nKS5sZW5ndGgmJihmPWguYXR0cignaWQnKSxqP2oubWF0Y2gobmV3IFJlZ0V4cCgnXFxcXGInK3RoaXMuZXNjYXBlQ3NzTWV0YShmKSsnXFxcXGInKSl8fChqKz0nICcrZik6aj1mLGEoYikuYXR0cignYXJpYS1kZXNjcmliZWRieScsaiksZT10aGlzLmdyb3Vwc1tiLm5hbWVdLGUmJihnPXRoaXMsYS5lYWNoKGcuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7Yz09PWUmJmEoJ1tuYW1lPVxcJycrZy5lc2NhcGVDc3NNZXRhKGIpKydcXCddJyxnLmN1cnJlbnRGb3JtKS5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JyxoLmF0dHIoJ2lkJykpO30pKSkpLCFjJiZ0aGlzLnNldHRpbmdzLnN1Y2Nlc3MmJihoLnRleHQoJycpLCdzdHJpbmcnPT10eXBlb2YgdGhpcy5zZXR0aW5ncy5zdWNjZXNzP2guYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5zdWNjZXNzKTp0aGlzLnNldHRpbmdzLnN1Y2Nlc3MoaCxiKSksdGhpcy50b1Nob3c9dGhpcy50b1Nob3cuYWRkKGgpO30sZXJyb3JzRm9yOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZXNjYXBlQ3NzTWV0YSh0aGlzLmlkT3JOYW1lKGIpKSxkPWEoYikuYXR0cignYXJpYS1kZXNjcmliZWRieScpLGU9J2xhYmVsW2Zvcj1cXCcnK2MrJ1xcJ10sIGxhYmVsW2Zvcj1cXCcnK2MrJ1xcJ10gKic7cmV0dXJuIGQmJihlPWUrJywgIycrdGhpcy5lc2NhcGVDc3NNZXRhKGQpLnJlcGxhY2UoL1xccysvZywnLCAjJykpLHRoaXMuZXJyb3JzKCkuZmlsdGVyKGUpO30sZXNjYXBlQ3NzTWV0YTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW1xcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BcXFtcXF1eYHt8fX5dKS9nLCdcXFxcJDEnKTt9LGlkT3JOYW1lOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdyb3Vwc1thLm5hbWVdfHwodGhpcy5jaGVja2FibGUoYSk/YS5uYW1lOmEuaWR8fGEubmFtZSk7fSx2YWxpZGF0aW9uVGFyZ2V0Rm9yOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNoZWNrYWJsZShiKSYmKGI9dGhpcy5maW5kQnlOYW1lKGIubmFtZSkpLGEoYikubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKVswXTt9LGNoZWNrYWJsZTpmdW5jdGlvbihhKXtyZXR1cm4vcmFkaW98Y2hlY2tib3gvaS50ZXN0KGEudHlwZSk7fSxmaW5kQnlOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoJ1tuYW1lPVxcJycrdGhpcy5lc2NhcGVDc3NNZXRhKGIpKydcXCddJyk7fSxnZXRMZW5ndGg6ZnVuY3Rpb24oYixjKXtzd2l0Y2goYy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlJ3NlbGVjdCc6cmV0dXJuIGEoJ29wdGlvbjpzZWxlY3RlZCcsYykubGVuZ3RoO2Nhc2UnaW5wdXQnOmlmKHRoaXMuY2hlY2thYmxlKGMpKXJldHVybiB0aGlzLmZpbmRCeU5hbWUoYy5uYW1lKS5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoO31yZXR1cm4gYi5sZW5ndGg7fSxkZXBlbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4hdGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgYV18fHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIGFdKGEsYik7fSxkZXBlbmRUeXBlczp7J2Jvb2xlYW4nOmZ1bmN0aW9uKGEpe3JldHVybiBhO30sc3RyaW5nOmZ1bmN0aW9uKGIsYyl7cmV0dXJuISFhKGIsYy5mb3JtKS5sZW5ndGg7fSwnZnVuY3Rpb24nOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEoYik7fX0sb3B0aW9uYWw6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5lbGVtZW50VmFsdWUoYik7cmV0dXJuIWEudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCh0aGlzLGMsYikmJidkZXBlbmRlbmN5LW1pc21hdGNoJzt9LHN0YXJ0UmVxdWVzdDpmdW5jdGlvbihiKXt0aGlzLnBlbmRpbmdbYi5uYW1lXXx8KHRoaXMucGVuZGluZ1JlcXVlc3QrKyxhKGIpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSx0aGlzLnBlbmRpbmdbYi5uYW1lXT0hMCk7fSxzdG9wUmVxdWVzdDpmdW5jdGlvbihiLGMpe3RoaXMucGVuZGluZ1JlcXVlc3QtLSx0aGlzLnBlbmRpbmdSZXF1ZXN0PDAmJih0aGlzLnBlbmRpbmdSZXF1ZXN0PTApLGRlbGV0ZSB0aGlzLnBlbmRpbmdbYi5uYW1lXSxhKGIpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSxjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiZ0aGlzLmZvcm0oKT8oYSh0aGlzLmN1cnJlbnRGb3JtKS5zdWJtaXQoKSx0aGlzLnN1Ym1pdEJ1dHRvbiYmYSgnaW5wdXQ6aGlkZGVuW25hbWU9XFwnJyt0aGlzLnN1Ym1pdEJ1dHRvbi5uYW1lKydcXCddJyx0aGlzLmN1cnJlbnRGb3JtKS5yZW1vdmUoKSx0aGlzLmZvcm1TdWJtaXR0ZWQ9ITEpOiFjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiYoYSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcignaW52YWxpZC1mb3JtJyxbdGhpc10pLHRoaXMuZm9ybVN1Ym1pdHRlZD0hMSk7fSxwcmV2aW91c1ZhbHVlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9J3N0cmluZyc9PXR5cGVvZiBjJiZjfHwncmVtb3RlJyxhLmRhdGEoYiwncHJldmlvdXNWYWx1ZScpfHxhLmRhdGEoYiwncHJldmlvdXNWYWx1ZScse29sZDpudWxsLHZhbGlkOiEwLG1lc3NhZ2U6dGhpcy5kZWZhdWx0TWVzc2FnZShiLHttZXRob2Q6Y30pfSk7fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEZvcm0oKSxhKHRoaXMuY3VycmVudEZvcm0pLm9mZignLnZhbGlkYXRlJykucmVtb3ZlRGF0YSgndmFsaWRhdG9yJykuZmluZCgnLnZhbGlkYXRlLWVxdWFsVG8tYmx1cicpLm9mZignLnZhbGlkYXRlLWVxdWFsVG8nKS5yZW1vdmVDbGFzcygndmFsaWRhdGUtZXF1YWxUby1ibHVyJykuZmluZCgnLnZhbGlkYXRlLWxlc3NUaGFuLWJsdXInKS5vZmYoJy52YWxpZGF0ZS1sZXNzVGhhbicpLnJlbW92ZUNsYXNzKCd2YWxpZGF0ZS1sZXNzVGhhbi1ibHVyJykuZmluZCgnLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1cicpLm9mZignLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWwnKS5yZW1vdmVDbGFzcygndmFsaWRhdGUtbGVzc1RoYW5FcXVhbC1ibHVyJykuZmluZCgnLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwtYmx1cicpLm9mZignLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwnKS5yZW1vdmVDbGFzcygndmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyJykuZmluZCgnLnZhbGlkYXRlLWdyZWF0ZXJUaGFuLWJsdXInKS5vZmYoJy52YWxpZGF0ZS1ncmVhdGVyVGhhbicpLnJlbW92ZUNsYXNzKCd2YWxpZGF0ZS1ncmVhdGVyVGhhbi1ibHVyJyk7fX0sY2xhc3NSdWxlU2V0dGluZ3M6e3JlcXVpcmVkOntyZXF1aXJlZDohMH0sZW1haWw6e2VtYWlsOiEwfSx1cmw6e3VybDohMH0sZGF0ZTp7ZGF0ZTohMH0sZGF0ZUlTTzp7ZGF0ZUlTTzohMH0sbnVtYmVyOntudW1iZXI6ITB9LGRpZ2l0czp7ZGlnaXRzOiEwfSxjcmVkaXRjYXJkOntjcmVkaXRjYXJkOiEwfX0sYWRkQ2xhc3NSdWxlczpmdW5jdGlvbihiLGMpe2IuY29uc3RydWN0b3I9PT1TdHJpbmc/dGhpcy5jbGFzc1J1bGVTZXR0aW5nc1tiXT1jOmEuZXh0ZW5kKHRoaXMuY2xhc3NSdWxlU2V0dGluZ3MsYik7fSxjbGFzc1J1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9YShiKS5hdHRyKCdjbGFzcycpO3JldHVybiBkJiZhLmVhY2goZC5zcGxpdCgnICcpLGZ1bmN0aW9uKCl7dGhpcyBpbiBhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5ncyYmYS5leHRlbmQoYyxhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1t0aGlzXSk7fSksYzt9LG5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGU6ZnVuY3Rpb24oYSxiLGMsZCl7L21pbnxtYXh8c3RlcC8udGVzdChjKSYmKG51bGw9PT1ifHwvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QoYikpJiYoZD1OdW1iZXIoZCksaXNOYU4oZCkmJihkPXZvaWQgMCkpLGR8fDA9PT1kP2FbY109ZDpiPT09YyYmJ3JhbmdlJyE9PWImJihhW2NdPSEwKTt9LGF0dHJpYnV0ZVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZSgndHlwZScpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpJ3JlcXVpcmVkJz09PWM/KGQ9Yi5nZXRBdHRyaWJ1dGUoYyksJyc9PT1kJiYoZD0hMCksZD0hIWQpOmQ9Zi5hdHRyKGMpLHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShlLGcsYyxkKTtyZXR1cm4gZS5tYXhsZW5ndGgmJi8tMXwyMTQ3NDgzNjQ3fDUyNDI4OC8udGVzdChlLm1heGxlbmd0aCkmJmRlbGV0ZSBlLm1heGxlbmd0aCxlO30sZGF0YVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZSgndHlwZScpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpZD1mLmRhdGEoJ3J1bGUnK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSksJyc9PT1kJiYoZD0hMCksdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKGUsZyxjLGQpO3JldHVybiBlO30sc3RhdGljUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGM9e30sZD1hLmRhdGEoYi5mb3JtLCd2YWxpZGF0b3InKTtyZXR1cm4gZC5zZXR0aW5ncy5ydWxlcyYmKGM9YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShkLnNldHRpbmdzLnJ1bGVzW2IubmFtZV0pfHx7fSksYzt9LG5vcm1hbGl6ZVJ1bGVzOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuZWFjaChiLGZ1bmN0aW9uKGQsZSl7aWYoZT09PSExKXJldHVybiB2b2lkIGRlbGV0ZSBiW2RdO2lmKGUucGFyYW18fGUuZGVwZW5kcyl7dmFyIGY9ITA7c3dpdGNoKHR5cGVvZiBlLmRlcGVuZHMpe2Nhc2Unc3RyaW5nJzpmPSEhYShlLmRlcGVuZHMsYy5mb3JtKS5sZW5ndGg7YnJlYWs7Y2FzZSdmdW5jdGlvbic6Zj1lLmRlcGVuZHMuY2FsbChjLGMpO31mP2JbZF09dm9pZCAwPT09ZS5wYXJhbXx8ZS5wYXJhbTooYS5kYXRhKGMuZm9ybSwndmFsaWRhdG9yJykucmVzZXRFbGVtZW50cyhhKGMpKSxkZWxldGUgYltkXSk7fX0pLGEuZWFjaChiLGZ1bmN0aW9uKGEsZCl7YlthXT0nZnVuY3Rpb24nPT10eXBlb2YgZCYmJ25vcm1hbGl6ZXInIT09YT9kKGMpOmQ7fSksYS5lYWNoKFsnbWlubGVuZ3RoJywnbWF4bGVuZ3RoJ10sZnVuY3Rpb24oKXtiW3RoaXNdJiYoYlt0aGlzXT1OdW1iZXIoYlt0aGlzXSkpO30pLGEuZWFjaChbJ3JhbmdlbGVuZ3RoJywncmFuZ2UnXSxmdW5jdGlvbigpe3ZhciBhO2JbdGhpc10mJihBcnJheS5pc0FycmF5KGJbdGhpc10pP2JbdGhpc109W051bWJlcihiW3RoaXNdWzBdKSxOdW1iZXIoYlt0aGlzXVsxXSldOidzdHJpbmcnPT10eXBlb2YgYlt0aGlzXSYmKGE9Ylt0aGlzXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCcnKS5zcGxpdCgvW1xccyxdKy8pLGJbdGhpc109W051bWJlcihhWzBdKSxOdW1iZXIoYVsxXSldKSk7fSksYS52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcyYmKG51bGwhPWIubWluJiZudWxsIT1iLm1heCYmKGIucmFuZ2U9W2IubWluLGIubWF4XSxkZWxldGUgYi5taW4sZGVsZXRlIGIubWF4KSxudWxsIT1iLm1pbmxlbmd0aCYmbnVsbCE9Yi5tYXhsZW5ndGgmJihiLnJhbmdlbGVuZ3RoPVtiLm1pbmxlbmd0aCxiLm1heGxlbmd0aF0sZGVsZXRlIGIubWlubGVuZ3RoLGRlbGV0ZSBiLm1heGxlbmd0aCkpLGI7fSxub3JtYWxpemVSdWxlOmZ1bmN0aW9uKGIpe2lmKCdzdHJpbmcnPT10eXBlb2YgYil7dmFyIGM9e307YS5lYWNoKGIuc3BsaXQoL1xccy8pLGZ1bmN0aW9uKCl7Y1t0aGlzXT0hMDt9KSxiPWM7fXJldHVybiBiO30sYWRkTWV0aG9kOmZ1bmN0aW9uKGIsYyxkKXthLnZhbGlkYXRvci5tZXRob2RzW2JdPWMsYS52YWxpZGF0b3IubWVzc2FnZXNbYl09dm9pZCAwIT09ZD9kOmEudmFsaWRhdG9yLm1lc3NhZ2VzW2JdLGMubGVuZ3RoPDMmJmEudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoYixhLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGIpKTt9LG1ldGhvZHM6e3JlcXVpcmVkOmZ1bmN0aW9uKGIsYyxkKXtpZighdGhpcy5kZXBlbmQoZCxjKSlyZXR1cm4nZGVwZW5kZW5jeS1taXNtYXRjaCc7aWYoJ3NlbGVjdCc9PT1jLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBlPWEoYykudmFsKCk7cmV0dXJuIGUmJmUubGVuZ3RoPjA7fXJldHVybiB0aGlzLmNoZWNrYWJsZShjKT90aGlzLmdldExlbmd0aChiLGMpPjA6dm9pZCAwIT09YiYmbnVsbCE9PWImJmIubGVuZ3RoPjA7fSxlbWFpbDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KGEpO30sdXJsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHUwMGExLVxcdWZmZmZdW2EtejAtOVxcdTAwYTEtXFx1ZmZmZl8tXXswLDYyfSk/W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1cXC4pKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfVxcLj8pKSg/OjpcXGR7Miw1fSk/KD86W1xcLz8jXVxcUyopPyQvaS50ZXN0KGEpO30sZGF0ZTpmdW5jdGlvbigpe3ZhciBhPSExO3JldHVybiBmdW5jdGlvbihiLGMpe3JldHVybiBhfHwoYT0hMCx0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKCdUaGUgYGRhdGVgIG1ldGhvZCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiBcXCcyLjAuMFxcJy5cXG5QbGVhc2UgZG9uXFwndCB1c2UgaXQsIHNpbmNlIGl0IHJlbGllcyBvbiB0aGUgRGF0ZSBjb25zdHJ1Y3Rvciwgd2hpY2hcXG5iZWhhdmVzIHZlcnkgZGlmZmVyZW50bHkgYWNyb3NzIGJyb3dzZXJzIGFuZCBsb2NhbGVzLiBVc2UgYGRhdGVJU09gXFxuaW5zdGVhZCBvciBvbmUgb2YgdGhlIGxvY2FsZSBzcGVjaWZpYyBtZXRob2RzIGluIGBsb2NhbGl6YXRpb25zL2BcXG5hbmQgYGFkZGl0aW9uYWwtbWV0aG9kcy5qc2AuJykpLHRoaXMub3B0aW9uYWwoYyl8fCEvSW52YWxpZHxOYU4vLnRlc3QobmV3IERhdGUoYikudG9TdHJpbmcoKSk7fTt9KCksZGF0ZUlTTzpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QoYSk7fSxudW1iZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L14oPzotP1xcZCt8LT9cXGR7MSwzfSg/OixcXGR7M30pKyk/KD86XFwuXFxkKyk/JC8udGVzdChhKTt9LGRpZ2l0czpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZCskLy50ZXN0KGEpO30sbWlubGVuZ3RoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1BcnJheS5pc0FycmF5KGEpP2EubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGEsYik7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGQ+PWM7fSxtYXhsZW5ndGg6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUFycmF5LmlzQXJyYXkoYSk/YS5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYSxiKTtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8ZDw9Yzt9LHJhbmdlbGVuZ3RoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1BcnJheS5pc0FycmF5KGEpP2EubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGEsYik7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGQ+PWNbMF0mJmQ8PWNbMV07fSxtaW46ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPj1jO30sbWF4OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YTw9Yzt9LHJhbmdlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YT49Y1swXSYmYTw9Y1sxXTt9LHN0ZXA6ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGY9YShjKS5hdHRyKCd0eXBlJyksZz0nU3RlcCBhdHRyaWJ1dGUgb24gaW5wdXQgdHlwZSAnK2YrJyBpcyBub3Qgc3VwcG9ydGVkLicsaD1bJ3RleHQnLCdudW1iZXInLCdyYW5nZSddLGk9bmV3IFJlZ0V4cCgnXFxcXGInK2YrJ1xcXFxiJyksaj1mJiYhaS50ZXN0KGguam9pbigpKSxrPWZ1bmN0aW9uKGEpe3ZhciBiPSgnJythKS5tYXRjaCgvKD86XFwuKFxcZCspKT8kLyk7cmV0dXJuIGImJmJbMV0/YlsxXS5sZW5ndGg6MDt9LGw9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucm91bmQoYSpNYXRoLnBvdygxMCxlKSk7fSxtPSEwO2lmKGopdGhyb3cgbmV3IEVycm9yKGcpO3JldHVybiBlPWsoZCksKGsoYik+ZXx8bChiKSVsKGQpIT09MCkmJihtPSExKSx0aGlzLm9wdGlvbmFsKGMpfHxtO30sZXF1YWxUbzpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YShkKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0JiZlLm5vdCgnLnZhbGlkYXRlLWVxdWFsVG8tYmx1cicpLmxlbmd0aCYmZS5hZGRDbGFzcygndmFsaWRhdGUtZXF1YWxUby1ibHVyJykub24oJ2JsdXIudmFsaWRhdGUtZXF1YWxUbycsZnVuY3Rpb24oKXthKGMpLnZhbGlkKCk7fSksYj09PWUudmFsKCk7fSxyZW1vdGU6ZnVuY3Rpb24oYixjLGQsZSl7aWYodGhpcy5vcHRpb25hbChjKSlyZXR1cm4nZGVwZW5kZW5jeS1taXNtYXRjaCc7ZT0nc3RyaW5nJz09dHlwZW9mIGUmJmV8fCdyZW1vdGUnO3ZhciBmLGcsaCxpPXRoaXMucHJldmlvdXNWYWx1ZShjLGUpO3JldHVybiB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV18fCh0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV09e30pLGkub3JpZ2luYWxNZXNzYWdlPWkub3JpZ2luYWxNZXNzYWdlfHx0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV0sdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdPWkubWVzc2FnZSxkPSdzdHJpbmcnPT10eXBlb2YgZCYme3VybDpkfXx8ZCxoPWEucGFyYW0oYS5leHRlbmQoe2RhdGE6Yn0sZC5kYXRhKSksaS5vbGQ9PT1oP2kudmFsaWQ6KGkub2xkPWgsZj10aGlzLHRoaXMuc3RhcnRSZXF1ZXN0KGMpLGc9e30sZ1tjLm5hbWVdPWIsYS5hamF4KGEuZXh0ZW5kKCEwLHttb2RlOidhYm9ydCcscG9ydDondmFsaWRhdGUnK2MubmFtZSxkYXRhVHlwZTonanNvbicsZGF0YTpnLGNvbnRleHQ6Zi5jdXJyZW50Rm9ybSxzdWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBkLGcsaCxqPWE9PT0hMHx8J3RydWUnPT09YTtmLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV09aS5vcmlnaW5hbE1lc3NhZ2Usaj8oaD1mLmZvcm1TdWJtaXR0ZWQsZi5yZXNldEludGVybmFscygpLGYudG9IaWRlPWYuZXJyb3JzRm9yKGMpLGYuZm9ybVN1Ym1pdHRlZD1oLGYuc3VjY2Vzc0xpc3QucHVzaChjKSxmLmludmFsaWRbYy5uYW1lXT0hMSxmLnNob3dFcnJvcnMoKSk6KGQ9e30sZz1hfHxmLmRlZmF1bHRNZXNzYWdlKGMse21ldGhvZDplLHBhcmFtZXRlcnM6Yn0pLGRbYy5uYW1lXT1pLm1lc3NhZ2U9ZyxmLmludmFsaWRbYy5uYW1lXT0hMCxmLnNob3dFcnJvcnMoZCkpLGkudmFsaWQ9aixmLnN0b3BSZXF1ZXN0KGMsaik7fX0sZCkpLCdwZW5kaW5nJyk7fX19KTt2YXIgYyxkPXt9O3JldHVybiBhLmFqYXhQcmVmaWx0ZXI/YS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEsYixjKXt2YXIgZT1hLnBvcnQ7J2Fib3J0Jz09PWEubW9kZSYmKGRbZV0mJmRbZV0uYWJvcnQoKSxkW2VdPWMpO30pOihjPWEuYWpheCxhLmFqYXg9ZnVuY3Rpb24oYil7dmFyIGU9KCdtb2RlJ2luIGI/YjphLmFqYXhTZXR0aW5ncykubW9kZSxmPSgncG9ydCdpbiBiP2I6YS5hamF4U2V0dGluZ3MpLnBvcnQ7cmV0dXJuJ2Fib3J0Jz09PWU/KGRbZl0mJmRbZl0uYWJvcnQoKSxkW2ZdPWMuYXBwbHkodGhpcyxhcmd1bWVudHMpLGRbZl0pOmMuYXBwbHkodGhpcyxhcmd1bWVudHMpO30pLGE7fSk7XG4vKmdsb2JhbCBzdWJtaXRIYW5kbGVyKi9cbi8qZXNsaW50IG5vLXVuZGVmOiBcImVycm9yXCIqL1xuJCgnI2xvZycpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIGVtYWlsOiAnRW1haWwg0LLQstC10LTQtdC9INC90LUg0LrQvtGA0YDQtdC60YLQvdC+JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiAn0K3RgtC+INC/0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAn0J3QtSDQvNC10L3QtdC1IDgg0YHQuNC80LLQvtC70L7QsicsXG4gICAgICAgICAgICByZXF1aXJlZDogJ9Ct0YLQviDQv9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjbG9nJykuc3VibWl0KGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgc3VibWl0SGFuZGxlcigpO1xuICAgIH1cbn0pO1xuJCgnI3JlZycpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDhcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDIsXG4gICAgICAgICAgICB2YWxpZE5hbWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIGVtYWlsOiAnRW1haWwg0LLQstC10LTQtdC9INC90LUg0LrQvtGA0YDQtdC60YLQvdC+JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiAn0K3RgtC+INC/0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAn0J3QtSDQvNC10L3QtdC1IDgg0YHQuNC80LLQvtC70L7QsicsXG4gICAgICAgICAgICByZXF1aXJlZDogJ9Ct0YLQviDQv9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAn0J3QtSDQvNC10L3QtdC1IDIg0YHQuNC80LLQvtC70L7QsicsXG4gICAgICAgICAgICByZXF1aXJlZDogJ9Ct0YLQviDQv9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXG4gICAgICAgICAgICB2YWxpZE5hbWU6ICfQndC10LTQvtC/0YPRgdGC0LjQvNC+0LUg0LjQvNGPJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNyZWcnKS5zdWJtaXQoZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgICBzdWJtaXRIYW5kbGVyKCk7XG4gICAgfVxufSk7XG4kLnZhbGlkYXRvci5hZGRNZXRob2QoJ3ZhbGlkTmFtZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gL1tBLVrQkC3Qr117MX18W2EtetCwLdGPXS8udGVzdCh2YWwpO1xufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuZnVuY3Rpb24gc3VibWl0SGFuZGxlcigpIHtcbiAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgY29uc3QgJGZvcm0gPSAkKCcjbG9nJyk7XG4gICAgY29uc29sZS5sb2coJGZvcm0uYXR0cignYWN0aW9uJykpO1xuICAgICQuYWpheCgkZm9ybS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICAgICAgICAgICAgICBzcmM6ICcjanMtbW9kYWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgdG91Y2g6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJGZvcm0udHJpZ2dlcigncmVzZXQnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGVyciA9PiB7XG5cbiAgICAgICAgfSk7XG5cbn1cbn0pOyJdfQ==
