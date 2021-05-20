/* Apuntador a los elemntos HTML de donde obtendremos los datos */
const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
/* Apuntar a la lista que contendra los contactos */
const listaContactos = document.querySelector('.lista-contactos')
/* Apuntador al boton que guardara los datos */
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto')
/* Apuntador a localStorage donde almacenaremos los datos */
const db = window.localStorage

/* 
Crear la funcion donde almacenar los datos en el archivo funciones.
*/
btnAgregarContacto.onclick = () =>{
    let contacto = {
        id :Math.random(1,100),
        nombre : nombre.value,
        numero : numero.value,
        direccion : direccion.value
    }
    guardarContacto(db, contacto)
}

/* Generar la funcion que cargue todos los contactos en archivo 
funciones
*/

cargarContactos(db, listaContactos)