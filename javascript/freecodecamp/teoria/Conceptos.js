/*METODOS EN ARRAY

FUNCIONES DE ORDEN SUPERIOR

como primer parametro recibiran una funcion principal donde se escribe la logica, deberia ser una funcion pura (sin efectos secundarios,
retornando siempre los mismos parametros).

MAP
trasforma
cuando tenemos un array y queremos obtener otro array de otra cosa. transformo los elementos del array */

//const numeros = [3,10,20,50];
//const dobles = numeros.map (function (numero,posicion,numeros){})
    //function: funcion trasformadora
    //numero: asigna la funcion a trasformar
    //posicion: la posicion en el array
    //numeros nos se suele usar

    //generalmente se usa para modificar un elemento de array original. la funcion puede escribirse como
    //function (_, posicion), porque solko nos ineteresa la posicion


const numeros = [3,10,20,50]; 
const dobles = numeros.map (function(numero){
    return numero*2
})

console.log (dobles)

//FILTER
//define por cada elemento si pasa o no al nuevo array. el resultado es un nuevo array con los elementos
//que cumplan cierta condicion. PREDICADO

const productos = [
    {
        id: "jsk",
        nombre: "camisa",
        precio: 500
    },
    {
        id: "15b",
        nombre: "zapatillas",
        precio: 2000
    },
    {
        id:"34rr",
        nombre: "pantalon",
        precio: 1500
    }

];

const esBarato = (producto) => producto.precio < 1000;//"producto" es cada objeto, puede ser cualquier nombre
const productosBaratos = productos.filter (esBarato);

console.log (productosBaratos)

//REDUCE
//necesita un array y un valor inicial
//opera con un elemento a la vez hasta llegar a un unico resultado
// el primer parametro sera la funcion reductora, la que actualiza el acumulador y el segundo es el valor inicial
//del acumulador. la funcion reductora recibe como primer parametro el acumulador
//(el valor que tiene el acumulador antes de girar la palanca)

const numerosArray = [3,10,20,50];
const acumular = (acumulador, numero) => acumulador + numero;

//la funcion acumular recibe recibe los parametros acumulador y numero. y desp retorna el nuevo valor acumulado

let total = numerosArray.length > 0 ? numerosArray.reduce (acumular, 0) : "el array esta vacio";//lenght se pone para que lo haga si el 
//array no esta vacio

console.log (total)

//CLASE
//define las caracteristicas del objeto
//Objeto: una instancia de una clase
//Popiedad: una caracteristica del obj.
//Metodo: una capacidad del obj.
//Constructor: metodo llamado en el momento de la creacion de instancias

function Persona (){

}

let persona = new Persona
//instancia de la clase Persona
//llemo a la clase para acceder a sus metodos


function Persona (nombre, edad, lugarDeNacimiento){
    this.nombre = nombre;
    this.edad = edad;
    this.lugarDeNacimiento = lugarDeNacimiento;
}

let nico = new Persona ("Nico", 32, "Pergamino")

console.log (nico);

let noe = new Persona ("Noe", 33, "Pergamino")

console.log (noe);

//FUNCION RECURSIVA
//Una funci??n recursiva es una funci??n que se llama a s?? misma hasta que se interrumpe. Una funci??n 
//recursiva siempre tiene una condici??n que evita que la funci??n se llame a s?? misma en alg??n momento.
//le damos a la funci??n una condici??n conocida como caso base.
//El caso base es la condici??n que le dice a la funci??n cuando dejar de llamarse a s?? misma
//lo primero que hicimos fue definir el caso base. ??Por qu??? Porque la funci??n primero que nada necesita saber 
//cu??ndo dejar?? de llamarse a s?? misma.

let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1


/*Si continuamente restamos dos a un n??mero hasta que el n??mero m??s peque??o sea 0(cero) o 1(uno) 
entonces podemos saber si el n??mero es par o impar.

Intentemos eso con recursi??n. Entonces, dado el n??mero 6, nuestro programa deber??a devolver 'Par' 
porque 6-2-2-2 = 0. Dado 7, nuestro programa deber??a devolver 'impar' porque 7-2-2-2 = 1.*/

let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log(parImpar(20)) // Par
console.log(parImpar(75)) // Impar
console.log(parImpar(98)) // Par
console.log(parImpar(113)) // Impar


console.log([2,3,4,5], 3-1)

// EJERCICIO PARA BUSCAR PROP Y VALORES EN UN ARREGLO
//es importante usar un bucle para automatizar cada busqueda
//con in puedo saber si un elemento est'a dentro de un arr u obj
//primero rastreo tosos los indices con la i. por eso.length
//en cada arr va a buscar

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  

  }
  
  console.log (lookUpProfile("Sherlock", "Holmes"));

//CUANDO NO TENGO QUE RETORNAR ES PORQ ME OLVIDE DE DECLARAR LA VAR

//Radix (Base)
/*La funci??n parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), 
que especifica la base del n??mero representado en la cadena. La base (radix) puede ser un n??mero entero entre 2 y
 36.

La llamada a la funci??n se realiza de la siguiente manera:

parseInt(string, radix);
Y aqu?? hay un ejemplo:

const a = parseInt("11", 2);
La variable radix indica que 11 est?? en el sistema binario, o base 2. Este ejemplo convierte la cadena 11 a
 un entero 3.

Utiliza parseInt() en la funci??n convertToInteger para convertir un n??mero binario en un n??mero entero, y 
devolverlo.*/

//UNSHIFT
//.unshift() funciona exactamente como .push(), pero en lugar de a??adir el elemento al final del arreglo, 
//unshift() a??ade el elemento al principio del arreglo.

