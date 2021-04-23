/* seleccion elementos del dom */
const check = document.querySelector('.toggle')
const body = document.querySelector('.body')

check.addEventListener('click', function(){
    
    if(this.checked){
        body.classList.add('change-color')
    }else{
        body.classList.remove('change-color')
    }
})

