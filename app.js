const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/works', (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`);
});

app.get('*', (req, res) => {
    res.send('<h1>404 file not found</h1>').status(404);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
