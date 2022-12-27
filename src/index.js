// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

server.set('view engine', 'ejs');

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database('./src/data/database.db', {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCard = [];

server.post('/card', (req, res) => {
  console.log(req.body);
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
    // savedCard.push(newCard);

    console.log('true');
    response = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    const insertStmt = db.prepare(
      'INSERT INTO cards (id, palette, name, email, photo, phone, linkedin, github, job) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );

    const result = insertStmt.run(
      newCard.id,
      newCard.palette,
      newCard.name,
      newCard.email,
      newCard.photo,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.job
    );
    res.json(result);
  }
});
//Endpoint que devuelve la tarjeta creada
server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards WHERE id= ?');
  const useCard = query.get(req.params.id);
  console.log(useCard);
  res.render('cards', useCard);
});

// Static Servers

const staticServerPathWeb = './src/public-react'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerStylesWeb = './src/public-styles';
server.use(express.static(staticServerStylesWeb));
