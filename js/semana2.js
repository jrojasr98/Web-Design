/*
 * FUNDAMENTOS JS
 * 24/09/2022
 */

"use strict";

/* 1.TIPOS DE DATOS */
var miVarable = "Hola Mundo Desde JS"; //String
var miNumero = 5; //Number
var miBool = true; //Boolean
var otraVariable; //Undefined
var miNull = null; //Object
var miObject = new Object(); //Object
var miArreglo = []; //Array

console.log(
  typeof miVarable,
  typeof miNumero,
  typeof miBool,
  typeof otraVariable,
  typeof miNull,
  typeof miObject,
  miArreglo
);

/* 2. Operaciones Aritmeticas */
console.log("***** 2. Operaciones Aritmeticas *****");
var num1 = 10;
var num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

/* 3. Operadores de comparacion */
console.log("***** 3. Operaciones de comparacion *****");
console.log(typeof num1, typeof "10");
console.log(num1 == "10");
console.log(num1 === "10");

/* 4. Operadores de Incremento ++, --, (de 1 en 1), acumular +=, -= *=, /=, **= */
console.log("***** 4. Operaciones Aritmeticas *****");
console.log((num1 += num2));
console.log((num1 -= num2));
console.log((num1 *= num2));
console.log((num1 /= num2));
console.log((num1 **= num2));

var num1 = 10;
console.log(num1++);
console.log(num2--);
console.log(num1);
console.log(num2);

/* 5. Sentencias IF/Else, swtich, ciclos(FOR, While, Do while) */
console.log("***** 5. Sentencias IF/Else, switch, while, for, dohile  *****");
// If/Else
var respuesta;
if (num1 === num2) {
  respuesta = true;
} else {
  respuesta = false;
}
console.log(respuesta);

// Switch
switch (2) {
  case 1:
    respuesta = "Numero 1";
    break;
  case 2:
    respuesta = "Numero 2";
    break;
  case 3:
    respuesta = "N/A";
    break;
}
console.log(respuesta);

// For
for (let index = 0; index < 3; index++) {
  console.log("index" + index);
}

// While
let x = 0;
while (x < 3) {
  console.log("X: " + x);
  x++;
}

// Do while
let y = 4;
do {
  console.log("Y: " + y);
  y++;
} while (y < 3);

console.log("***** Practica *****");

/**
 *  ############ Practica ############
 * 1. Muestren en pantalla el resultado de la multiplicacion N*M sin usar el
 * simbolo de multiplicar
 */

let cont = 1;
var result = 0;
let n1 = 8;
let m1 = 9;
while (cont <= n1) {
  result += m1;
  cont++;
}
console.log("Ejercicio 1: " + result);

/* 2. Sumen todos los numeros Pares que esten entre N y M, N < M
 */
let n2 = 1;
let m2 = 28;
while (n2 <= m2) {
  if (n2 % 2 === 0) {
    console.log("Numero par: " + n2);
  }
  n2++;
}

/**
 * 6. FUNCIONES - PARAMETROS - ARGUMENTO
 *
 */

//Funcion Normal
console.log("***** 6. Funciones *****");

function miFuncion(param1, param2) {
  return param1 + param2;
}

function multiplicar(param1, param2) {
  return param1 * param2;
}

const miMultiplicacion = multiplicar(5, 5);

console.log(miFuncion(10, 4), miMultiplicacion);

//Funciones Recursivas
function factorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

console.log(factorial(5));

//Funciones Anonimas
const sumar = function (param1, param2, param3 = 0) {
  return param1 + param2 + param3;
};
console.log(sumar(5, 1, 5));

//Funciones Flecha 0 Arrow => - Function
/**
const flecha = (p1, p2) => {
  return p1 * p2;
}
*/
const flecha = (p1, p2) => p1 * p2;
console.log(flecha(5, 10));

/**
 * 7. Arreglos
 */
console.log("***** 7. Arreglos *****");
var miArreglo = ["Juan", 2, 3, true, false];
var frutas = ["Mango", "Manzana", "Naranja"];
var numeros = [1, 2, 3, 4, 5];

console.log(miArreglo);
console.log(miArreglo[0]);

//Recorrer el arreglo
/*
for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
  
}
*/
frutas.forEach(function(valor, indice, arreglo) {
  console.log(valor, indice);
});

//Ingresar Items a un Array - PUSH
frutas.push("Pera");
frutas.push("Pera", "Uva", "Fresa");
frutas.forEach(function(valor, indice, arreglo) {
  console.log(valor, indice);
});