function countdown(n){
    if (n<1){
      return []
    }else{
      const cuenta = countdown(n-1);
      cuenta.unshift(n);
      return cuenta;
    }
    
  
  }
  console.log (countdown(10));

  function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum){
      const rango =  rangeOfNumbers(startNum+1, endNum);
      rango.unshift(startNum)
      return rango
    }else{
    return [];}
  };

  console.log (rangeOfNumbers(4,20))

  //Si una funci??n flecha tiene un solo par??metro, los par??ntesis que encierran el par??metro pueden ser omitidos.

  const doubler = item => item * 2;

  //VALOR MAXIMO
  //para calcular el valor m??ximo en un arreglo

//const arr = [6, 89, 3, 45];
//const maximus = Math.max(...arr);

//maximus tendr??a un valor de 89.
//...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, 
//el operador de propagaci??n s??lo funciona en el lugar, como en un argumento de funci??n o en un arreglo 
//literal

//DESESTRUCTURACION
//para asignar los valores directamente desde un objeto.
//Aqu??, las variables name y age ser??n creadas y se asignar??n los valores respectivos a partir del objeto user. Puedes observar que esto es mucho m??s limpio.
//Puedes extraer tantos o pocos valores del objeto como desees.

const user = { name: 'John Doe', age: 34 };
const { name } = user;
console.log (user)

/*La desestructuraci??n te permite asignar un nuevo nombre de variable al extraer valores. 
Puedes hacer esto al poner el nuevo nombre despu??s de dos puntos al asignar el valor.*/

/*const user = { name: 'John Doe', age: 34 };
As?? es como puedes dar nuevos nombres de variables en la asignaci??n:

const { name: userName, age: userAge } = user;
Puedes leerlo como "obt??n el valor de user.name y as??gnalo a una nueva variable llamada userName" 
y as?? sucesivamente. El valor de userName ser??a la cadena John Doe, y el valor de userAge ser??a el n??mero 34.*/

/*desestructuraci??n para asignar variables desde objetos anidados
Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos 
anidados.

Usando un objeto similar a los ejemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
As?? es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;
Y as?? es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user

Reemplaza las dos asignaciones con una sintaxis de desestructuraci??n equivalente. Todav??a deben seguir asignando 
las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST.*/

const LOCAL_FORECAST = {
  yesterday: { 
    low: 61, 
    high: 75 
  },
  today: { 
    low: 64, 
    high: 77 
    },
  tomorrow: { 
    low: 68, 
    high: 80 
    }
};

// Cambia solo el c??digo debajo de esta l??nea

const {today: {low: lowToday, high:highToday}} =  LOCAL_FORECAST;

// Cambia solo el c??digo encima de esta l??nea

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el c??digo debajo de esta l??nea

  const list = [...arr]; // Cambia esta l??nea

  // Cambia solo el c??digo encima de esta l??nea
  return arr;
}
const arr = removeFirstTwo(source);

console.log (source)

//funciones breves y declarativas
//eliminar la palabra clave function y los dos puntos al definir funciones en objetos. Aqu?? hay un 
//ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


/* la palabra clave class declara una nueva funci??n, a la cual se a??ade un constructor. 
Este constructor se invoca cuando new es llamado para crear un nuevo objeto.*/

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

//El m??todo constructor es un m??todo especial para crear e inicializar un objeto creado con una clase.

//getters y setters.

//obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

/*Las funciones getter est??n destinadas a simplemente devolver (get) el valor de la variable privada de un objeto 
al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter est??n destinadas a modificar (set) el valor de la variable privada de un objeto basado en 
el valor pasado a la funci??n setter. Este cambio podr??a implicar c??lculos, o incluso sobrescribir completamente el 
valor anterior.*/

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//TEST

/*Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresi??n 
regular: /the/. Ten en cuenta que las comillas no son requeridas dentro de la expresi??n regular.

JavaScript tiene m??ltiples formas de usar expresiones regulares. Una forma de probar una expresi??n regular es 
usando el m??todo .test(). El m??todo .test() toma la expresi??n regular, la aplica a una cadena (que se coloca 
  dentro de los par??ntesis), y devuelve true o false si tu patr??n encuentra algo o no.*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

//El m??todo test aqu?? devuelve true.*/

/*Puedes buscar m??ltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o despu??s de ??l. Por ejemplo, si deseas coincidir con las cadenas 
yes o no, la expresi??n 
regular que quieres es /yes|no/.

Tambi??n puedes buscar m??s de dos patrones. Puedes hacer esto a??adiendo m??s patrones con m??s operadores OR 
separ??ndolos, como /yes|no|maybe/.*/

/* BANDERA i
para ignorar la capitalizacion se usa la bandera i
Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero aqu?? te centrar??s en 
la que ignora la capitalizaci??n de las letras, la bandera i. Puedes usarla a??adi??ndola a la expresi??n regular. 
Un ejemplo de uso de esta bandera es /ignorecase/i. 
Esta expresi??n regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.*/

/*Para utilizar el m??todo .match(), aplica el m??todo a una cadena y pasa la expresi??n regular dentro de los 
par??ntesis.

Este es un ejemplo:*/

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
//Aqu?? el primer match devolver?? ["Hello"] y el segundo devolver?? ["expressions"].

//Ten en cuenta que la sintaxis .match es lo "opuesto" al m??todo .test que has estado utilizando hasta ahora:

/*'string'.match(/regex/);
/regex/.test('string');

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aqu?? match devolver?? ["Repeat"].*/

/*BANDERA g

Para buscar o extraer un patr??n m??s de una vez, puedes utilizar la bandera g.*/

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

//Y aqu?? match devuelve el valor ["Repeat", "Repeat", "Repeat"]

