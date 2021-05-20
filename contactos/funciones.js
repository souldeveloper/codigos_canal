/* Funcion para guardar los datos en el local Storage */

const guardarContacto =  (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos  = (db, parentNode) =>{
    let claves = Object.keys(db)
    console.log(claves)
    if(db.length > 0){
        for(clave of claves){
            /* let contacto = db.getItem(clave) para ver porque 
            parseamos el objeto */
            let contacto = JSON.parse(db.getItem(clave))
            console.log(contacto)
            /* Crear funcion de crear Contacto */
            crearContacto(parentNode, contacto, db)
           
        }
    }else{
        crearAlerta(parentNode, 'No tienes ningun contacto estas solo?')
    }
}

const crearContacto = (parentNode, contacto, db) =>{
    /* Crear los elementos necesarios */
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')
    /* Añadir los datos a los elementos necesarios */
    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'
    /* Añadir clases a los elementos necesarios */
    divContacto.classList.add('contacto')
    iconoBorrar.classList.add('material-icons','i-borrar')
    
    /* Añadir funcion borrar a todos los elementos de iconos */
    iconoBorrar.onclick = () =>{
        borrarContacto(contacto.id, db)
    }
    /* Anidar todos los elementos  */
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)
    /* Anidar dentro de nodo padre lista-contactos */
    parentNode.appendChild(divContacto)
}

const borrarContacto = (id, db) => {
    db.removeItem(id)
    window.location.href = '/'
}

const crearAlerta = (parentNode, mensaje) => {
    const alerta = document.createElement('div')
    alerta.classList.add('alerta')
    alerta.innerHTML = mensaje
    parentNode.appendChild(alerta)
}