const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const SLOT = process.env.SLOT || 'blue';

app.get('/', (req, res) => {
    res.json({ message: `Version ${SLOT}` });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', slot: SLOT });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`API ${SLOT} : ${PORT}`);
});