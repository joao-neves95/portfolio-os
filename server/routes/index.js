// REST API ROUTES.
'use strict';
const path = require('path');
const router = require( 'express' ).Router();
const authRoute = require('./auth');
const desktopRoute = require('./desktop');

// AUTH:
router.post( '/auth', authRoute );

// DESKTOP:
router.get('/desktop', desktopRoute.getDesktopHtmlPage);
router.get(['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles);

module.exports = router;