/*El car??cter de comod??n . coincidir?? con cualquier car??cter ??nico. El comod??n tambi??n es llamado dot y period. 
Puedes utilizar el car??cter de comod??n como cualquier otro car??cter en la expresi??n regular. Por ejemplo, si 
quieres hacer coincidir hug, huh, hut, y hum, puedes usar la la expresi??n regular /hu./ para que coincida con 
las cuatro palabras.*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//Ambas llamadas a test devolver??n true.*/

/*Completa la expresi??n regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. 
Tu expresi??n regular debe usar el car??cter de comod??n.*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta l??nea
let result = unRegex.test(exampleStr);

/*
Puedes buscar un patr??n literal con cierta flexibilidad utilizando las clases de caracteres. Las clases de 
caracteres te permiten definir un grupo de caracteres que deseas coincidir coloc??ndolos dentro de corchetes 
([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear la expresi??n regular 
/b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que solo coincidir?? con los caracteres a, i, o u.*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//En orden, las cuatro llamadas de match devolver??n los valores ["big"], ["bag"], ["bug"], and null.

/*Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresi??n regular vowelRegex para encontrar 
todas las vocales en la cadena quoteSample.

Nota: Aseg??rate de hacer coincidir tanto las vocales may??sculas como min??sculas.*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //Cambia esta l??nea
let resultado = quoteSample.match(vowelRegex); // Cambia esta l??nea 

//RECORDAR QUE LAS BANDERAS VAN FUERA DE LA BARRA /. SI ESCRIBO DENTRO LO TOMAR COMO CARACTER.
//POR EJ. SI QUIERO BUSCAR HUMOS /H[U]M[O]S/GI

/*Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un car??cter de 
guion: -.

Por ejemplo, para hacer coincidir las letras min??sculas desde la a a la e usar??as [a-e].*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRRegex);
matStr.match(bgRRegex);

//En orden, las tres llamadas a match devolver??n los valores ["cat"], ["bat"] y null.

/*Tambi??n funciona para hacer coincidir un rango de n??meros.

Por ejemplo, /[0-5]/ coincide con cualquier n??mero entre 0 y 5, incluyendo 0 y 5.

Adem??s, es posible combinar un rango de letras y n??meros en un ??nico conjunto de caracteres.*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

/*
/w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras may??sculas y min??sculas 
m??s n??meros. 
Ten en cuenta que esta clase de caracteres tambi??n incluye el car??cter de gui??n bajo (_).
*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//Las cuatro llamadas a test devolver??n true.

//.W es lo contrario de \w 
// el patr??n contrario usa letra may??scula. Este atajo es lo mismo que [^A-Za-z0-9_].

/*
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
El primer match devuelve el valor ["%"] y el segundo devuelve ["!"].
*/

//Estos atajos de clases de caracteres tambi??n son conocidos como clases de caracteres abreviados.

//\d
//atajo para buscar caracteres de d??gitos. Esto es igual a la clase de caracteres [0-9], la cual busca un solo 
//car??cter de cualquier n??mero entre cero y nueve.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta l??nea
let resuuult = movieName.match(numRegex).length;

//El atajo para buscar caracteres que no sean d??gitos es \D. Esto es igual a la clase de caracteres [^0-9], 
//el cual busca un ??nico car??cter que no sea un n??mero entre cero y nueve.

let movieeName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta l??nea
let ressult = movieeName.match(noNumRegex).length;

/*tambi??n podr??as crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos de caracteres se 
llaman conjuntos de caracteres negados.

CARET

Para crear un conjunto de caracteres negados colocas un car??cter de intercalaci??n (^) despu??s del corchete de 
apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en cuenta que caracteres 
como ., !, [, @, / y el espacio en blanco coinciden; el conjunto de caracteres de vocal negados s??lo excluye los 
caracteres de vocal.

Crea una sola expresi??n regular que coincida con todos los caracteres que no son un n??mero o una vocal. Recuerda 
incluir las banderas apropiadas en la expresi??n regular.*/

let quoteSamples = "3 blind mice.";
let myRegexx = /[^0123456789aeiou]/gi; // Cambia esta l??nea
let resultt = quoteSamples.match(myRegexx); // Cambia esta l??nea


//Fuera de un conjunto de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

/*La primera llamada test devolver?? true, mientras que la segunda retornara false.


Puedes buscar el final de las cadenas usando el car??cter del signo de d??lar $ al final de la expresi??n regular.*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

//La primera llamada a test devuelve true, mientras que la segunda retorna false.

/*coincidir con un car??cter (o grupo de caracteres) que aparezca una o m??s veces seguidas. Esto significa que 
aparece al menos una vez, y puede repetirse.

Puedes usar el car??cter + para comprobar si es as??. Recuerda, el car??cter o patr??n debe estar presente 
consecutivamente. Es decir, el car??cter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontrar??a una coincidencia en abc y regresar??a ["a"]. Debido al +, tambi??n encontrar??a 
una sola coincidencia en aabc y regresar??a ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrar??an dos coincidencias y regresar??a ["a", "a"] 
porque los caracteres a no est??n en fila; hay una b entre ellos. Finalmente, dado que no hay una a en la cadena 
bcd, no se encontrar??a una coincidencia.*/

let difficultSpelling = "Mississippi";
let myRegeex = /s+/gi; // Cambia esta l??nea
let resuult = difficultSpelling.match(myRegeex);

