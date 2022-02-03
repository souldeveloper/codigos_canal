const container = document.querySelector('#container')

const llamadaApi = async () => {
    const peticion = await fetch('https://rickandmortyapi.com/api/character')
    const datos = await peticion.json()
    const {results} = datos
    results.map( item => {
        const personajeDiv = document.createElement('div')
        const imagen = document.createElement('img')
        const nombre = document.createElement('h2')
        const enlace = document.createElement('a')
        enlace.href = `personaje.html?id=${item.id}`
        imagen.src = item.image
        nombre.innerHTML = item.name
        personajeDiv.appendChild(imagen)
        enlace.appendChild(imagen)
        personajeDiv.appendChild(nombre)
        personajeDiv.appendChild(enlace)
        container.appendChild(personajeDiv)
    })
    console.log(results)
}

llamadaApi()