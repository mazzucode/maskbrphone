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
                    .substring(0, 9); // Limita a 9 caracteres;

            var masked_phone;

            if (fone.length <= 8) {
                // Coloca hífen entre o quarto e o quinto dígitos
                masked_phone = fone.replace(/(\d{4})(\d{1,4})/, '$1-$2');
            } else {
                // Coloca hífen entre o primeiro e o segundo e o quinto e o sexto dígitos
                masked_phone = fone.replace(/(\d{1})(\d{1,4})(\d{1,4})/, '$1-$2-$3');
            }

            return masked_phone;
        };

        init();

    };

}(jQuery));