/*Tambi??n hay una opci??n para hacer coincidir caracteres que aparecen cero o m??s veces.

El car??cter que hace esto es el asterisco o la estrella: *
.*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;


soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

//En orden, los tres match devolver??n los valores ["goooooooo"], ["g"], y null.

//Recuerda que se utiliza el signo m??s + para buscar uno o m??s caracteres y el asterisco * para buscar cero o m??s caracteres. 

/*
coincidencia perezosa encuentra la parte m??s peque??a posible de la cadena que satisface el patr??n de 
la expresi??n regular.

Puedes aplicar la expresi??n regular /t[a-z]*i/ a la cadena "titanic". Esta expresi??n regular es b??sicamente un 
patr??n que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolver??a ["titani"]. Encuentra 
la sub-cadena m??s grande posible que se ajusta al patr??n.

Sin embargo, puedes usar el car??cter ? para cambiarla a una coincidencia perezosa. "titanic" al coincidir con la 
expresi??n regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

Nota: Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una cadena HTML 
utilizando expresiones regulares est?? completamente bien.

Corrige la expresi??n regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is c
oming</h1>". Recuerda que el comod??n . en una expresi??n regular coincide con cualquier car??cter.*/

let text = "<h1>Winter is coming</h1>";
let myRegeeex = /<.*?>/; // Cambia esta l??nea
let resulttt = text.match(myRegeeex);

/*
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad ??nica 
en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los 
usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario s??lo pueden utilizar caracteres alfanum??ricos.

Los ??nicos n??meros del nombre de usuario tienen que estar al final. Puede tener un cero o m??s al final. El nombre 
de usuario no puede iniciar con un n??mero.

Las letras del nombre de usuario pueden ser min??sculas y may??sculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres s??lo puede 
utilizar letras del alfabeto como caracteres.

Cambia la expresi??n regular userCheck para que se ajuste a las restricciones indicadas anteriormente.*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Cambia esta l??nea
let reesult = userCheck.test(username);

/* hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s min??scula. Este patr??n no solo coincide con 
los espacios en blanco, tambi??n con los caracteres de retorno de carro, tabulaciones, alimentaci??n de formulario
 y saltos de l??nea. Puedes pensar que es similar a las clases de caracteres 

*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

//Esta llamada a match debe devolver [" ", " "].

/*Busca caracteres que no sean espacios en blanco usando \S, la cual es una s may??scula. Este patr??n no coincidir?? 
con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentaci??n de formulario y saltos de 
l??nea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v].*/

let whiteeSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteeSpace.match(nonSpaceRegex).length;

//El valor devuelto por el m??todo .length ser??a 32.

/*
Puedes especificar el n??mero inferior y superior de patrones utilizando especificadores de cantidad. Para los especificadores de cantidad 
utilizamos llaves ({ y }). Pon dos n??meros entre las llaves - para el n??mero inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresi??n regular debe ser /a{3,5}h/.*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

//La primera llamada a test devuelve true, mientras que la segunda devuelve false.

/*
Para especificar s??lo el n??mero inferior de patrones, mant??n el primer n??mero seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, la expresi??n regular 
ser??a /ha{3,}h/.
*/

let Aa4 = "haaaah";
let Aa2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleAa = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

//En orden, las tres llamadas a test devuelven true, false y true.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta l??nea
let resssult = haRegex.test(haStr);

/*
Para especificar un cierto n??mero de patrones, simplemente pon ese n??mero entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresi??n regular sera /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
En orden, las tres llamadas a test devuelven false, true y false.
*/

/*Puedes especificar la posible existencia de un elemento con un signo de interrogaci??n, ?. Esto comprueba cero o uno de los elementos 
precedentes. Puedes pensar que este s??mbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en ingl??s americano y brit??nico y puedes usar el signo de interrogaci??n para coincidir con ambas 
ortograf??as.*/

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

//Ambos usos del m??todo test devolver??n true.

/*Utiliza los lookaheads en el pwRegex para que coincida con las contrase??as que tengan m??s de 5 caracteres y dos d??gitos 
consecutivos.*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Cambia esta l??nea
let reeesult = pwRegex.test(sampleWord);

/*A veces queremos comprobar grupos de caracteres utilizando una expresi??n regular y para conseguirlo usamos par??ntesis ().

Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresi??n regular: /P(engu|umpk)in/g

Luego, comprueba si los grupos de cadena deseados est??n en la cadena de prueba usando el m??todo test().
*/

let tesstStr = "Pumpkin";
let tesstRegex = /P(engu|umpk)in/;
tesstRegex.test(tesstStr);

//El m??todo test aqu?? devolver?? true.

//PALABRAS REPETIDAS

/*Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

let repeatStr = "row row row your boat";

Los grupos de captura se construyen encerrando entre par??ntesis el patr??n de expresi??n regular a capturar. En este caso, el objetivo es 
capturar una palabra formada por caracteres alfanum??ricos, por lo que el grupo de captura ser?? \w+ encerrado entre par??ntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresi??n 
regular utilizando una barra invertida y el n??mero del grupo de captura (por ejemplo, \1). Los grupos de captura se numeran 
autom??ticamente por la posici??n de sus par??ntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
El uso del m??todo .match() en una cadena devolver?? un arreglo con la subcadena coincidente, junto con sus grupos capturados.*/

