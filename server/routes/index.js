'use strict'
const path = require('path');
const router = require('express').Router();
const authRoute = require('./auth');
const desktopRoute = require('./desktop');

router.post('/auth/login', authRoute.login);

router.get('/desktop', desktopRoute.getDesktopHtmlPage);
router.get(['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles);

module.exports = router;
