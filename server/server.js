'use strict';
require( 'dotenv' ).config();
const path = require('path');
const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const logger = require( 'morgan' );
const cors = require( 'cors' );
const corsConfig = require( './portfolio-os/middleware/corsConfig' );
const authConfig = require( './portfolio-os/middleware/authConfig' );
const portfolioOSRoutes = require( './portfolio-os/routes/porfolioOSIndex' );
const app = express();

const PORT = process.env.PORT; // 3000

app.use( cors( corsConfig ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( cookieParser( process.env.COOKIE_SECRET ) );
app.use( logger( 'dev' ) );

// #region PUBLIC FILES.

app.use( '/', express.static( path.join( process.cwd(), './client/wwwroot' ) ) );

// #endregion

authConfig( app );

// #region PRIVATE API ROUTE.

app.use( '/portfolio-os', portfolioOSRoutes );

// #endregion

// TODO: Add 400 page.
app.use( ( req, res, next ) => {
  return res.status( 400 ).send( '404 - Not Found.' );
} );

app.listen( PORT, () => {
  console.info( `The server is listening at http://localhost:${PORT}` );
} );
