# Flex box
Tambien llamado diseño de caja flexible, es un modelo de diseño de CSS. 
En palabras más simples nos permite posicionar elementos del DOM dentro de una caja que podemos manejar a nuestro antojo.

[Ejemplo en codepen](https://codepen.io/crisronda/pen/BaQqxQQ)


## `display: flex`
Esta propiedad pondrá nuestros elementos en ***inline*** es decir en fila. 

## `flex-direction`
Esta prpopiedad nos permite cambiar la orientación de nuestros elementos, ya que al agregar `display: flex` se pondra en fila o `row`, para cambiar esta orientación agregamos: 
```css
  .contenedor{
    display: flex;
    flex-direction: column;
  }
```

## `justify-content`
Esta propiedad alineará nuestros elementos en el eje Y, puedes probar sus diferentes variaciones como: `center, space-between, etc`. 
Esta propiedad cambia el eje de referencia cuando se cambia la orientación de la caja con `flex-direction`.
```css
  .contenedor{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
```
## `align-items`
Esta propiedad alineará nuestros elementos al centro en el eje X,  puedes probar sus diferentes variaciones como: `center, flex-start, flex-end etc`.
Esta propiedad, al igual que `align-items`,   cambia el eje de referencia cuando se cambia la orientación de la caja con `flex-direction`.
```css
  .contenedor{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
```


## `flex-wrap`
Esta propiedad permite al contenedor de los elementos ubicarlos automaticamente dentro de este, así evitamos desboramientos o elementos que se salgan de nuestro contenedor.
```css
  .contenedor{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  }
```


## Ejemplo
Para esto vamos a generar el siguiente template en HTML:
```html
<div class='contenedor'>
  <div class='item verde'>1</div>
  <div class='item azul'>2</div>
  <div class='item rojo'>3</div>
</div>
</div>
```

Para poder utilizar flexbox debemos declarar en nuestra clase: 
```css
.contenedor{
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
  justify-content: center;
}
.item {
  background-color: #f1f1f1;
  width: 100px;
  color: white;
}

.verde{
  background: green;
}
.azul{
  background: blue;
}
.rojo{
  background: red;
}
```