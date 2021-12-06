const { verify } = require('../lib/jwt')

function auth(request, response, next) {
    try {
        // Con deestructuracion
        // const { authorization: token } = request.headers
        const token = request.headers.authorization
        if (!token) throw new Error('Token not provided')

        const isValidToken = verify(token)

        if (!isValidToken) throw new Error('Not Authorized, invalid token')

        response.locals.user = isValidToken.id

        next()
    } catch (error) {
        response.statusCode = 401

        response.json({
            success: false,
            message: 'Not Authorized, please login',
            error: error.message,
        })
    }
}

module.exports = auth
