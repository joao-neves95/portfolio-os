// REST API ROUTES.
'use strict';
const router = require( 'express' ).Router();
const authRoute = require('./auth');
const desktopRoute = require( './desktop' );
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );
const ensureAuthentication = require( '../middleware/ensureAuthentication' );

// AUTH:
router.post( '/auth', authRoute );

// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', ensureAuthentication, desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], ensureAuthentication, desktopRoute.getDesktopFiles );

// #endregion

// #region USER PROFILES

router.get( '/users', ensureAuthentication, usersRoute.getUsers );
router.get( '/users/:id', ensureAuthentication, usersRoute.getUser );
router.get( '/users/:id/socialAccounts', ensureAuthentication, usersRoute.getUserSocialAccounts );

// #endregion

// #region FILE SYSTEM

router.get( '/file-system', ensureAuthentication, fileSystemRoute.getUserItem );
router.put( '/file-system', ensureAuthentication, fileSystemRoute.putUserItem );
router.post( '/file-system', ensureAuthentication, fileSystemRoute.postUserItem );
router.delete( '/file-system', ensureAuthentication, fileSystemRoute.deleteUserItem );

// #endregion

module.exports = router;
