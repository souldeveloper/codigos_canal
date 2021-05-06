const btnVoz = document.querySelector('.btn-voz')
const contenido = document.querySelector('.contenido')
const body = document.querySelector('.body')

const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition
const reconocimiento = new reconocimientoVoz()

let respuestas = [
    'tu canal es una pasada',
    'menuda porqueria de canal',
    'mejor dedicate a otra cosa'
]

reconocimiento.onstart = function(){
    contenido.innerHTML = 'Estamos grabando la voz...'
}

reconocimiento.onresult = function(event){
    let mensaje = event.results[0][0].transcript
    console.log(event)
    contenido.innerHTML = mensaje
    leerTexto(mensaje)
}

function leerTexto(mensaje){
    const voz = new SpeechSynthesisUtterance()
    if(mensaje.includes('canal')){
        const respuesta = respuestas[Math.floor(Math.random()*respuestas.length)]
        voz.text = respuesta
    }else if(mensaje.includes('oscuro')){
        body.classList.add('oscuro')
    }else{
        voz.text = mensaje

    }
    voz.volume = 1
    voz.rate = 1
    voz.pitch = 1
    window.speechSynthesis.speak(voz)



}
btnVoz.addEventListener('click', function(){
    reconocimiento.start()
})