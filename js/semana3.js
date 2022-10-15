/*
 * FUNDAMENTOS JS
 * 01/10/2022
 */

"use strict";

/**
 * 7. Arreglos
 */
console.log("***** 7. Arreglos *****");
var miArreglo = ["Juan", 2, 3, true, false];
var frutas = ["Mango", "Manzana", "Naranja"];
var numeros = [1, 15, 23, 2, 3, 73, 4, 5, 36];

//1.1Recorrido de arreglo
frutas.forEach(function (valor, index) {
  console.log(valor, index);
});

console.log(frutas);

/** 1.2 Agregar  */
frutas.push("Pera");
frutas.push("Uva", "Sandia", "Melon");

/** 1.3  Eliminar  

frutas.pop();
frutas.pop();*/

/** 1.4 Array.splice(indice, banderaEliminar, ?valor)
 * indice --> Valor de posicion en el arreglo
 * banderaElimar --> 0: No elimine; N: Cant registros a que elimina
 * ?Valor -->Valor a ingresar c/banderaEliminar = 0
 */
frutas.splice(3, 0, "Pera2", "Uva2");
frutas.forEach(function (valor, index) {
  console.log(valor, index);
});

/** 1.4 Array.splice(indice, banderaEliminar, ?valor)  */
console.log("******************************");
console.log(frutas.reverse());

console.log("Filter: " + frutas.filter((palabra) => palabra.length > 5));

console.log("Find: " + frutas.find((palabra) => palabra == "Melon"));

console.log("SORT: " + frutas.sort());

console.log("SORT: " + numeros.sort((a, b) => a - b).reverse());

console.log("Join: " + frutas.join("|"));

console.log("SORT: " + frutas.map((valor, indice) => indice + " " + valor));

/** 2. Destructuracion */
console.log("********* Destructuracion *********");
var fruta1, fruta2, fruta3, rest;

[fruta1, fruta2, fruta3, ...rest] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(rest);

/** 3.1 Objetos ES6 >>>  */
console.log("********* Objetos *********");

var objeto = {
  nombre: "Diego",
  apellido: "Rojas",
  direccion: "Escazu",
};

/**Obtener valores de un objeto --> Obj.Propiedad o Obj["propiedad"] 
console.log(objeto);
console.log(objeto.nombre, objeto["apellido"]);
*/

/** 3.2 Objetos, pueden o no tener funciones */
var persona = {
  nombre: "Diego",
  apellido: "Rojas",
  direccion: "Escazu",

  saludar: function () {
    return "Hola Mundo!!!";
  },
  nombreCompleto: function () {
    //  Template String
    return `El nombre es ${this.nombre} ${this.apellido}`;
  },
  nombreCompletoFlecha: () => {
    return `El nombre es: ${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.nombreCompleto());

/** 3.3 FORMA 2: Crear Objetos en base a OBJECT utilizando instancias */
var miAuto = new Object();

miAuto.marca = "Toyota";
miAuto.modelo = "Tacoma";
miAuto.anno = 2022;
miAuto.info = () => `${miAuto.marca} ${miAuto.modelo}`;

console.log(miAuto.info());

/** 3.4 Forma 3: Crear Objeto en base a Funcoin Constructora */

function Persona(nombre, apellido1, apellido2, direccion) {
  this.nombre = nombre;
  this.apellido1 = apellido1;
  this.apellido2 = apellido2;
  this.direccion = direccion;
}

Persona.prototype.nombreCompleto = function () {
  return `El nombre es: ${this.nombre} ${this.apellido1} ${this.apellido2}`;
};

var otraPersona = new Persona("Diego", "Rojas", "Riveros", "Escazu");
console.log(otraPersona.nombreCompleto());

/**
 * Forma 4: Crear en base a una clase POO
 * Clase --> Molde
 * Obj   --> Instancias de esa clase
 */

class Auto {
  constructor(marca, modelo, anno) {
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
  }
  info() {
    return `${this.marca} ${this.modelo}`;
  }
}

var otroAuto = new Auto("Toyota", "Tacoma", 2020);

console.log(otroAuto.info());

/**
 *
 *  ********************************  Tarea  ********************************
 * ******************************** Hacer 3 objetos diferentes con la forma de eleccion vistas en clase ********************************
 */

//Objeto - test
var objeto1 = {
  nombre: "Objeto1",
  tipo: "tipoObj1",
  imprime: function () {
    return `Soy el objeto: ${this.nombre} y soy de tipo ${this.tipo}`;
  },
};
console.log(objeto1.imprime());

console.log("***************** Objeto 1 *****************");
//Clase estudiante, se crea el constructor y las funciones para imprimir los distintos datos
class Estudiante {
  constructor(nombre, asignaciones, edad) {
    this.nombre = nombre;
    this.asignaciones = asignaciones;
    this.edad = edad;
  }
  imprimeAsignaciones(asignaciones) {
    let msj = "";
    asignaciones.forEach((valor, index) => {
      msj += `\n- ${valor}`;
    });
    return msj;
  }
  imprimeEstudiante() {
    return `Mi nombre es: ${this.nombre} tengo: ${
      this.edad
    } \nCurso las asignaciones:${this.imprimeAsignaciones(this.asignaciones)}`;
  }
}

// Se crea un estudiante con datos especificos
var estudiante = new Estudiante("Diego", ["Diseno Web", "Argumentacion"], 24);

//Se imprime por consola los datos utilizando la funcion de imprimir en la clase Estudiante.
console.log(estudiante.imprimeEstudiante());

console.log("***************** Objeto 2 *****************");

class Asignaciones {
  constructor(nombre, nota, aprobado, profesor) {
    this.nombre = nombre;
    this.nota = nota;
    this.aprobado = aprobado;
    this.profesor = profesor;
  }

  estado = (estado) => {
    if (estado) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  };

  imprime() {
    return `Estudiante: ${this.nombre}\nProfesor: ${this.profesor}\nNota: ${
      this.nota
    }\nEstado: ${this.estado(this.aprobado)}`;
  }
}

var asignacion1 = new Asignaciones("Diego", 75, false, "Warner");
console.log(asignacion1.imprime());
