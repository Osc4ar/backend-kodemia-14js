/*
    En un if da falso los siguientes valores (falsy):
    - undefined
    - null
    - NaN
    - 0
    - ""
    */
if ('') console.log('Es verdadero')
else console.log('Es falso')


router.get('/', async (req, res) => {
    const koders = await loadKoders()
    console.log('Koders: ', koders)

    // Opcion 1: Con if y else
    // let count = Number(req.query.count) // es undefined cuando no nos lo pasan
    // console.log('Count: ', count)

    // // undefined, NaN, null
    // if (!count || count < 1) {
    //     console.log('No nos dieron un count valido :(')
    //     count = DEFAULT_COUNT
    // }
    // console.log('Final count: ', count)

    // Opcion 2: Con nullish operator
    // let count = Number(req.query.count ?? DEFAULT_COUNT)
    // if (Number.isNaN(count) || count < 1) count = DEFAULT_COUNT
    // console.log('Final count: ', count)

    // const gender = req.query.gender

    // let responseData = koders

    // Opcion 3: Operador Ternario
    const countNumber = Number(req.query.count)
    const isValidNumber = countNumber && countNumber > 0

    const count = isValidNumber ? countNumber : DEFAULT_COUNT
    console.log(count)

    /*
        filter
        splice, slice
        map
        reduce
    */
    // Opcion 1: Slice
    // const filteredKoders = koders.slice(0, count)

    // Opcion 2: Splice
    // koders.splice(0, koders.length - count)
    // console.log(koders)

    // Opcion 3: Map
    // const filteredKoders = koders.map((koder, index) => {
    //     // Solo deja pasar los primeros Koders antes de la cuenta
    //     if (index < count) return koder
    // })

    // Opcion 4: Filter
    // const filteredKoders = koders.filter((_, index) => index < count)

    // if (gender) {
    //     responseData = koders.filter((koder) => koder.genero === gender)
    // }

    res.json(filteredKoders) // convierte a koders a JSON y manda el header text/json
})