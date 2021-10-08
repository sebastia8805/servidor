
const{ Router} = require('express')

const rutas=Router()


rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.post('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.put('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.delete('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

//exporto rutas
module.exports=rutas