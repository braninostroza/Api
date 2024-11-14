const fs = require('fs');
const path = require('path');

// Función handler que actúa como el endpoint
exports.handler = async (event, context) => {
  try {
    // Leer el archivo articles.json
    const data = fs.readFileSync(path.join(__dirname, '../articles.json'), 'utf8');
    
    // Parsear el JSON y devolverlo como respuesta
    const articles = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(articles),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error reading articles data' }),
    };
  }
};
