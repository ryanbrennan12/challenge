const express = require("express");

const app = express();
const PORT = 3004;
const routes = require('/Users/ryanbrennan/Desktop/repls/hangman2.0/server/routes/api/index.js');


app.use(express.static('public'));
const path = require('path');
// app.use(express.static(path.resolve(__dirname + '/../public')));

app.use('/', routes);

app.listen(3000,  () => console.log("Example app listening on port 3000!"));