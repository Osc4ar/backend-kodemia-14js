// function loadKoders() {
//     const url = 'http://localhost:8080/koders'

//     fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((koders) => {
//             console.log(koders)
//             const p = document.getElementById('koders')
//             p.textContent = JSON.stringify(koders)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }

async function loadKoders() {
    const url = 'http://localhost:8080/koders'

    const response = await fetch(url) // Promesa 1
    const koders = await response.json() // Otra promesa

    console.log(koders)
    const p = document.getElementById('koders')
    p.textContent = JSON.stringify(koders)
}
