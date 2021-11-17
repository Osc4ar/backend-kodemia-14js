const arreglo = [2, 3, 4, 5];
const texto = ['a', 'b', 'c'];

// Si el callback retorna verdadero, añade el valor al array de resultado
// Si el callback retorna falso, ignora el valor
function filter(arr, callback) {
    const resultado = [];
    // Su codigo va aqui
    return resultado;
}

// El callback debe de recibir un valor, que sera un elemento del arreglo

const resultado1 = filter(arreglo, x => x % 2 === 0); // [2, 4]
const soloUnos = filter(arreglo, x => x === 1); // [1]


// Syntatic sugar
const arreglo = [];
arreglo.filter();

const cuadrado = function(a) {
    a * a;
}

const cuadradoMedioCorto = (a) => {
    return a * a;
}

const cuadradoCorto = a => a*a;