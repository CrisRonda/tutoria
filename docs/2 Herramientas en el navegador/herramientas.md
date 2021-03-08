# Herramientas en el navegador

## Inspector de elementos
El inspector de elementos nos permite revisar de manera muy facil los estilos y estructura de nuestro HTML. Además podemos editar el CSS dentro del navegador sin necesidad de ir a nuestro archivo CSS.
<img src="https://developers.google.com/web/tools/chrome-devtools/inspect-styles/imgs/elements-panel.png?hl=es" alt="ins-el" />

## Consola del navegador
La consola es una herramienta potente para revisar nuestro JS, desde aquí podemos interactuar con las variables del navegador como el objeto global `window`. Generalmente aqui aparecen alertas o mensajes de error. 
También, el programador puede enviar mensajes desde su código para validar lo que está realizando.

<img src="https://developers.google.com/web/tools/chrome-devtools/console/images/overviewlogging.png" alt='console' />

## Revisión de peticiones Network
Herramienta nativa de cualquier navegador ya que nos permite revisar las peticiones que realizamos hacia nuestros endpoints. 
Aquí podemos ver las cabeceras HTTP que enviamos, el body, autenticación, content type, entre otras propiedades [si quieres saber más puedes revisar aquí](https://es.wikipedia.org/wiki/Anexo:Cabeceras_HTTP)
Esta herramienta puede filtrar: 
- XHR: son peticiones que se realizan hacia un servidor por lo general basada en texto como: JSON. XML ó HTML.
- JS: Permite ver las peticiones de archivos JS
- CSS: Permite ver las peticiones de archivos CSS

<img src='https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/blockedstyles.png' alt='network'/>

