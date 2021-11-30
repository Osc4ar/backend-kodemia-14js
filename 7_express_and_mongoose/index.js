const express = require('express')
const mongoose = require('mongoose')

const Koder = require('./koder.model')

const PORT = 8080

const DB_USER = 'oscar'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'cluster0.qwmic.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const app = express()

// Health endpoint
app.get('/', (req, res) => {
    res.end('server is running')
})

// /koders/:id - Solo se refiere a un koder
// /koders?name=Odon - Puede haber mas de un Odon
app.get('/koders', async (req, res) => {
    try {
        // Cargar los koders
        const koders = await Koder.find({})
        const koders = await Koder.find({})
        // request.query.gender; // en la request vienen los detalles

        // Mandar una respuesta
        // Version larga
        // res.setHeader('Content-Type', 'text/json')
        // res.send(JSON.parse(koders))
        // res.end()
        // Version corta
        res.json(koders) // viene el resultado
    } catch (error) {
        res.statusCode = 500
        res.end()
    }
})

app.post('/koders', (req, res) => {
    res.statusCode = 201
    res.json({ success: true })
})

// Es una promesa
mongoose
    .connect(URL)
    .then((connection) => {
        console.log('DB Connected!')

        // Arrancamos el servidor, cuando ya nos conectamos a la DB
        app.listen(PORT, () => {
            console.log('Server is running')
        })
    })
    .catch((error) => {
        console.error(error)
    })
