# maskbrphone

Plugin jQuery que mascara telefones com nove e oito dígitos. Principais caracterísicas:

- É possível configurar se o usuário deve ou não digitar o DDD
- Reconhece automaticamente telefones celulares com o nono dígito
- Compatível com dispositivos mobile
- Permite a personalização dos separadores

Colaborações serão bem-vindas!

### Forma de utilização

#### HTML

```html
<input type="text" class="celular" />
```

#### Javascript

##### Forma mais simples de utilização

```javascript
$('.celular').maskbrphone();
```

##### Personalizando o funcionameno do plugin

```javascript
$('.celular').maskbrphone({  
    useDdd           : true, // Define se o usuário deve digitar o DDD  
    useDddParenthesis: true, // Informa se o DDD deve estar entre parênteses  
    dddSeparator     : ' ',  // Separador entre o DDD e o número do telefone  
    numberSeparator  : '-'   // Caracter que separa o prefixo e o sufixo do telefone  
});
```
