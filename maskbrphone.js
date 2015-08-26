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
                    .substring(0, 11); // Limita em 11 caracteres;
            
            var maskedPhone;
            
            if (fone.length <= 9) {
                // Coloca hífen quando o número NÃO possui DDD
                maskedPhone = fone.replace(/(\d{4}|\d{5})(\d{1,4})$/g, '$1-$2');
        	} else {
            	// Coloca hífen e parênteses quando o número possui DDD
            	maskedPhone = fone.replace(/(\d{2})?(\d{4}|\d{5})(\d{4})$/g, '($1)$2-$3')
            }
            
            return maskedPhone;
        };

        init();

    };

}(jQuery));