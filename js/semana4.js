/*
 * Objetos JS
 * 08/10/2022
 */

"use strict";

class Persona {
  constructor(nombre, apellido1, apellido2, sexo) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.sexo = sexo;
  }

  nombreCompleto() {
    return `Nombre: ${this.nombre} ${this.apellido1} ${this.apellido2} ${this.sexo}`;
  }

  mostrarPersona() {
    console.log("Soy Persona");
    console.log("Planilla Persona");
  }
}

//Herencia
class Profesor extends Persona {
  constructor(nombre, apellido1, apellido2, sexo, curso) {
    super(nombre, apellido1, apellido2, sexo);
    this.curso = curso;
  }
  mostrarPersona() {
    console.log("Soy Profesor " + this.nombreCompleto());
    console.log("Planilla Persona");
  }
}
class Administrativo extends Persona {
  constructor(nombre, apellido1, apellido2, sexo, tareas) {
    super(nombre, apellido1, apellido2, sexo);
    this.tareas = tareas;
  }
  mostrarPersona() {
    console.log("Soy Administrativo " + this.nombreCompleto());
    console.log("Planilla Persona");
  }
}
class Estudiante extends Persona {
  constructor(nombre, apellido1, apellido2, sexo, cursos) {
    super(nombre, apellido1, apellido2, sexo);
    this.cursos = cursos;
  }
  mostrarPersona() {
    console.log("Soy Estudiante " + this.nombreCompleto());
    console.log("Planilla Persona");
  }
}

//Polimorfismo
class Planilla {
  calcularPlanillaProfesor() {
    Profesor.mostrarPersona();
  }
  calcularPlanillaAdministrativo(administrativo) {
    Administrativo.mostrarPersona();
  }
}

/********************    Simular Controlador *********************/
var estudiante1 = new Estudiante(
  "Juan",
  "Rojas",
  "Riveros",
  "Masculino",
  "Dessarollo 1"
);
console.log(estudiante1.mostrarPersona());

var profesor1 = new Profesor(
  "Fernando",
  "Campos",
  "Castro",
  "M",
  "Programacion"
);
console.log(profesor1.mostrarPersona());
