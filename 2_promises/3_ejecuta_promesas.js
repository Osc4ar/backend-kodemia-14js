async function ejecutaPromesas() {
    const resultado1 = await promesa1(); // tarea larga (asincrono)
    const resultado2 = 'texto: ' + resultado1; // tarea corta (sincrono)

    return resultado2;
}
