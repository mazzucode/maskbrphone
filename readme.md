# maskbrphone

Plugin jQuery que mascara telefones com nove e oito dígitos. Principais caracterísicas:

- É possível configurar se o usuário deve ou não digitar o DDD
- Reconhece automaticamente telefones celulares com o nono dígito
- Compatível com dispositivos mobile
- Permite a personalização dos separadores
- Extremamente pequeno, apenas 1Kb

Colaborações serão bem-vindas!

### Exemplos de utilização

[Acesse este link para ver o funcionamento (demo) do plugin](https://jsfiddle.net/masimao/ovnhpsww)

#### HTML

```html
<input type="text" class="telefone" />
```

#### Javascript

##### Forma mais simples de utilização

```javascript
$('.telefone').maskbrphone();
```

##### Personalizando o funcionameno do plugin

```javascript
$('.telefone').maskbrphone({  
    useDdd           : false, // Define se o usuário deve digitar o DDD  
    useDddParenthesis: true,  // Informa se o DDD deve estar entre parênteses  
    dddSeparator     : ' ',   // Separador entre o DDD e o número do telefone  
    numberSeparator  : '-'    // Caracter que separa o prefixo e o sufixo do telefone  
});
```
