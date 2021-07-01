import mongoose from 'mongoose'

const {Schema} = mongoose

const conect = 'mongodb+srv://manuel:Alma2010@cluster0.vjckp.mongodb.net/bd_contactos?retryWrites=true&w=majority'
mongoose.connect(conect, {useNewUrlParser: true, useUnifiedTopology: true});

const contactoSchema = new Schema({
    nombre: String,
    numero:Number,
    direccion:String,
    email:String
})

const Contacto = mongoose.model('contactos', contactoSchema)

const agregarContacto = (req, res) => {

    const contacto = new Contacto({
        nombre: req.body.nombre,
        numero :Number(req.body.numero),
        direccion:req.body.direccion,
        email:req.body.email
    })
    contacto.save()
    .then(re => {
        res.redirect('/')
    })
}

const todosLosContactos = async(modelo) => {
    const resultados = await modelo.find({}, (err, docs)=>{
        return docs
    })
    return resultados
}

const borrarContacto = (modelo, id, res) => {
    modelo.deleteOne({_id: id}, (err,doc)=> {
        res.redirect('/')
    })
}

export {Contacto, agregarContacto, todosLosContactos, borrarContacto}

