const express = require('express');
const routeHtml = require('./routes/html.js');
const apiHtml = require('./routes/api.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(routeHtml);
app.use(apiHtml);




app.listen(PORT, () =>
    console.log(`App listnening at http://localhost:${PORT}`)
);