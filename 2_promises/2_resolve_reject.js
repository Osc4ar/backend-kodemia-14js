function retirarDinero(cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('procesando tu dinero')
            console.log(`la cantidad a retirar es: ${cantidad}`)

            if (cantidad < 1)
                reject('$0.00')

            resolve(`$${cantidad}.00`)
        }, 2000);
    })
}

retirarDinero(1000)
    .then((dinero) => {
        console.log('mi dinero :D')
        console.log(dinero)

        return retirarDinero(49) // aqui el return, regresa una promesa
    })
    .then((dinero) => {
        console.log('mi dinero :D')
        console.log(dinero)
    })
    .catch((dinero) => {
        console.log(dinero)
    })