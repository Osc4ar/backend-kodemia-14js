function factory(result) {
    console.log('Trabajando...');

    return function () {
        console.log('resultado: ', result);
    }
}

const r = factory('saludos');

// Que tipo es r?
r()


// Caso muy visto en programacion funcional
function factorySumaParcial(a) {
    return function (b) {
        return a + b;
    }
}

const suma2 = factorySumaParcial(2);
console.log(suma2(5))
// asi se ve internamente suma2
// function suma2(b) {
//     return 2 + b;
// }

const suma5 = factorySumaParcial(5);
// asi se ve internamente suma2
// function suma5(b) {
//     return 5 + b;
// }
console.log(suma5(5))