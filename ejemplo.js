// let a = 'a'
// let b = 2
// const c = 'mucho texto'
// var d = true

// console.log(a, b, c, d);

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// if (d) {
//     console.log('true');
// } else {
//     console.log('nunca se imprimira esto');
// }

// Funciones
const f = () => {
    console.log('funcion flecha');
}
f()

function cuadrado(x) {
    console.log('base: ', x);

    return x*x;
}

const resultado1 = cuadrado(2); //ejecuta cuadrado con un 2
console.log('resultado1', resultado1);

const otraFuncion = cuadrado; // Guarda las instrucciones de cuadrado, en otraFuncion

cuadrado // definicion de la funcion
cuadrado(1) // invocacion

const resultado2 = otraFuncion(2);
console.log('resultado2', resultado2);


// hacer una accion al momento de hacer un click
function onClick(unaFuncion) {

}

buton.onClick(() => { // unaFuncion = Funcion Flecha
    console.log('hiciste click');
});

button.onClick(function() { // unaFuncion = Funcion Anonima
    console.log('hiciste click');
});






const f2 = function() {
    console.log('funcion anonima');

    return 'este es el retorno';
}

button.onClick(f2); // recibe las instrucciones de f2, y las ejecuta cuando se da un click
button.onClick(f2()); // aparece una vez funcion anonima, y onClick recibe este es el retorno'

button.onClick(() => {
    f2()
}); // unaFuncion = funcion flecha que ejecuta a f2
