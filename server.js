const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const { engine } = require('express-handlebars');

const app = express();





db.sync().then(() => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT))
  });