// " /portfolio-os/ "
'use strict';
const router = require( 'express' ).Router();
const authRoute = require( './auth' );
const desktopRoute = require( './desktop' );
const portfolioOSAPIIndex = require( './apiIndex' );
const ensureAuthentication = require( '../middleware/ensureAuthentication' );

// AUTH:
router.post( '/auth', authRoute );

// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', ensureAuthentication, desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], ensureAuthentication, desktopRoute.getDesktopFiles );

// #endregion

router.get( '/api', ensureAuthentication, portfolioOSAPIIndex );

module.exports = router;
