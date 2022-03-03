/* Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
Retorna el array resultante. */


let colores = ['Azul','Rojo','Amarillo','Verde'];
const swap = (array,firstIndex,secondIndex) => {
    
[array[firstIndex], array[secondIndex]] = [array[secondIndex],array[firstIndex]]
  console.log(array)
}

swap(colores,0,3);