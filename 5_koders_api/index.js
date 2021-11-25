const express = require('express')
const fs = require('fs/promises')
const { findSourceMap } = require('module')

const PORT = 8080
const ENCODING = 'utf8'
const KODERS_FILE = 'koders.json'

const app = express()
// Middleware para convertir request a JSON
app.use(express.json()) // equivalente a JSON.parse

// ROUTES
app.get('/koders', async (req, res) => {
    const koders = await loadKoders()

    const count = parseInt(req.query.count ?? 0)
    const gender = req.query.gender

    let responseData = null
    if (gender) {
        responseData = koders.filter((koder) => koder.genero === gender)
    }

    if (count) {
        const dataToCount = responseData ?? koders
        responseData = dataToCount.splice(0, count)
    }

    res.json(responseData) // convierte a koders a JSON y manda el header text/json
})

app.post('/koders', async (req, res) => {
    const koders = await loadKoders()
    const newKoder = req.body

    if (!isValidKoder(newKoder)) {
        res.statusCode = 400
        res.end('Please provide a valid Koder object')

        return
    }

    res.statusCode = 201
    koders.push(newKoder)
    await saveKoders(koders)

    res.json(newKoder)
})

app.patch('/koders/:name', async (req, res) => {
    const koders = await loadKoders()

    const newKoder = req.body
    const koderName = req.params.name

    if (!isValidKoder(newKoder)) {
        res.statusCode = 400
        res.end('Please provide a valid Koder object')

        return
    }

    const koderIndex = koders.findIndex((koder) => koder.nombre === koderName)

    if (koderIndex === -1) {
        res.statusCode = 404
        res.end('Koder Not Found')

        return
    }

    koders[koderIndex].nombre = newKoder.nombre
    koders[koderIndex].genero = newKoder.genero

    await saveKoders(koders)

    res.json(newKoder)
})

// localhost:8080/koders/Otro
app.patch('/koders/map/:name', async (req, res) => {
    const koders = await loadKoders()

    const koderName = req.params.name
    const newKoderData = req.body

    if (!isValidKoder(newKoderData)) {
        res.statusCode = 400
        res.end('Please provide a valid Koder object')
    }

    let koderFound = false
    let modifiedKoder = {}
    const modifiedKoders = koders.map((koder) => {
        if (koder.nombre === koderName) {
            koderFound = true

            koder.nombre = newKoderData.nombre
            koder.genero = newKoderData.genero

            modifiedKoder = { ...koder }
        }

        return koder
    })

    if (!koderFound) {
        res.statusCode = 404
        res.end('Koder Not Found')
        return
    }

    await saveKoders(modifiedKoders)
    res.json(modifiedKoder)
})

app.listen(PORT, () => {
    console.log(`Koders API listening at http://localhost:${PORT}`)
})

// HELPERS
function isValidKoder(koder) {
    return koder.nombre && koder.genero
}

/*
    Loads KODERS_FILE and returns the koders property value
*/
async function loadKoders() {
    try {
        const content = await fs.readFile(KODERS_FILE, ENCODING)
        const parsedFile = JSON.parse(content)

        return parsedFile.koders
    } catch (error) {
        console.error('No se pudieron cargar los koders')
        console.error(error)

        return []
    }
}

/*
    Saves koders value in a new object which is written to KODERS_FILE
*/
async function saveKoders(koders) {
    try {
        const newObject = { koders, mentores: [] } // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4) // para mantener formato de JSON

        await fs.writeFile(KODERS_FILE, newContent, ENCODING)
    } catch (error) {
        console.error('No se pudieron guardar los koders')
        console.error(error)
    }
}
