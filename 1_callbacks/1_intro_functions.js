// Declaración de la función
function hola(nombre) {
    return `Hola ${nombre}, saludos`;
}

// Invocación de la función
const saludo = hola('Koders');
console.log(`Saludo: ${saludo}`);

// El tipo de hola es funcion y el tipo de hola('') es el valor de retorno
// console.log(typeof hola('Odon'));
// console.log(typeof hola);

// otraFuncion guarda referencia de la función hola
const otraFuncion = hola;
console.log(hola('a todos'));
console.log(otraFuncion('Jairo'));

// cuando se invoca otraFuncion se vuelve a ejecutar el codigo de la función hola
const otroSaludo = otraFuncion('gente');
console.log(`Otro saludo: ${otroSaludo}`);
