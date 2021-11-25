const express = require('express')
const routerKoders = require('./routers/koders')

const PORT = 8080

const app = express()
// Middleware para convertir request a JSON
app.use(express.json()) // equivalente a JSON.parse, req.body = String

// Servidor, en las rutas que empiecen con /koders, usa lo definido en KodersRouter
app.use('/koders', routerKoders) 

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
