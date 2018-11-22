﻿/*
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
// TODO: Fix the authentication.
const ensureAuthentication = require( '../middleware/ensureAuthentication' );

router.use( '/', express.static( path.join( process.cwd(), './client/wwwroot' ) ) );

// AUTH:
router.use( '/auth', authRoute );

// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', ensureAuthentication, desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], ensureAuthentication, desktopRoute.getDesktopFiles );

// #endregion

router.use( '/api', ensureAuthentication, portfolioOSAPIIndex );

module.exports = router;
