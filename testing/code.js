//Referenciar todos los elementos que vamos utilizar
/* Ya sean botones o diferentes emplazamientos de nuestro sitio
donde vamos a pintar información referente al pdf. */
const numeroChofer = document.getElementById('numeroChofer')
const btnBuscar = document.getElementById('btnBuscar')
const divTurnos = document.getElementById('turnos')
const add_fila = document.getElementById('add_fila')
const dias = document.getElementById('dias')
/* Crear el listener del boton.. click function */
btnBuscar.addEventListener('click', ()=>{
    /* LLamada a la libreria y obtener el documento con la referencia al archivo */
    pdfjsLib.getDocument('pdf.pdf').promise.then( (pdf) => {
        /* obtener la referencia de el numero de paginas en caso de trabajar con mas de una */
    const numPages = pdf.numPages
        //Obtener el numero de pagina que deseamos
        pdf.getPage(numPages).then((page)=>{
            //Obtener el contenido del pdf
            page.getTextContent().then(r => {
                //Recorrer todos los items del pdf
                for(let i = 0; i < r.items.length; i++){
                    //Buscar dentro del array el que coincida con el valor introducido en el campo de texto en este
                    //caso numérico
                    if(r.items[i].str.includes(numeroChofer.value)){
                        //Definir el inicio y el fin de nuestra busqueda!
                        let primero = i
                        let ultimo = i + 17
                        //Crear un nuevo array con los terminos de nuestra busqueda
                        const turnos = r.items.slice(primero, ultimo)
                        //Array que extrae los dias de la semana de este pdf.
                        const dias_semana = r.items.slice(0,13)
                        //Recorrer los dias de la semana para mostrarlos
                        for(d=0; d < dias_semana.length; d ++){
                            if(d % 2  === 0){
                                const numeroDias = document.createElement('td') //Crear el elemento td en la tabla
                                numeroDias.textContent = dias_semana[d].str //Insertar los datos del pdf en el elemento
                                dias.appendChild(numeroDias) //Pintarlos en nuestro HTML
                            } 
                            
                        }
                        //Recorrer los elementos deseados
                        for(j = 0; j < turnos.length; j++){
                            if(j % 2 === 0){ //Comprobar si es par para que coincida con el pdf
                                const celda = document.createElement('td')
                                if(turnos[j].str === 'L'){ //Comprobar si es dia L en tal caso pintar Libre y añadir css
                                    turnos[j].str = 'Libre'
                                    celda.classList.add('libre')
                                }
                                celda.textContent = turnos[j].str //Insertar datos en el elemento
                                add_fila.appendChild(celda) //Pintar los datos insertados en el HTML
                            }
                        }
                    }
                }
            })
        })
    })
    

} )

