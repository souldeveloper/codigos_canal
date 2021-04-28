const horaContainer = document.querySelector('.hora')
const minutosContainer = document.querySelector('.minutos')
const segundosContainer = document.querySelector('.segundos')

const actualizarHora = setInterval(function(){
    console.log('pum pum')
    const tiempo = new Date()
    let hora = tiempo.getHours()
    let minutos = tiempo.getMinutes()
    let segundos = tiempo.getSeconds()
    horaContainer.innerHTML = hora
    minutosContainer.innerHTML = minutos
    segundosContainer.innerHTML = segundos
},1000)