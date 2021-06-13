import express from 'express'
import {db} from './configuracion/firebase_config.js'

const aplicacion = express()

aplicacion.listen('8000', (req, res) => {
    console.log('aplicacion iniciada en http://localhost:8000')
    
})

aplicacion.set('views', './vistas')
aplicacion.set('view engine', 'ejs')

aplicacion.use(express.static('./estilos'))

aplicacion.use(express.urlencoded({extended:true}))



aplicacion.get('/', async(req, res) => {
    const peticion = await db.collection('contactos').get()
    const {docs} = peticion
    const contactos = docs.map(contacto => ({id:contacto.id, datos:contacto.data()}))

    res.render('index', {titulo:'Aplicacion de contactos', contactos:contactos}) 
})

aplicacion.post('/agregar', (req,res)=>{
    const contacto = {
        nombre: req.body.nombre,
        numero: req.body.numero
    }
    db.collection('contactos').add(contacto)
    res.redirect('/')
})

aplicacion.get('/borrar/:id', (req, res) => {
    let id = req.params.id
    db.collection('contactos').doc(id).delete()
    res.redirect('/')
})

aplicacion.get('/contacto/:id', async(req, res) => {
    let id = req.params.id
    let peticion = await db.collection('contactos').doc(id).get()
    let contacto = {id:id, datos:peticion.data()}
    res.render('contacto', {contacto})

})