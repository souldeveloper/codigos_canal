import express from 'express'
import {Contacto, agregarContacto, todosLosContactos, borrarContacto } from './mongo_config/mongo_config.js'
const app = express()

app.set('views', './vistas')
app.set('view engine', 'ejs')

app.use(express.static('./estilos'))
app.use(express.urlencoded({extended:true}))


app.listen('8000', (req, res)=>{
    console.log('aplicacion en http://localhost:8000')
})

app.get('/', async(req, res)=> {
    let contactos = await todosLosContactos(Contacto)
    res.render('index', {contactos})
})

app.post('/agregar', (req,res)=>{
    agregarContacto(req,res)
})

app.get('/borrar/:id', (req, res)=> {
    let id = req.params.id
    borrarContacto(Contacto, id, res)
})