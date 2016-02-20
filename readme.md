maskbrphone
===========

Plugin jQuery que mascara telefones com nove e oito dígitos. Principais caracterísicas:

- É possível configurar se o usuário deve ou não digitar o DDD
- Reconhece automaticamente telefones celulares com o nono dígito
- Permite a personalização dos separadores

Colaborações serão bem-vindas!

Exemples de utilização
======================

**HTML:**

`<input type="text" class="celular" />`

**Javascript:**

Forma mais simples de utilização

`$('.celular').maskbrphone();`

Personalizando o funcionameno do plugin

`$('.celular').maskbrphone({
    useDdd: true,
    useDddParenthesis: true,
    dddSeparator: ' ',
    numberSeparator: '-'
});`
