# servidor-prueba
Servidor en 2 min con node  y express.

1- mkdirn nombre-carpeta . En mi caso la cree en el escritorio
  mkdir Escritorio/servidor-web

2. nos movemos dentro de la carpeta y escribimos : 
         -npm init -> crear el archivo package.json y nos pedira que ingresemos informacion complementaria
              sobre nuestro proyecto.
         - npm install express --save -> este comandito instalara express y actualizara nuestro package.json.
3. Ya teniendo instalado express vamos manos a la obra:
    servidor-web/index.js
    creamos el archivo index.js en nuestra carpeta y ingresamos el siguiente codigo
    
    const express = requiere('express');
    const app = express();
    
    app.use(express.static(__dirname + '/public/')); //directorio raiz de nuestro proyecto.
    app.listen('3000', function() { //numero del puerto de nuestro servidor accedemos mediante localhost:3000 en la url
      console.log('Servidor web escuchando en el puerto 3000'); //mensaje que se mostrara en la consola al momento de arrancar nuestro servidor
    });
  
4.Creamos la carpeta public/
  dentro creamos en mi caso un archivo html y un archivo js
  index.html y main.js
  
5. posteriormente tras haber ingresado al contenido a nuestro archivo html
  tipeamos en el terminal y estando obviamente en dentro de nuestra carpeta servidor-web
  node index.js y buoala.
