'use strict'
const path = require('path');
const express = require('express');
const routes = require('./server/routes/index.js');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve public files.
app.use('/', express.static(path.join(__dirname, './client/wwwroot')));

// TODO: Add database connection.
app.use('/', routes);

app.listen(PORT, () => {
  console.info(`The server is listening on port ${PORT}`);
});
