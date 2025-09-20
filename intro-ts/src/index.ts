console.log("Hola Mundo");

let nombre: string = "Juan"; // en el momento de la asignación, TS infiere que es string
// nombre = 123 ❌ ya no se puede asignar otro tipo
let edad: number = 31;
let casado: boolean = false;
let fechaNacimiento: Date = new Date("1989-10-16");
// let fechaNacimiento: Date = "1989-10-16" ❌

console.log(nombre);
console.log(edad);
console.log(typeof casado);
console.log(typeof fechaNacimiento);

// any: acepta cualquier tipo (no recomendable)
const numeros: number[] = [1, 2, 3, 4, 5];

console.log(numeros);

const suma = (a: number, b: number): number => {
  return a + b;
};

console.log(suma(1, 2));
// console.log(suma(1, '3')); ❌

const saludar = (nombre: string, apellido?: string): void => {
  console.log(`Hola ${nombre} ${apellido || ""}`);
};
saludar("Juan", "Pérez");
saludar("Pedro");

// Interfaces

interface Mascota {
  nombre: string;
  edad: number;
  raza?: string; // el ? indica que es opcional
}

const firu: Mascota = {
  nombre: "Firulais",
  edad: 5,
};

const apolo: Mascota = {
  nombre: "Apolo",
  edad: 3,
  raza: "Terrier",
};

console.log(firu.raza); // undefined porque no tiene raza en el objeto
console.log(apolo.raza);

const miFuncion = (nombre: string): string => {
  return nombre;
};

// Union Types y Enums

enum Contrato {
  INDEFINIDO = 1,
  TEMPORAL = 2,
  POR_HORAS = 3,
  MEDIO_TIEMPO = 4,
}

interface Empleado {
  nombre: string;
  //   contrato: Contrato.POR_HORAS | Contrato.MEDIO_TIEMPO;
  contrato: Contrato;
  salario: number;
  dni: string | number; // union type
  saludo(nombre: string): string; // se puede definir una función dentro de la interfaz
}

const juan: Empleado = {
  nombre: "Juan",
  contrato: Contrato.INDEFINIDO,
  salario: 1200,
  dni: "12345678A",
  saludo: miFuncion,
};

console.log(juan.saludo("Hola " + juan.nombre));

// Clases

class Persona {
  // constructor con sus propiedades
  constructor(public nombre: string, private edad: number) {}

  // metodos

  saludar(): string {
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const p = new Persona("Juan", 31);

console.log(p.saludar());
