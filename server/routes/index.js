// REST API ROUTES.
'use strict';
const router = require( 'express' ).Router();
const authRoute = require('./auth');
const desktopRoute = require( './desktop' );
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );
const ensureAuthentication = require( '../middleware/ensureAuthentication' );

const addAppDTOSchema = require( '../models/addAppDTO' );

// AUTH:
router.post( '/auth', authRoute );

// #region DESKTOP FILES (CSS / JS / IMG)

router.get( '/desktop', ensureAuthentication, desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], ensureAuthentication, desktopRoute.getDesktopFiles );

// #endregion

// #region USER PROFILES

router.get( '/users', ensureAuthentication, usersRoute.getUsers );
router.get( '/users/:id', ensureAuthentication, usersRoute.getUser );
router.get( '/users/social-accounts', ensureAuthentication, usersRoute.getUserSocialAccounts );

// #endregion

// #region USER FILE SYSTEM

router.get( '/users/file-system', ensureAuthentication, fileSystemRoute.getUserItem );
router.put( '/users/file-system', ensureAuthentication, fileSystemRoute.putUserItem );
router.post( '/users/file-system', ensureAuthentication, fileSystemRoute.postUserItem );
router.delete( '/users/file-system', ensureAuthentication, fileSystemRoute.deleteUserItem );

// #endregion

// #region APP STORE

router.get( '/app-store', ensureAuthentication, ( req, res, next ) => { req.schema = addAppDTOSchema; }, appStoreRoute.postApp );
//router.put( '/file-system', ensureAuthentication, fileSystemRoute.putUserItem );
//router.post( '/file-system', ensureAuthentication, fileSystemRoute.postUserItem );
//router.delete( '/file-system', ensureAuthentication, fileSystemRoute.deleteUserItem );

// #endregion

module.exports = router;
