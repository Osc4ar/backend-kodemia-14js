const { mkdir, rmdir } = require('fs')
const fs = require('fs/promises')
// require('fs').promises;

const encoding = 'utf8'

// ToDo usar async/await
async function crearArchivo(nombre, contenido) {
    await fs.writeFile(nombre, contenido, encoding)
    console.log('archivo creado')
}

function borrar() {}

function editar() {}

function leer() {
    const contenido = await fs.readFile()

    console.log(contenido)
}

const execute = async () => {
    await crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')

    console.log('se ejecutaron todas tus funciones')

    await mkDir('vacia')
    await mkDir('con_archivos')

    await crearArchivo(
        './con_archivos/ejercicio.txt',
        'Este sera su ejercicio de manana'
    )
    await crearArchivo(
        './con_archivos/ejercicio1.txt',
        'Este sera su ejercicio de manana'
    )
    await crearArchivo(
        './con_archivos/ejercicio2.txt',
        'Este sera su ejercicio de manana'
    )

    await readDir('con_archivos')

    await rmDir('vacia')
}

execute()
