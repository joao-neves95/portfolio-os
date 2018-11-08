// REST API ROUTES.
'use strict';
const router = require( 'express' ).Router();
const authRoute = require('./auth');
const desktopRoute = require( './desktop' );
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );

// AUTH:
router.post( '/auth', authRoute );

// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles );

// #endregion

// #region USERS

router.get( '/users', usersRoute.getUsers );
router.get( '/users/:id', usersRoute.getUser );
router.get( '/users/:id/socialAccounts', usersRoute.getUserSocialAccounts );

// #endregion

// #region FILE SYSTEM

router.get( '/file-system', fileSystemRoute.getUserItem );
router.put( '/file-system', fileSystemRoute.putUserItem );
router.post( '/file-system', fileSystemRoute.postUserItem );
router.delete( '/file-system', fileSystemRoute.deleteUserItem );

// #endregion

module.exports = router;