//REPLACE
/*Puedes buscar y reemplazar texto en una cadena usando .replace() en una cadena. Las entradas para .replace() son primero el patr??n de 
expresiones regulares que deseas buscar. El segundo par??metro es la cadena para reemplazar la coincidencia o una funci??n para hacer 
algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
La llamada replace devolver?? la cadena The sky is blue..

Tambi??n puedes acceder a grupos de captura en la cadena de reemplazo con signos de d??lar. ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
La llamada replace devolver?? la cadena Camp Code.*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta l??nea
let replaceText = "$3 $2 $1"; // Cambia esta l??nea
let resuuuult = str.replace(fixRegex, replaceText);

/*
A veces no se quieren caracteres en espacios en blanco alrededor de 
las cadenas, pero est??n ah??. El proceso t??pico de las cadenas de texto es eliminar el espacio en blanco al 
inicio y al final del mismo.

Escribe una expresi??n regular y usa los m??todos de cadena apropiados para eliminar espacios en blanco al principio y al final de las 
cadenas.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Cambia esta l??nea
let resullt = hello.replace(wsRegex, ""); // Cambia esta l??nea

//tomo el espacio en blanco del principio ^ o el espacio en blanco del final $ y lo reemplazo por un espacio vacio ""

/*
typeof para comprobar la estructura de datos, o tipo, de una 
variable. 
Aqu?? hay algunos ejemplos que utilizan typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
En orden, la consola mostrar?? las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y 
BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. Ten en cuenta que en JavaScript, los arreglos son t??cnicamente un 
tipo de objeto.
*/

//SUMAR UN VALOR CON EL Q SIGUE EN UN ARRAY
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//SPLIT()
//separa los caracteres en elementos de un array

function pruebaSplit (texto){
  let mostrarArray = texto.split("");
 return mostrarArray;
}
console.log (pruebaSplit("otto"))
//[ 'o', 't', 't', 'o' ]

//REVERSE()
//da vuelta a los array

function pruebaReverse (texto){
  let mostrarReverse = texto.split("").reverse();
 return mostrarReverse;
}
console.log (pruebaReverse("gato"))

//JOIN
//une los elementos de un array en un string

function pruebaJoin (texto){
  let mostrarJoin = texto.split("").reverse().join("");
 return mostrarJoin;
}
console.log (pruebaJoin("gato"))

//EJ PALINDROMO

function compararTexto (texto){
  let palindromo = texto.split("").reverse().join("");
return texto === palindromo
}
console.log (compararTexto("anana"));

//INDEXSAR ELEMENTO DE UN ARREGLO A CUALQUIER COSA
let myyArray = ["a", "b", "c", "d"];

myyArray[1] = "Esta es la letra b";


console.log(myyArray);

//Array.push() y Array.unshift().

/*
Ambos m??todos toman uno o m??s elementos como par??metros y los agregan al arreglo que hizo la llamada; el m??todo 
push() agrega los elementos al final del arreglo, mientras que unshift() los agrega al inicio. Considera lo 
siguiente:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumerals tendr?? el valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumerals tendr?? el valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Ten en cuenta que tambi??n podemos pasar 
variables, que nos permiten una mayor flexibilidad en la modificaci??n din??mica de los datos de nuestro arreglo.
*/

//pop () y shift ()
/*
Tanto push() como unshift() tienen m??todos correspondientes que son casi opuestos funcionales: pop() y shift(). 
Como ya habr??s adivinado, en lugar de agregar, 
pop() elimina un elemento al final de un arreglo, mientras que shift() elimina un elemento al principio
*/

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
//greetings tendr?? el valor ['whats up?', 'hello'].

greetings.shift();
//greetings tendr?? el valor ['hello'].

//Tambi??n podemos devolver el valor del elemento eliminado con cualquiera de los dos m??todos as??:

let popped = greetings.pop();
//greetings tendr?? el valor [] y popped tendr??a el valor hello.

//splice(). splice()
//eliminar cualquier n??mero de elementos consecutivos de cualquier parte de un arreglo.

/*splice() puede tomar hasta 3 par??metros, pero por ahora, nos centraremos s??lo en los 2 primeros. Los primeros 
dos par??metros de splice() son enteros que representan ??ndices, o posiciones, de elementos en el arreglo a la que 
splice() est?? siendo llamado. Y recuerda que los arreglos est??n indexados en cero, por lo que para indicar el 
primer elemento de un arreglo, usar??amos 0. El primer par??metro de splice() representa el ??ndice del arreglo a 
partir del cual se empiezan a eliminar los elementos, mientras que el segundo par??metro indica el n??mero de 
elementos a eliminar. 
el primer indice se cuenta como a eliminar, por ej splice(2,3), el elemento que esta en el indice 2 sera eliminado junto a los dos 
siguientes.
Por ejemplo:
*/

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

/*Aqu?? eliminamos 2 elementos, comenzando con el tercer elemento (en el ??ndice 2). array tendr?? el valor 
['today', 'was', 'great'].

splice() no s??lo modifica el arreglo que llama, sino que tambi??n devuelve un nuevo arreglo que contiene el 
valor de los elementos eliminados:
*/

let arrray = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = arrray.splice(3, 2);
//newArray tiene el valor ['really', 'happy'].

/*
puedes usar el tercer par??metro del splice(), compuesto por uno o varios elementos, para agregarlo al arreglo. Esto puede ser 
incre??blemente ??til para cambiar r??pidamente un elemento, o un conjunto de elementos, por otro.
*/

const numberss = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numberss.splice(startIndex, amountToDelete, 13, 14);
console.log(numberss);

//La segunda ocurrencia de 12 es removida, y agregamos 13 y 14 en el mismo ??ndice. El arreglo numbers ahora ser?? 
//[ 10, 11, 12, 13, 14, 15 ].
/*
Aqu??, comenzamos con un arreglo de n??meros. A continuaci??n, pasamos lo siguiente a splice(): El ??ndice en el que empezar a borrar 
elementos (3), el n??mero de elementos a borrar (1), y el resto de argumentos (13, 14) se insertar??n a partir de ese mismo ??ndice. 
Ten en cuenta que puede haber cualquier n??mero de elementos (separados por comas) despu??s de amountToDelete, cada uno de los cuales es 
insertado.
*/

