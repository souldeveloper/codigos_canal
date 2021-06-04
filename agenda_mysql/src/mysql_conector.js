//importar mysql
import mysql from 'mysql'
let todos
//crear la conexion
const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'manuel',
        password: '123456',
        database: 'agenda_contactos'
    }
)

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO agenda (id_contacto, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = ()=> {
    const sql = 'SELECT * FROM agenda'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto = id => {
    const sql = `DELETE FROM agenda where id_contacto=${id}`
    conector.query(sql)
}







export {agregarContacto, obtenerContactos, borrarContacto}