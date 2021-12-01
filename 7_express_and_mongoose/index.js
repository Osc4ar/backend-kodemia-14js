require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const Koder = require('./koder.model')

// Paso opcional, pero recomendado
const PORT = process.env.PORT

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

// Health endpoint
app.get('/', (req, res) => {
    res.end('server is running')
})

// /koders/:id - Solo se refiere a un koder
// /koders?name=Odon - Puede haber mas de un Odon
app.get('/koders', async (req, res) => {
    try {
        // equivalente a const gender = req.query.gender
        const { gender, age, min_age, max_age } = req.query // en la request vienen los detalles

        const filters = {}

        const MAX_AGE_FILTER = { $lte: max_age }
        const MIN_AGE_FILTER = { $gte: min_age }
        const RANGE_AGE_FILTER = [
            { age: MAX_AGE_FILTER },
            { age: MIN_AGE_FILTER },
        ]

        if (gender) filters.gender = gender
        if (age) filters.age = age

        const isOnlyMinAge = min_age && !max_age
        const isOnlyMaxAge = max_age && !min_age
        const isAgeRange = max_age && min_age

        if (isOnlyMinAge) {
            filters.age = MIN_AGE_FILTER
        } else if (isOnlyMaxAge) {
            filters.age = MAX_AGE_FILTER
        } else if (isAgeRange) {
            filters.$and = RANGE_AGE_FILTER
        }

        if (min_age && max_age) console.log('Filtros: ', filters)

        // Cargar los koders
        const koders = await Koder.find(filters)

        res.json(koders) // viene el resultado
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.end()
    }
})

app.post('/koders', async (req, res) => {
    try {
        const { name, lastName, gender, age } = req.body

        const newKoder = await Koder.create({
            name,
            lastName,
            gender,
            age,
        })

        res.statusCode = 201
        res.json({
            success: true,
            data: {
                koder: newKoder,
            },
        })
    } catch (error) {
        res.statusCode = 400
        res.json({
            success: false,
            error,
        })
    }
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