//slice()
/*
El siguiente m??todo que cubriremos es slice(). En lugar de modificar un arreglo, slice() copia o extrae un n??mero determinado de 
elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma s??lo 2 par??metros: el primero es el ??ndice en el 
que se inicia la extracci??n, y el segundo es el ??ndice en el que se detiene la extracci??n (la extracci??n se producir?? hasta el ??ndice, 
  pero sin incluir el elemento en este ??ndice). Considera esto:
  */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(2);
console.log (todaysWeather)

//todaysWeather tendr?? el valor ['snow', 'sleet'], mientras que weatherConditions todav??a tendr?? 
//['rain', 'snow', 'sleet', 'hail', 'clear'].

//operador de propagacion ...
//permite copiar f??cilmente todos los elementos de una arreglo, en orden.

//podemos utilizar el operador de propagaci??n para copiar un arreglo de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

//thatArray es igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos 
//que thisArray.

/*
Otra gran ventaja del operador de propagaci??n es la capacidad de combinar arreglos, 
o de insertar todos los elementos de un arreglo en otro, en cualquier ??ndice
*/
let thissArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thattArray = ['basil', 'cilantro', ...thissArray, 'coriander'];

//thatArray tendr?? el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

/*
indexOf(), que nos permite comprobar r??pida y f??cilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como 
par??metro, y cuando lo llama, devuelve la posici??n, o ??ndice, de ese elemento, o -1 si el elemento no existe en el arreglo.

Por ejemplo:
*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

//indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e indexOf('pears') devuelve 1 (el primer ??ndice en el que 
//existe cada elemento).
//recordar que devuelve numeros, no el string. si esta devuelve la posicion en la que esta, si no esta devuelve -1.
//se usa mucho en condicionales para devolver booleanos. if (arr.indexOf(elem)>=0){return true}else{return false}. Tengo que poner
//el 0 porque si no esta sera siempre -1

/*
cuando se trabaja con arreglos, es muy ??til poder iterar a trav??s de cada elemento para encontrar uno o m??s elementos que podamos 
necesitar, o manipular un arreglo en funci??n de los elementos de datos que cumplen un determinado conjunto de criterios. JavaScript 
ofrece varios m??todos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados 
(como every(), forEach(), map(), etc.), sin embargo, la t??cnica que es m??s flexible y nos ofrece la mayor cantidad de control es un 
simple bucle for.
Considera lo siguiente:
*/

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

/*Usando un bucle for, esta funci??n itera y accede a cada elemento del arreglo, y lo somete a una simple prueba que hemos creado. 
De esta manera, hemos determinado de forma sencilla y program??tica qu?? elementos de datos son mayores que 10, y hemos devuelto un nuevo
 arreglo, [12, 14, 80], que contiene esos elementos.
 */

 //Los arreglos pueden contener, o incluso estar completamente formados por otros arreglos.

  let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['este']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

  /*
  El arreglo deep est?? anidado a 2 niveles de profundidad. El arreglo deeper est?? a 3 niveles de profundidad. Los arreglos deepest est??n 
  anidados a 4 niveles y el arreglo deepest-est? a 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de 
grandes cantidades de datos. Sin embargo, todav??a podemos acceder muy f??cilmente a los niveles m??s profundos de un arreglo tan complejo 
con notaci??n de corchetes:
*/

console.log(nestedArray[2][1][0][0][0]);
//Esto registra la cadena deepest-est?. Y ahora que sabemos d??nde est?? ese dato, podemos restablecerlo si es necesario:

//nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
//Ahora registra deeper still.

console.log (nestedArray[2][0][1])

  /*Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinaci??n de cadenas, 
  n??meros y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo 
  m??s externo es el nivel 1). En alg??n lugar del tercer nivel, 
  incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.
  */
 
  let myNestedArray = [
 
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
      ['loop', 'shift', 6], [7, 1000, 'method']
    ],
    [
      ['deep','concat', false, true, 'spread', 'array'],
      [
        ['deeper'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        [
          ['deepest', 'iterate', 1.3849, 7], ['8.4876', 'arbitrary', 'depth']
        ]
      ]
    ]
      

  ];
  
  console.log(myNestedArray[2][1][2][1][1])

/*los objetos no son m??s que colecciones de pares clave-valor. En otras palabras, son piezas de datos (valores) asignados a 
identificadores ??nicos llamados propiedades (claves). Mira un ejemplo:
*/

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

/*El c??digo anterior define un objeto de un personaje, tekkenCharacter. Tiene tres propiedades, cada una de 
las cuales se asigna un valor espec??fico. Si se quiere agregar una propiedad adicional, como "origin" (origen), se puede hacer asignando 
origin al objeto:
*/

tekkenCharacter.origin = 'South Korea';

/*Esto usa la notaci??n de puntos. Si observas el objeto tekkenCharacter, ahora incluir?? la propiedad origin. Hwoarang tambi??n ten??a el 
cabello naranja. Puedes agregar esta propiedad con la notaci??n de corchetes:
*/

tekkenCharacter['hair color'] = 'dyed orange';

/*La notaci??n de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una variable para nombrar la 
propiedad. En el caso anterior, la propiedad est?? entre comillas para denotar que es una cadena y se agregar?? exactamente como se muestra.
Sin las comillas, se evaluar?? como una variable y el nombre de la propiedad ser?? el valor que tenga la variable. He aqu?? un ejemplo con 
una variable:
*/

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

//Tras agregar todos los ejemplos, el objeto se ver?? as??:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

//delete
/*
podemos eliminarla utilizando la palabra clave delete de esta manera:
*/
delete foods.apples;

//Evaluar si un objeto tiene una propiedad
/*
dos maneras diferentes de hacerlo. Uno utiliza el m??todo hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podr??amos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos devuelven true.
*/



