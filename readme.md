maskbrphone
===========

Plugin jQuery que mascara telefones com nove dígitos.

Colaborações serão bem-vindas!

Quando digitado um número de 8 dígitos, ele é formatado para: (DD) DDDD-DDDD, por exemplo:
(11) 3224-3100

Já números de 9 dígitos são formatados para: (DD) DDDDD-DDDD, por exemplo: (11) 98600-5200

Forma de utilização
===================

**HTML:**

`<input type="text" name="telefone" id="telefone" class="celular" />`

**Javascript:**

`$('#telefone').maskbrphone()`

Ou

`$('.celular').maskbrphone()`
