const koder = require('../usecases/koder.usecase')

async function getKoder(request, response) {
    try {
        const allKoders = await koder.getAllKoders()

        response.json({
            success: true,
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

module.exports = {
    getKoder,
}
