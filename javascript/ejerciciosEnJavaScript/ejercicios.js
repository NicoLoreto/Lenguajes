//ENCONTRAR PALABRA MAS LARGA

/*Devuelve la longitud de la palabra más larga en la oración proporcionada.
Tu respuesta debe ser un número.*/

function findLongestWordLength(str) {
 let palabrasSeparadas = str.split(" ");
 let palabraMasLarga = palabrasSeparadas[0];
 for (palabra of palabrasSeparadas){
   if (palabra.length >= palabraMasLarga.length){
    palabraMasLarga=palabra;
   }
 }
 return palabraMasLarga.length
}

console.log (findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//recordar que return va fuera del if y del for

/*Primero convertimos la cadena a arreglo.
Luego definimos la palabra más larga, que al inicio de todo será la primera palabra del arreglo. 
Esto es solo para inicializarla, solo estamos intuyendo; ya que la variable debe tener un valor inicialmente.
Ahora recorremos las palabras. Por cada palabra comparamos si la misma es más larga que la cadena más larga hasta el momento, y 
en caso de que sí entonces ahora la palabra más larga hasta el momento es la palabra actual.
Al final de todo regresamos la palabra más larga, que va a contener la más larga de todo el arreglo pues para ese punto ya habremos 
terminado de recorrerlo. Para que devuelva un numero uso .length.
*/

//EJ 

const palabraMasLarga = cadena => {
  // https://parzibyte.me/blog
  // Separar por espacios
  const separadaPorEspacios = cadena.split(" ");
  // Suponer que la palabra más larga es la primera, para poder inicializar la variable
  let palabraMasLarga = separadaPorEspacios[0];
  // Recorrer e ir comparando
  for (const palabra of separadaPorEspacios) {
      if (palabra.length >= palabraMasLarga.length) {
          palabraMasLarga = palabra;
      }
  }
  return palabraMasLarga;
};

/*DEVUELVE LOS NUMEROS MAYORES DE UN ARREGLO

Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el 
arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis 
arr[i].
*/

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*
Confirma el final

Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, 
nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.
*/

function confirmEnding(str, target) {
  let seleccion = str.slice(str.length - target.length);
  if (seleccion == target){
    return true
  }else{
    return false
  }
    }


  console.log(confirmEnding("Basma", "cama"));

/* slice() copia o extrae un número determinado de 
elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el 
que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, 
  pero sin incluir el elemento en este índice).

  a slice le puedo poner solo un numero de parametro y sacara el o los elementos en orden, si es positivo de adelante hacia atras y si
  es negativo desde atras hacia adelante.
  el menos (-) lo que hace es decir: la cantidad de indices que hay a la derecha (cama, o sea 4) los extraigo de la izquierda 
  (basma, o sea asma)
  */

  /*
  Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no 
es un número positivo. Para este desafío, no utilices el método incorporado .repeat().
*/

function repeatStringNumTimes(str, num) {
  let array = [];
  for (let i=0; i<num;i++){
    if(num<0){
      return ""
    }
    array.push(str)
  }
  return array.join("")
}

console.log (repeatStringNumTimes("pusogato", 3));

/*RECORTA LA CADENA

Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
Devuelve la cadena recortada con un ... al final.*/

function truncateString(str, num) {
  let arreglo = [...str];
  arreglo.splice(num)
  if(num>=str.length){
    return arreglo.join("")
  }else{
  return arreglo.join("")+"..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 45));

/*Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". 
Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento 
pasa la prueba. la función debería devolver undefined.*/

//hice este, pero no me devovlvio undefined

function findElement(arr, func) {
  let array = []
 for(let i=0;i<=arr.length;i++){
   func(arr[i]) ? array.push(arr[i]) : undefined
   if (array.length === 1){
     break
   }
}
return array.join()
 }
console.log(findElement([1, 2, 3, 5], num => num % 2 === 0));

//este es el resultado, mucho mas sencillo, prestar atencion a donde cierran las llaves del for y el if para retornar

function findElement(arr, func) {
  let num=0;
 for(let i=0;i<=arr.length;i++){
   num=arr[i]
   if(func(num)){
     return num
   }
 }
 return undefined
}
console.log(findElement([1, 2, 3, 5], num => num % 2 === 0));

/*Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.*/

function booWho(bool) {
  if(bool===true){
  return bool;
  }else if (bool===false){
    return true
  }else{
    return false
  }
}

console.log(booWho(1));

/*Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en 
minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.*/

function titleCase(str) {
  // separo el string en un arr y lo asigno a una variable
  const nuevoTitulo = str.split(" ");
  // declaro un arr vacio
  const actualizo = [];
  // le asigno a actalizo el primer indice de cada elemento de nuevoTitulo haciendolo mayuscula y le sumo el resto del elemento en minuscula
  for (let i in nuevoTitulo) {
    actualizo[i] = nuevoTitulo[i][0].toUpperCase() + nuevoTitulo[i].slice(1).toLowerCase();
  }
  //retorno haciendolo string de nuevo
  return actualizo.join(" ");
}
console.log(titleCase("A VER QUE ONDA"))

/*
Cortar y rebanar
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
*/

function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

console.log (frankenSplice([1, 2, 3], [4, 5, 6], 1));