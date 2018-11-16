'use strict';
require( 'dotenv' ).config();
const path = require('path');
const express = require('express');
const logger = require( 'morgan' );
const cors = require( 'cors' );
const authConfig = require( './server/middleware/authConfig' );
const routes = require('./server/routes/index.js');
const app = express();

const PORT = process.env.PORT; // 3000

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( logger( 'dev' ) );

// Serve public files.
app.use( '/', express.static( path.join( process.cwd(), './client/wwwroot' ) ) );

// authConfig( app );

app.use( '/', routes );

// TODO: Add 400 page.
app.use( ( req, res, next ) => {
  return res.status( 400 ).send( '404 - Not Found.' );
} );

app.listen( PORT, () => {
  console.info( `The server is listening at http://localhost:${PORT}` );
} );
