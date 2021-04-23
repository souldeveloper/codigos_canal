/* referencia al storage */
const storage = window.localStorage
/* referencia al dom */
const check = document.querySelector('.toggle')
const body = document.querySelector('.body')

let oscuro = Boolean(storage.getItem('oscuro'))

const comprobarOscuro = oscuro => {
    if(oscuro){
        body.classList.add('change-color')
        check.checked = true
    }else{
        body.classList.remove('change-color')
        check.checked = false
    }
}
comprobarOscuro(oscuro)

check.addEventListener('click', function(){
    
    if(this.checked){
        body.classList.add('change-color')
        storage.setItem('oscuro', true)
    }else{
        body.classList.remove('change-color')
        storage.removeItem('oscuro')
    }
})