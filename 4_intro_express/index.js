const express = require('express')

const server = express() // tambien le llaman server

const port = 8080

// definimo un handler
// para la ruta localhost:8080/ para el metodo GET
server.get('/', (req, res) => {
    res.send('Hola Koders')
})

// Post
server.post('/', (req, res) => {
    res.send('Aqui puedes crear cosas')
})

server.get('/koders', async (req, res) => {
    //   res.send('Aqui puedes obtener todos los koders')
    const message = {
        message: 'Aqui puedes obtener todos los koders',
    }
    // leer el archivo
    res.json(message) // convierte el objeto a un JSON en string
})

server.post('/koders', (req, res) => {
    const message = {
        message: 'Aqui puedes crear koders',
    }
    res.send(message)
})

server.put('/koders', (req, res) => {
    res.send('Aquí puedes sustituir un koder')
})

// Aqui se inicia su server o app
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
