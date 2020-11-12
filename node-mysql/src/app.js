const express = require('express')

// Inicializar
 const app = express();

 //Configuración
 app.set('port', process.env.PORT || 3000)

 //Rutas

 app.get('/', (req, res) => {
     console.log("Se envio mensaje");
      res.json({ mensaje: "Hola a todos"})
 })

 //Levantar el servidor
 app.listen(app.get('port'), (error) => {
     if(error){
         console.log("Ha ocurrido un error: ", error);
     } else {
         console.log("Servidor en puerto: ", app.get('port'));
     }
 })