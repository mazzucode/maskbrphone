/**
*  maskbrphone for jQuery, version 1.0.0
*  (c) 2014 Márcio Simão (https://github.com/masimao)
*
*  maskbrphone for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/masimao/maskbrphone
*/
(function($) {

    $.fn.maskbrphone = function() {

        var plugin = this;

        var init = function() {

            return plugin.each( function() {
                $(this).val(applyMask($(this).val()));

                $(this).keyup(function() {
                    $(this).val(applyMask($(this).val()));
                });
            });
        };

        var applyMask = function(input) {

            var fone = input
                    .replace(/\D/g, '') // Remove tudo o que não for dígito
                    .substring(0, 11); // Limita em 11 caracteres (com prefixo local);

            // numero: 1199998888
            var prefixLimit  = fone.length <= 10 ? 6 : 7,
            	prefixLength = fone.length <= 10 ? 4 : 5,
            	ddd     = fone.substring(0, 2),
            	prefix  = fone.substring(2, prefixLimit),
            	suffix  = fone.substring(prefixLimit, fone.length);

        	if(ddd.length == 2) {
        		ddd += ') ';
        	}

        	if(prefix.length == prefixLength) {
        		prefix += '-';
        	}

            var maskedPhone = fone.length?'('+ddd+prefix+suffix:'';

            return maskedPhone;
        };

        init();

    };

}(jQuery));
