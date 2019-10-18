'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

// app.get('/', (request, response) => response.send('Hello World!'));

// app.get('/hello', (request, response) => response.send('Hallo World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));