/*
Termina de escribir la funci??n para que devuelva true si el 
objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah 
and Ryan y devuelva false en caso contrario.
*/


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el c??digo debajo de esta l??nea

  if (userObj.hasOwnProperty ('Alan')&&
      userObj.hasOwnProperty ('Sarah')&&
      userObj.hasOwnProperty ('Jeff')&&
      userObj.hasOwnProperty ('Ryan')){
    return true;
  }else {
    return false;
  }

  // Cambia solo el c??digo encima de esta l??nea
}

console.log(isEveryoneHere(users));

/*
A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis espec??fica en JavaScript llamada sentencia for...in. Para nuestro objeto users, esto podr??a verse as??:

for (let user in users) {
  console.log(user);
}

Esto registrar?? Alan, Jeff, Sarah, y Ryan, cada valor en 
su propia l??nea.

*/

const userss = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el c??digo debajo de esta l??nea
  let result = 0;
  for (let usuario in usersObj){
    if (usersObj[usuario].online === true){
      result++
    }
  }
  return result
}
  // Cambia solo el c??digo encima de esta l??nea

console.log(countOnline(userss));
//con 'usuario' lo determino. determino como se va a llamar cada elemento del obj. usersObj[usuario]

/*
podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el m??todo Object.keys() y pasando 
un objeto como argumento. 
Esto devolver?? un arreglo con cadenas que representan cada propiedad del objeto
*/

let usersss = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el c??digo debajo de esta l??nea
let prop = Object.keys(obj);
return prop
  // Cambia solo el c??digo encima de esta l??nea
}

console.log(getArrayOfUsers(usersss));

//[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

let useer = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};


function addFriend(userObj, friend) {
  // Cambia solo el c??digo debajo de esta l??nea
  userObj.data.friends.push(friend);
  return useer.data.friends

  // Cambia solo el c??digo encima de esta l??nea
}

console.log(addFriend(useer, 'Pete'));

//Invierte la cadena proporcionada.

function separarArr (textt){
  let texto=textt.split('').reverse().join('');
  return texto
}

console.log(separarArr('hola'))

// Devuelve el factorial del entero proporcionado.

function factorialize(num) {
  
  for (let i=0; i <= num; i++){
  return i;
  }
  let numero=num*i;
  return numero;
}

factorialize(5);

function factorialize(num) {
  for (let i=0; i<=num; i++){
  if (num === 0){
    return
  }
  return num*i;
  }
}


console.log (factorialize(5));

function factorialize(num) {
  if(num === 0){
    return 1
  }else{
    return  num * factorialize(num-1)
  }
}


console.log (factorialize(5));

//FORM
/*
El m??todo from() toma como entrada un array y devuelve otra matriz. Si proporcionamos una cadena como entrada, 
crea un array con cada car??cter de la cadena como un elemento del array. Toma los siguientes par??metros como 
argumentos:
objeto: es el objeto de entrada que se va a convertir en un array.
mapFunction: es un argumento opcional que especifica la funci??n del mapa para llamar a los elementos del array.
thisValue: se utiliza para representar el valor this del objeto en la mapFunction.
console.log(Array.from('delftstack'));
*/

//SPREAD
/*El operador spread desempaqueta los objetos iterables. Repite cualquier objeto iterable y lo expande en su 
lugar. Cuando se usa el operador de propagaci??n en una cadena, obtenemos un array de subcadenas donde cada 
subcadena es un car??cter individual de la cadena.
*/

const stTr = 'delftstack';
const arRr = [...stTr];
console.log(arRr);

//probando 2

// METODOS EN OBJETOS

/* Los objetos pueden tener un tipo de propiedad especial, llamada m??todo.

Los m??todos son propiedades que son funciones. Estos agregan diferentes comportamientos a los objetos. Aqu?? esta el ejemplo de duck con un m??todo:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();

Aunque esta es una forma v??lida de acceder a la propiedad del objeto, existe un problema. Si el nombre de la variable cambia, cualquier c??digo que haga referencia al nombre original tambi??n tendr??a que ser actualizado. En una definici??n breve de un objeto, esto no es un problema, pero si un objeto tiene muchas referencias a sus propiedades hay una mayor probabilidad de error.

Una forma de evitar estos problemas es con palabra clave this:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

En el contexto actual, this se refiere al objeto con el que el m??todo est?? asociado: duck. Si el nombre del objeto se cambia a mallard, 
no es necesario encontrar todas las referencias a duck en el c??digo. Hace que el c??digo sea reutilizable y mas f??cil de leer.
*/

// CONSTRUCTOR

/*
Las funciones Constructors crean nuevos objetos. Definen propiedades y comportamientos que pertenecer??n al nuevo objeto. Piensa que son 
el modelo para la creaci??n de nuevos objetos.

A continuaci??n se muestra un ejemplo de un constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
Este constructor define un objeto Bird con las propiedades name, color y numLegs establecidas a Albert, blue y 2 respectivamente. Los 
constructores tienen las siguientes convenciones:

Est??n definidos con un nombre en may??scula para distinguirlos de otras funciones que no son constructors.
Utilizan la palabra clave this para establecer propiedades del objeto que crear??n. Dentro del constructor, this se refiere al nuevo 
objeto que crear??.
Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo har??an otras funciones.
*/

function Dog (){
  this.name = "Carlitos",
  this.color = "Marron",
  this.numLegs = 4
}

// prestar atencion que usa el signo =, no el :.
// NOTA: this dentro del constructor siempre se refiere al objeto que se est?? creando.

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();

/* 
Observa que se utiliza el operador new cuando llamamos a un constructor. Esto le indica a JavaScript que cree una nueva instancia de Bird llamada blueBird. Sin el operador new, dentro del constructor this no har??a referencia al nuevo objeto, dando resultados inesperados. Ahora blueBird tiene todas las propiedades definidas dentro del constructor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:

blueBird.name = 'Elvira';
blueBird.name;
*/

