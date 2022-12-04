const express = require('express');

const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('<h1>Application node JS basique</h1>');
});

app.listen(port, () => {
    console.log(`L'application est en écoute sur le port ${port}.`);
});
