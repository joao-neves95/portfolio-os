// REST API ROUTES.
'use strict'
const path = require('path');
const router = require('express').Router();
const authRoute = require('./auth');
const desktopRoute = require('./desktop');

// AUTH:
router.post('/auth/login', authRoute.login);
router.post('/auth/register', authRoute.register); 

// DESKTOP:
router.get('/desktop', desktopRoute.getDesktopHtmlPage);
router.get(['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles);

module.exports = router;
