# Bienvenido a React! 

Vamos a ver los hooks más usados en esta excelente librería

## useState
Nos ayuda a manejar el estado dentro de un componente
Puedes ver como funciona en el [archivo](./src/example/UseState.js)

## useEffect 
Nos ayuda a manejar los efectos secundarios dentro de nuestros componentes.
No olvides que este hook funciona durante 3 momentos del ciclo de vida de un componente: 
- Cuando se monta
- Cuando se necesita actualizar
- Cuando el componente se desmonta 

Para ver su funcionamiento, mira el [archivo](./src/example/UseEffect.js)


## useCallback
Este hook sirve para memorizar la definición de algun método que sea pesado o asincrono. 

## useMemo 
Este hook sirve para memorizar un valor que sea dificil o que requiera de computo pesado por ejemplo un filtro de un array o la suma de muchisimos numeros.

## useContext
Este hook sirve para gestionar un estado global, se podría decir que es un useState con super poderes y ademas, que esta disponible en cualquier lugar de nuestra app