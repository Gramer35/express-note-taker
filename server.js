const express = require('express');
const routeHtml = require('./routes/html.js');
const apiHtml = require('./routes/api.js');


const path = require('path');

const app = express();

const PORT = 3001;

app.use(express.static('public'));




app.listen(PORT, () =>
    console.log(`App listnening at http://localhost:${PORT}`)
);