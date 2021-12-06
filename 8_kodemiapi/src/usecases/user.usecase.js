const User = require('../models/user.model')
const { hash, compare } = require('../lib/bcrypt')
const { sign } = require('../lib/jwt')

function getAll() {
    return User.find()
}

// SignUp o Registrarse
async function createUser({ name, email, password }) {
    const encryptedPassword = await hash(password)

    return User.create({
        name,
        email,
        password: encryptedPassword,
    })
}

async function login({ email, password }) {
    const userFound = await User.findOne({ email })

    if (!userFound) throw new Error('User not found')

    const encryptedPassword = userFound.password
    const isValidPassword = await compare(password, encryptedPassword)

    if (!isValidPassword) throw new Error('Wrong password')

    const token = sign({ id: userFound._id })

    return token
}

module.exports = {
    getAll,
    createUser,
    login,
}
