/* Desafíos:
1-Crear una función que muestre "¡Hola, mundo!" en la consola.
2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" enconsola.
3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4-Crear una función que reciba tres números como parámetros y devuelva su promedio.
5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */



// Actividad 1
/* function saludo(){
    console.log('¡Hola, mundo!');
    return;
}
saludo(); 
*/

// Actividad 2
/* function Saludo2(){
    let usuario = prompt('Ingresa tu nombre');
    console.log(`¡Hola, ${usuario}!`);
    return;
}
Saludo2();
///////////////////////////////////////////////////
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("Alice");  
 */

// Actividad 3
/* function numeroDoble (){
    let numerUsuario = prompt('Ingresa un numero');
    console.log(parseInt(numerUsuario)*2);
    return;
}
numeroDoble();
//////////////////////////////////////////////////
function calcularDoble(numero) {
  return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
*/



/* // Actividad 4    ///////Revisar
function promedio (){
    let n1= prompt('Ingresa el primer numero: ');
    let n2= prompt('Ingresa el segundo numero: ');
    let n3= prompt('Ingresa el tercer numero: ');
    let prom= parseInt((n1 + n2 + n3)/3);
    console.log(`El promedio de los 3 numeros ${n1}, ${n2}, ${n3}, es:${prom}`);
    return ;
}
promedio(); 
 */


// Actividad 5 // codigo largo
/* function numMayor(){
  let num1= prompt('Ingresa el primer numero');
  let num2= prompt('Ingresa el segundo numero');
  if (num1 == num2){
    console.log(`Ingresaste los numeros ${num1} y ${num2}, los numeros son iguales`);
  }else if (num1 < num2){
    console.log(`Ingresaste los numeros ${num1} y ${num2}, el numero ${num2} es mayor`);
  }else {
    console.log(`Ingresaste los numeros ${num1} y ${num2}, el numero ${num1} es mayor`);
  } 
}
numMayor(); 
*/

// Actividad 5 // codigo corto
/* function numMayo(){
  let num01= prompt('Ingresa el primer numero');
  let num02= prompt('Ingresa el segundo numero');
  alert(`Ingresaste los numeros ${ num01} y ${num02} el numero mayor es:  ${num01 > num02 ? `${num01} es el mayor` : `${num02} es mayor`}`);
  return;
}
   numMayo();
*/


// Actividad 6
/* function dobleNun (){
  let numdoble = prompt('Ingresa un numero:'); 
  alert(parseInt((numdoble)*(numdoble)));
  return;
}
dobleNun()
 */

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/* 
Sugestión de respuestas

Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();
Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");
Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);
Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado); 
*/

/* El siguiente código en JavaScript calcula el doble y el triple de un número proporcionado. 
Tu tarea consiste en seleccionar las opciones que sigan las mejores prácticas de programación 
y ayuden a mejorar la legibilidad y mantenibilidad del código.
 */

/* 
// Original
function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;
  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}
const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado); 
 */

/*  Respuesta
// Esta opción es correcta porque divide la funcionalidad en dos funciones separadas, 
// calcularDoble y calcularTriple, lo que mejora la modularidad y 
// facilita la comprensión del código. 
// Además, utiliza variables explícitas (doble y triple) para almacenar los resultados,
// lo que hace que el código sea más legible. 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals

function calcularDoble(numero) {
  return numero * 2;
}
function calcularTriple(numero) {
  return numero * 3;
}
const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);
console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
*/
/////////////////////////////////////////////////////////////////////

/* 1-Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
2-Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3-Crea una función que convierta un valor en dólares, 
pasado como parámetro, y devuelva el valor equivalente en reales
(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
4-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
 utilizando la altura y la anchura que se proporcionarán como parámetros.
5-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6-Crea una función que muestre en pantalla la tabla de multiplicar de un número 
dado como parámetro.  */

// Actividad 1
/* let peso = parseInt(prompt('Ingresa tu peso en kilos:'));
let altura = parseInt(prompt('Ingresa tu altura en Centimetros:'));
function imc(){
  let im= (peso * peso) / altura;
  console.log(`De acuerdo a tu peso de ${peso}kg y tu altura ${altura}Cm tu IMC =  ${im}`);
  return 0;
}
imc();  */

// Actividad 2
/* function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
 */

// Actividad 3
/* 
//opcion 1
let dolares= parseInt(prompt('Ingresa La cantidadde dolares'));
let reales= 4.80;
function convertirDAR (){
  console.log(`La Conversion de ${dolares} ${(dolares == 1) ? 'Dolar': 'Dolares'} a Reales es de ${(dolares * reales)} Reales`);
}
convertirDAR();
 */


/* 
/opcion 2
let dolares= parseInt(prompt('Ingresa La cantidadde dolares'));
let reales= 4.80;
function convertirDAR (){
  return dolares * reales ;
}
let resultadoConvertDAR = convertirDAR();
console.log(`La Conversion de ${dolares} ${(dolares == 1) ? 'Dolar': 'Dolares'} a Reales es de ${resultadoConvertDAR} Reales`);
 */


/*
4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);
5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
  */

///////////////////////////////////////////////////////////////////////////

/* 1-Crea una lista vacía llamada "listaGenerica".
2-Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3-Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
4-Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.
5-Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.
6-Crea una función que calcule el promedio de los elementos en una lista de números.
7-Crea una función que muestre en la consola el número más grande y el número más pequeño
en una lista.
8-Crea una función que devuelva la suma de todos los elementos en una lista.
9-Crea una función que devuelva la posición en la lista donde se encuentra 
un elemento pasado como parámetro, o -1 si no existe en la lista.
10-Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.
11-Crea una función que reciba una lista de números y devuelva una nueva lista 
con el cuadrado de cada número.
 */

/* Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];
Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();
Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();
Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);
Crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
} 
*/

