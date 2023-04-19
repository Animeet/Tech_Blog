const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const controllers = require('./controllers');
// const { engine } = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);



db.sync().then(() => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT))
  });