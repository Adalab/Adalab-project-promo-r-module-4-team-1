// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: '25mb'}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) => {
    // console.log(req.body)
    const dataCard = req.body;

    if(dataCard.name===""  || dataCard.job===""  || dataCard.email===""  || dataCard.linkedin===""  || dataCard.github===""  || dataCard.palette===""  || dataCard.photo===""  ){
      console.log('false');
      response = {
        success: false,
        error: "Debe ingresar todos los campos"
      };
      console.log(res.json(response));
      res.json(response);
    }
    else{
  

      console.log('true');
      response = {
        success: true,
        cardURL: "https://dev.adalab.es/card/16715369218063424"
      };
      console.log(res.json(response));
      res.json(response);
    } 

  });
