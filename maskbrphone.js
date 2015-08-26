/**
*  maskbrphone for jQuery, version 1.0.0
*  (c) 2014 Márcio Simão (https://github.com/masimao)
*
*  maskbrphone for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/masimao/maskbrphone
*/
(function($) {

    $.fn.maskbrphone = function(options) {

    	var defaults = {
    		dddParenthesis : true,
            dddSeparator : '',
            numberSeparator : '-'
        };

        var settings = $.extend( {}, defaults, options );
    	
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
                maskedPhone = fone.replace(/(\d{4}|\d{5})(\d{1,4})$/g, '$1' + settings.numberSeparator + '$2');
        	} else {
        		var replacement = '';
        		if (settings.dddParenthesis) {
        			replacement += '($1)'
        		} else {
        			replacement += '$1'
        		}
        		replacement += settings.dddSeparator;
        		replacement += '$2';
        		replacement += settings.numberSeparator;
        		replacement += '$3';
        		
            	// Coloca hífen e parênteses quando o número possui DDD
            	maskedPhone = fone.replace(/(\d{2})?(\d{4}|\d{5})(\d{4})$/g, replacement);
            }
            
            return maskedPhone;
        };

        init();

    };

}(jQuery));