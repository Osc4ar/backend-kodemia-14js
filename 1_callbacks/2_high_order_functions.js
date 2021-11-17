/*
    Las funciones en JS son first class citizen,
    significa que pueden ser usadas como cualquier otro tipo de dato.
    Esto nos permite guardar funciones en variables y pasarlas como parámetros
*/

// Función flecha guardada en una variable
const funcA = (a) => {
    return a * 10;
} 

// Función anónima guardada en una variable
const funcB = function() {
    console.log('a su maquina');
}

/*
    Las High Order Functions, son funciones que
    reciben como parámetro o retornan otra función.
    El ejemplo más común de ellas es en las callbacks.
*/

function on(evento, callback) {
    if (evento === 'click') {
        callback();
    }
}

// Con funcion flecha
button.on('click', () => {
    console.log('hiciste click');
})


// Definiendo otra funcion
function cheers() {
    console.log('saludos!');
    return 'retorno';
}

// Cual opcion usarian?
button.on('click', cheers()); // Manda ejecutar cheers
button.on('click', cheers); // Referencia las instrucciones de cheers
