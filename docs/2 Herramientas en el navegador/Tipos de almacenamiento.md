# Tipos de almacenamiento

Existen algunos tipos de almacenamiento que nos ofrecen los navegadore, pero nos concentraremos en 2 en específico:

## Cookies
Nos permite guardar una pequeña información enviada por un sitio web y almacenada en el navegado, de manera que el sitio web puede consultar la actividad previa del navegador. Por lo general estas cookies tienen una fecha de expiración.

Para poder crear datos en las cookies lo podemos hacer de la siguiente manera:
```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

Para leer una cookie: 
```js
const data = document.cookie;
console.log(data) // "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"
```


## Local storage
Nos permite guardar información, como cadena de texto, en el disco del computador y dicha información no tiene fecha de expiración. Además, podemos acceder a esta información entre ventanas/tabs con el mismo origen.

Para acceder al `localStorage` lo podemos realizar con JS de la siguiente manera: 
```js
// Crear un item
localStorage.setItem('miData', 'Hola mundo');

// Leer un item
const data =localStorage.getItem('miData');
console.log(data) //Hola mundo

// Borrar un item
localStorage.removeItem('miData');
```