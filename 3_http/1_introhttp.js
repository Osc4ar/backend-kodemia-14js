const http = require('http')

const port = 8080

// Creamor un servidor, usando createServer
const server = http.createServer((request, response) => {
    const metodo = request.method
    console.log(`Metodo: ${metodo}`)

    const url = request.url
    console.log(`URL: ${url}`)

    // le definimos un todo el header, con writeHead
    // response.writeHead(200, {})
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/plain')

    // response.write('Hello World!')
    response.write('No se que hacer, aiuda')
    console.log('No se que hacer, aiuda')
    response.write('test')
    response.end()
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})
