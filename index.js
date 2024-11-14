const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Ruta para la raíz (/)
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Ruta para obtener los artículos desde el archivo JSON
app.get('/api/articles', (req, res) => {
  // Leer el archivo articles.json
  fs.readFile(path.join(__dirname, 'articles.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the articles data');
      return;
    }

    // Parsear el JSON y enviarlo como respuesta
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