function Dog (){
  this.name = "Carlitos",
  this.color = "Marron",
  this.numLegs = 4
}

let hound = new Dog ();

hound.name = "Monic",
hound.color = "Rosa",
hound.numLegs = 4

console.log (hound)

/*
Para crear m??s f??cilmente diferentes objetos Bird, puedes dise??ar tu constructor de aves para aceptar par??metros:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
Luego pasa los valores como argumentos para definir cada ave ??nica en el constructor Bird: let cardinal = new Bird("Bruce", "red"); Esto genera una nueva instancia de Bird con propiedades name y color que tienen como valor Bruce y red, respectivamente. La propiedad numLegs a??n est?? establecida en 2. El cardinal tiene estas propiedades:

cardinal.name
cardinal.color
cardinal.numLegs
*/

function Dog(name,color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

let terrier = new Dog("Tito", "blanco")

console.log (terrier)

let yipzu = new Dog ("Layla", "blanco")

console.log(yipzu.name)

// INSTANCIA

/*
Cada vez que una funci??n constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript 
proporciona una manera conveniente de verificar esto con el operador instanceof. instanceof permite comparar un objeto con un 
constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor. 
*/

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

//Aqu?? el m??todo instanceof devolver?? true.

//Si un objeto es creado sin usar un constructor, instanceof verificar?? que no es una instancia de ese constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;

//Aqu?? el m??todo instanceof devolver?? false.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4)

console.log (myHouse instanceof House);

// propiedades directas


function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let ccanary = new Bird("Tweety");

/* 
name y numLegs se llaman propiedades directas, porque est??n definidas directamente en la instancia del objeto. Eso significa que duck y 
canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendr?? su propia copia de estas propiedades. 
El siguiente c??digo a??ade todas las propiedades directas de duck al arreglo ownProps:
*/

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

//La consola mostrar?? el valor ["name", "numLegs"].

// hasOwnProperty devuelve un valor booleano que indica si el objeto al que lo est?? llamando tiene una propiedad con el nombre del 
//argumento. Por ejemplo:

var x = {
  y: 10
};
console.log(x.hasOwnProperty("y")); //true
console.log(x.hasOwnProperty("z")); //false

//ej

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let caanary = new Bird("Tweety");
let ownPropss = [];

for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}

//prototype

/*
Dado que numLegs probablemente tendr??n el mismo valor para todas las instancias de Bird, esencialmente tienes una variable duplicada 
numLegs dentro de cada instancia de Bird.
Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las instancias de Bird.
*/

Bird.prototype.numLegs = 2;

//Ahora todas las instancias de Bird tienen la propiedad numLegs.

//la propiedad prototype, no es una propiedad directa.

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs=4;


// Cambia solo el c??digo encima de esta l??nea
let beagle = new Dog("Snoopy");

/*
Las propiedades directas se definen directamente en la propia 
instancia del objeto. Y las propiedades prototype se definen en el prototype.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beaglee = new Dog("Snoopy");

let ownPropsss = [];
let prototypeProps = [];

// Cambia solo el c??digo debajo de esta l??nea

for (let property in beaglee){
  if (beaglee.hasOwnProperty(property)){
    ownPropsss.push(property)
  }
  else{
    prototypeProps.push(property)
  }
}

console.log(ownPropsss)
console.log(prototypeProps)

/*
Hay una propiedad especial constructor ubicada en instancias de objeto duck y beagle que fueron creados en desaf??os anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas llamadas console.log devolver??an true en la consola.
*/

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true
  }
  else{
    return false
  }

}

// las propiedades pueden ser a??adidas todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/*
 ??Elimina la propiedad constructor! Esta propiedad puede ser usada para verificar cu??l funci??n de constructor cre?? la instancia. 
 Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
En orden, estas expresiones se evaluar??an como false, true y true.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad 
constructor:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};\
*/

// los objetos tambi??n heredan su prototype directamente de la funci??n constructor que lo cre??.

function Bird(name) {
  this.name = name;
}

let duckk = new Bird("Donald");

/*duckk hereda su prototype de la funci??n constructor Bird. Puedes mostrar esta relaci??n con el m??todo isPrototypeOf:

Bird.prototype.isPrototypeOf(duck);
Este devolver??a true.
*/

function Dog(name) {
  this.name = name;
}

let beaagle = new Dog("Snoopy");

console.log (Dog.prototype.isPrototypeOf(beaagle))

/*
Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. Adem??s, el prototype de un objeto en s?? mismo es un 
objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
Debido a que prototype es un objeto, ??unprototype puede tener su propio prototype! En este caso, el prototype de Bird.prototype es 
Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
??Por qu?? ser??a ??til? Quiz??s recuerdes el m??todo hasOwnProperty del desaf??o pasado:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
El m??todo hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck. 
Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. 
Object es un supertype de Bird y duck. Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede 
utilizar el m??todo hasOwnProperty.

*/

/*
Hay un principio en la programaci??n llamado No te repitas (Don't Repeat Yourself "DRY"). La raz??n por la que el c??digo repetido es 
un problema es porque cualquier tipo de cambio requiere corregir c??digo en m??ltiples lugares. Esto suele significar m??s trabajo para 
los programadores y m??s espacio para errores.

Observa en el siguiente ejemplo como el m??todo describe es compartido por Bird y Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
El m??todo describe se repite en dos lugares. El c??digo se puede editar para seguir el principio DRY creando un supertype (o padre) 
llamado Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Dado que Animal incluye el m??todo describe, puedes eliminarlo de Bird y Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

*/
