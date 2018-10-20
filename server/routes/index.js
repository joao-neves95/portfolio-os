// REST API ROUTES.
'use strict';
const router = require( 'express' ).Router();
const authRoute = require('./auth');
const desktopRoute = require( './desktop' );
const usersRoute = require( './users' );

// AUTH:
router.post( '/auth', authRoute );

// DESKTOP:
router.get( '/desktop', desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles );

// USERS:
router.get( '/users', usersRoute.getUsers );
router.get( '/users/:id', usersRoute.getUser );
router.get( '/users/:id/files', usersRoute.getUserFiles );
router.get( '/users/:id/files/images', usersRoute.getUserImages );
router.put( '/users/:id/files/images', usersRoute.getUserImages );
router.get( '/users/:id/files/videos', usersRoute.getUserVideos );
router.put( '/users/:id/files/videos', usersRoute.getUserVideos );
router.get( '/users/:id/files/documents', usersRoute.getUserDocuments );
router.put( '/users/:id/files/documents', usersRoute.getUserDocuments );
router.get( '/users/:id/socialAccounts', usersRoute.getUserSocialAccounts );

module.exports = router;
