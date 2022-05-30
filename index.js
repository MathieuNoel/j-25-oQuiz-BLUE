require('dotenv').config();

const express = require('express');
const app = express();

// active le moteur de rendu EJS
app.set('view engine', 'ejs');
// on va lui renseigner oÙ se situe le dossier views
app.set('views', './app/views');

app.use((req, res, next) => {
    res.locals.msg = "Hello !";
    next();
});

// on require notre router
const router = require('./app/router');
// et on le place dans un app.use
app.use(router);

app.listen(process.env.PORT);