const resultado1 = forEach([2, 3, 4], val => val * 2);
console.log(resultado1);

const resultado2 = forEach([2, 3, 4], (val) => {
    return 'mucho texto ' + val;
});
console.log(resultado2);

function forEach(arreglo, callback) {
    const resultado = [];

    for (let index = 0; index < arreglo.length; index++) {
        resultado.push(callback(arreglo[index]));
    }

    return resultado;
}
