const express = require('express');
const router = express.Router();

var json = ""
router.get('/data', function(request, response){
    var date = new Date(Date.now()).toISOString()
    var ip = request.ip
    var hostname = request.hostname
    console.log("IP: ", ip,"\tHostname:", hostname, "\tDate: ", date)
    response.send(json)
  });

router.post('/data', function(request, response){
    //  1. Registrar el dispositivo si no existe que envia la info en una tabla mysql que tendrá ID (autoincremental), MAC, IP, ULTIMA conexion DATE (envio de info), usuario al que pertenece
    //  2. Guardar el JSON enviado en Mongo

    var ip = request.ip
    console.log(ip)

    console.log(request.headers)
    console.log(request.body)
    response.json({requestBody: request.body})
    json = request.body
  });
  
module.exports = router;