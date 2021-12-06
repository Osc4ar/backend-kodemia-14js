const user = require('../usecases/user.usecase')

async function createUser(request, response) {
    try {
        // Procesar request
        const newUser = request.body // Ya es objeto, por el middleware de JSON

        // Haces el caso de uso
        const createdUser = await user.createUser(newUser)

        // Le respondes al cliente
        response.statusCode = 201
        response.json({
            success: true,
            message: 'User created successfully',
            data: {
                user: createdUser,
            },
        })
    } catch (error) {
        console.error(error)

        response.statusCode = error.name === 'ValidationError' ? 400 : 500
        response.json({
            success: false,
            message: 'Could not create User',
            error,
        })
    }
}

async function getAllUsers(request, response) {
    try {
        // Haces el caso de uso
        const allUsers = await user.getAll()

        // Le respondes al cliente
        response.statusCode = 200
        response.json({
            success: true,
            message: 'All Users',
            data: {
                users: allUsers,
            },
        })
    } catch (error) {
        console.error(error)

        response.statusCode = 500
        response.json({
            success: false,
            message: 'Could not get Users',
            error,
        })
    }
}

async function login(request, response) {
    try {
        // Procesar request
        const userLoginInfo = request.body // Ya es objeto, por el middleware de JSON

        // Haces el caso de uso
        const token = await user.login(userLoginInfo)

        // Le respondes al cliente
        response.statusCode = 200
        response.json({
            success: true,
            message: 'Logged in successfully',
            data: {
                token,
            },
        })
    } catch (error) {
        console.error(error)

        if (
            error.message === 'User not found' ||
            error.message === 'Wrong Password'
        ) {
            response.statusCode = 400
            response.json({
                success: false,
                message: error.message,
                error,
            })
        } else {
            response.statusCode = 500
            response.json({
                success: false,
                message: 'Could not login User',
                error,
            })
        }
    }
}

module.exports = {
    createUser,
    getAllUsers,
    login,
}
