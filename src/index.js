// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCard = [];

server.post('/card', (req, res) => {
  // console.log(req.body)
  const dataCard = req.body;

  if (
    dataCard.name === '' ||
    dataCard.job === '' ||
    dataCard.email === '' ||
    dataCard.linkedin === '' ||
    dataCard.github === '' ||
    dataCard.palette === '' ||
    dataCard.photo === ''
  ) {
    console.log('false');
    response = {
      success: false,
      error: 'Debe ingresar todos los campos',
    };
    res.json(response);
  } else {
    const newCard = {
      id: uuidv4(),
      ...req.body,
    };
    savedCard.push(newCard);

    console.log('true');
    response = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    res.json(response);
  }
});

// Static Servers

const staticServerPathWeb = './src/public-react'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));
