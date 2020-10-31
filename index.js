const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.listen('3000',function(){
    console.log('Servidor de prueba nazi desde el puerto de Normandia 3000');;
})