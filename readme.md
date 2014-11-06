maskbrphone
===========

Plugin jQuery que mascara telefones com nove dígitos.

Como tem sido uma necessidade reincidente em minhas aplicações, apesar de
Javascript e jQuery não serem o meu forte, resolvi criar este plugin, seu
funcionamento é bastante simples.

Colaborações serão bem-vindas!

Quando digitado um número de 8 dígitos, ele é formatado para: DDDD-DDDD, por exemplo:
3224-3100

Já números de 9 dígitos são formatados para: D-DDDD-DDDD, por exemplo: 9-8600-5200

Forma de utilização
===================

**HTML:**

`<input type="text" name="telefone" id="telefone" class="celular" />`

**Javascript:**

`$('#telefone').maskbrphone()`

Ou

`$('.celular').maskbrphone()`