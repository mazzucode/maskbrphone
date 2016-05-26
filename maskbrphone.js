/**
 *  maskbrphone for jQuery, version 2.0.0 (https://github.com/masimao/maskbrphone)
 *  (c) 2014 Márcio Mazzucato (https://github.com/masimao)
 *
 *  maskbrphone for jQuery is freely distributable under the terms of an MIT-style license.
 */
(function($) {

    $.fn.maskbrphone = function(options) {

    	var defaults = {
            useDdd            : false,
            useDddParenthesis : true,
            dddSeparator      : ' ',
            numberSeparator   : '-'
        };

        var settings = $.extend({}, defaults, options);
        var plugin = this;

        var initialize = function() {

            return plugin.each( function() {
                $(this).val(applyMask($(this).val()));

                $(this).keyup(function() {
                    $(this).val(applyMask($(this).val()));
                });
            });
        };

        var applyMask = function(input) {

            if ( ! input.length) {
                return '';
            }

            var fone = input.replace(/\D/g, ''); // Remove tudo o que não for dígito

            var ddd = '',
                prefix,
                suffix;

            if ( ! settings.useDdd && input.charAt(0) === '9') {
                prefix = fone.substring(0, 5);
                suffix = fone.substring(5, 9);
            } else if (settings.useDdd && input.charAt(5) === '9') {
                ddd = fone.substring(0, 2);
                prefix = fone.substring(2, 7);
                suffix = fone.substring(7, 11);
            } else if ( ! settings.useDdd && input.charAt(0) !== '9') {
                prefix = fone.substring(0, 4);
                suffix = fone.substring(4, 8);
            } else if (settings.useDdd && input.charAt(5) !== '9') {
                ddd = fone.substring(0, 2);
                prefix = fone.substring(2, 6);
                suffix = fone.substring(6, 10);
            }

            if (settings.useDdd) {
                ddd = (settings.useDddParenthesis ? '(' : '') + ddd;
            }

            if (settings.useDdd && prefix.length > 0) {
                ddd += (settings.useDddParenthesis ? ')' : '') + settings.dddSeparator;
            }

            if (suffix.length > 0) {
                prefix += settings.numberSeparator;
            }

            return ddd + prefix + suffix;
        };

        initialize();

    };

}(jQuery));
