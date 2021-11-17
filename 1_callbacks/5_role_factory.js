// Recibe una lista de roles, que regresa?
function generateRoleValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('autorizado');
        } else {
            console.log('denegado');
        }
    }
}

// function onlyAdmin(rol) {
//     if (['admin'].includes(rol)) {
//         console.log('autorizado');
//     } else {
//         console.log('denegado');
//     }
// }

const onlyAdmin = generateRoleValidator(['admin'])

const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])

const onlyDesarrolador = generateRoleValidator(['desarrollador'])

onlyUserAndAdmin('user') // autorizado
onlyUserAndAdmin('admin') // autorizado
onlyUserAndAdmin('desarrollador') // denegado

onlyDesarrolador('desarrollador') // autorizado


const usuarios = [
    {
        nombre: 'balan',
        rol: 'admin'
    },
    {
        nombre: 'jairo',
        rol: 'desarrollador'
    },
    {
        nombre: 'marco',
        rol: 'calidad'
    }
]

const roles = usuarios.map(usuario => usuario.rol);

const usuariosValidos = ['admin', 'desarrollador', 'calidad'];
const validateUsers = generateValidator(usuariosValidos);

const productosValidos = ['sabritas', 'switch'];
const validadorDeProductos = generateValidator(productosValidos);

