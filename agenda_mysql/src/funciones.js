

const nombre = document.querySelector('#nombre')
const numero = document.querySelector('#numero')
const btnAgregar = document.querySelector('#btn_agregar')
const btnBorrar = document.getElementsByClassName('borrar')

btnAgregar.addEventListener('click', function(){
    window.location.href = `agregar/${nombre.value}/${numero.value}`
})

for(let i of btnBorrar){
    i.addEventListener('click', function(){
        let id = this.getAttribute('id')
        window.location.href = `borrar/${id}`
    })
}