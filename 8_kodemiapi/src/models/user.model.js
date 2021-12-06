const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
    },
})

// model(coleccion: string, schema: mongoose.Schema)
const User = mongoose.model('user', userSchema)

// Exportamos el modelo Koder
module.exports = User
