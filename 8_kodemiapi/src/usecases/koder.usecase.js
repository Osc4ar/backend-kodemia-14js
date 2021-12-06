const Koder = require('../models/koder.model')

function getAllKoders() {
    return Koder.find()
}

function createKoder(koder) {
    return Koder.create(koder)
}

function deleteKoderById(id) {
    return Koder.findByIdAndDelete(id)
}

module.exports = {
    getAllKoders,
    createKoder,
    deleteKoderById
}
