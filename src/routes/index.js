const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

router.get('/saludo', (req, res) =>{
    res.send('Hola desde otra ruta')
})

module.exports = router