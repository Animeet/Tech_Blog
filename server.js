const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const controllers = require('./controllers');
const session = require('express-session');
const { engine } = require('express-handlebars');

const app = express();

app.engine('hbs', engine({
  extname: ".hbs",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true
}
}))

app.set('view engine', 'hbs');
// app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(controllers);


db.sync().then(() => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT))
  });