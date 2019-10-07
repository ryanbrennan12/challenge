const express = require("express");
const routes = require('./routes/api.js');
const path = require('path');
const PORT = 3004;

const app = express();

app.use(express.static(path.resolve(__dirname + '/public')));
app.use('/', routes);

app.listen(PORT,  () => console.log(`Server listening on port ${PORT}!`));

