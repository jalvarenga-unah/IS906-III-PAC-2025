

// let / const ( var ❌ ) 

// let y const, tienen un alcance de bloque { ... }
let nombre = "Juan"
nombre = "Pedro" // reasignacion
let apellido = 'Alvarenga'
apellido = 123
apellido = []
const IP = '192.168.1.1' // constantes
// IP = 123 // ❌ reasignacion

console.log(nombre);
console.log(apellido);
console.log(IP);


// funciones

function suma(a, b) {
    return a + b;
}

const resta = function (a, b) {
    return a - b;
}

const mutiplicacion = (a, b) => a * b; // retornando automaticamente el valor

const division = (a, b) => {
    if (b === 0) {
        return 'No se puede dividir por cero'
    }
    return a / b
}

// suma = 'hola' // sobrescribir la funcion ❌

console.log(suma(1, '2'))
console.log(resta(5, 3))

const mascota = {
    nombre: 'Apolo',
    edad: 3
}

console.log(mascota.nombre);
console.log(mascota.raza);

const frutas = ['manzana', 'pera', 'banana']

frutas.push(123)

console.log(frutas);

const getUser = (id) => {
    // simulacuon de llamada a base de datos

    if (id === 1) {
        return {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30
        }
    }

    return {}

}

console.log(getUser(1));
console.log(getUser(2));