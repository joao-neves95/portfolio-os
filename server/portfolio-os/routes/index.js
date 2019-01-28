/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// " /portfolio-os/ "
'use strict';
const path = require( 'path' );
const express = require( 'express' );
const router = express.Router();
const authRoute = require( './auth' );
const desktopRoute = require( './desktop' );
const portfolioOSAPIIndex = require( './apiIndex' );
const ensureAuthentication = require( '../middleware/ensureAuthentication' );
const noCache = require( '../middleware/noCache' );
const blockGuest = require( '../middleware/blockGuest' );

router.get( '/', ( req, res ) => {
  res.status( 301 ).redirect( 'portfolio-os/auth' );
} );
router.use( '/', express.static( path.join( process.cwd(), './client/wwwroot' ) ) );


// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', ensureAuthentication, noCache, desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], ensureAuthentication, noCache, desktopRoute.getDesktopFiles );

// #endregion

router.use( '/auth', noCache, authRoute );

router.use( '/api', blockGuest, ensureAuthentication, noCache, portfolioOSAPIIndex );

module.exports = router;
