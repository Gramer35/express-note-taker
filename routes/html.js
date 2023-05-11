const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirName, '..public/html.index'))
});

routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirName, '../public/notes.index'))
});

module.exports = routes;