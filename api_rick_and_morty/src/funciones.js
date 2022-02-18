
export const obtenerTodo = async(url,setSiguiente, setAnterior, setTotal, setPaginas, setPersonajes) => {
    const peticion = await fetch(url)
    const {info, results} = await peticion.json()
    setSiguiente(info.next)
    info.prev != null ? setAnterior(info.prev) : setAnterior(null)
    setPaginas(info.pages)
    setTotal(info.count)
    setPersonajes(results)
}

export const obtenerPersonaje = async(id, setPersonaje) => {
    const peticion =  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const resultado = await peticion.json()
    setPersonaje(resultado)

}

