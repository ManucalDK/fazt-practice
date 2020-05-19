const express = require('express')
const router = express.Router()

const db = require('../database')

/*
    / -> Listar todo
    /create -> formulario de creacion
    /store -> guardar en la base de datos
    /show -> mostrar un elemento especifico
    /edit -> formulario con los datos pre-cargados para editar
    /update -> lanzo el update a la base de datos
    /destroy -> eliminar registro de la base de datos
*/

router.get('/', (req, res) => {
    res.render('usuarios/index')
})

router.get('/crear', (req, res) => {
    res.send('Formulario de registro')
})

router.post('/crear', (req, res) => {
    res.send('Registro Creado')
})

router.get('/actualizar', (req, res) => {
    res.send('Formulario de Actualizacion')
})

router.put('/usuario', (req, res) => {
    res.send('Actualizo usuario en la BD')
})

router.delete('/usuario', (req, res) => {
    res.send('Usuario Eliminado')
})

module.exports = router