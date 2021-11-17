const fs = require('fs');

const encoding = 'utf8';

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, encoding, (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function borrar() {

}

function editar() {

}

function leer() {

}


crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')