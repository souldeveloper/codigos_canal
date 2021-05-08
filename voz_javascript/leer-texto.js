const texto = document.querySelector('.texto')
const btnLeerTexto = document.querySelector('.btn-leer')

btnLeerTexto.addEventListener('click', ()=>{
    const locutor = new SpeechSynthesisUtterance()
    const voz = window.speechSynthesis
    console.log(texto.value)
    locutor.text = texto.value
    voz.speak(locutor)
})