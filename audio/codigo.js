const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')
const volumen = document.querySelector('.volumen')

let audio

for(elemento of playCancion){
    elemento.addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        audio = new Audio(`./audios/${cancion}.mp3`)
        audio.play()
    })
}

for(elemento of stopCancion){
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}

volumen.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
})