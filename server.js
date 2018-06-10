'use strict'
const path = require('path');
const express = require('express');
const logger = require('morgan');
const routes = require('./server/routes/index.js');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('combined'));

// Serve public files.
app.use('/', express.static(path.join(process.cwd(), './client/wwwroot')));

// TODO: Add database connection.
app.use('/', routes);

app.listen(PORT, () => {
  console.info(`The server is listening on port ${PORT}`);
});
