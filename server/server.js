/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
require( 'dotenv' ).config();
const path = require('path');
const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const logger = require( 'morgan' );
const helmet = require( 'helmet' );
const helmetConfig = require( './portfolio-os/config/helmet' );
const cors = require( 'cors' );
const corsConfig = require( './portfolio-os/config/cors' );
const authConfig = require( './portfolio-os/middleware/authConfig' );
const noCache = require( './portfolio-os/middleware/noCache' );
const portfolioOSRoutes = require( './portfolio-os/routes/porfolioOSIndex' );
const app = express();

const PORT = process.env.PORT; // 3000

app.use( helmet( helmetConfig ) );
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

app.use( '/portfolio-os', noCache, portfolioOSRoutes );

// #endregion

app.use( ( req, res, next ) => {
  // TODO: (SERVER) Send 404 page.
  return res.status( 404 ).send( '404 - Not Found.' );
} );

app.listen( PORT, () => {
  console.info( `The server is listening at http://localhost:${PORT}` );
} );
