const express = require('express')
const cors = require('cors')
const routerKoders = require('./routers/koders')

const PORT = 8080

const app = express()
// Middleware para convertir request a JSON
app.use(express.json()) // equivalente a JSON.parse, req.body = String
app.use(cors())
app.options('*', cors())

app.use((req, res, next) => {
    console.log('Middleware de aplicacion')
    console.log('Ruta deseada ', req.url)

    // if (req.method === 'GET') next() // salta al siguiente paso

    // res.statusCode = 400
    // res.end()

    next()
})

// Servidor, en las rutas que empiecen con /koders, usa lo definido en KodersRouter
app.use('/koders', routerKoders)

app.use('/paginas', (req, res, next) => {
    console.log('Endpoint unicamente de /paginas')

    next()
})
// ROUTES

app.get('/paginas', (req, res) => {
    const arreglo = ['datos1', 'datos2', 'datos3']

    const pagina = req.query.p // este parametro siempre es string
    const index = parseInt(pagina)
    console.log('pagina ', pagina)

    // Antes: "1" + 1 = "11"
    // Ahora: 1 + 1 = 2
    res.end(JSON.stringify(arreglo[index - 1]))
})

app.listen(PORT, () => {
    console.log(`Koders API listening at http://localhost:${PORT}`)
})
