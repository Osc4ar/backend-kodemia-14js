const koder = require('../usecases/koder.usecase')

async function getKoder(request, response) {
    try {
        // Haces el caso de uso
        const allKoders = await koder.getAllKoders()

        // Le respondes al cliente
        response.json({
            success: true,
            loggedInUser: response.locals.user,
            message: 'All Koders',
            data: {
                koders: allKoders,
            },
        })
    } catch (error) {
        console.error(error)
        response.statusCode = 500 // Server error
        response.json({
            success: false,
            message: 'Could not get Koders',
            error,
        })
    }
}

async function saveKoder(request, response) {
    try {
        // Procesar request
        const newKoder = request.body // Ya es objeto, por el middleware de JSON

        // Haces el caso de uso
        const savedKoder = await koder.createKoder(newKoder)

        // Le respondes al cliente
        response.statusCode = 201
        response.json({
            success: true,
            message: 'Koder created successfully',
            data: {
                koder: savedKoder,
            },
        })
    } catch (error) {
        console.error(error)

        response.statusCode = error.name === 'ValidationError' ? 400 : 500
        response.json({
            success: false,
            message: 'Could not save Koder',
            error,
        })
    }
}

async function deleteKoder(request, response) {
    try {
        // Procesar request
        const id = request.params.id

        if (!id) throw new Error('Invalid ID')

        // Haces el caso de uso
        const deletedKoder = await koder.deleteKoderById(id)

        if (!deletedKoder) throw new Error('Koder Not Found')

        // Le respondes al cliente
        response.json({
            success: true,
            message: 'Koder deleted successfully',
            data: {
                koder: deletedKoder,
            },
        })
    } catch (error) {
        console.error(error)

        switch (error.message) {
            case 'Invalid ID':
                response.statusCode = 400
                break
            case 'Koder Not Found':
                response.statusCode = 404
                break
            default:
                response.statusCode = 500
                break
        }

        response.json({
            success: false,
            message: 'Could not delete Koder',
            error,
        })
    }
}

module.exports = {
    getKoder,
    saveKoder,
    deleteKoder,
}
