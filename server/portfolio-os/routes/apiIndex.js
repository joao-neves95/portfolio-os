// " portfolio-os/api/ "
const router = require( 'express' ).Router();
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );
const addAppDTOSchema = require( '../models/addAppDTO' );


// #region USER PROFILES

router.get( '/users', usersRoute.getUsers );
router.get( '/users/:id', usersRoute.getUser );
router.get( '/users/:id/profile', usersRoute.getUser );
router.get( '/user/profile', usersRoute.getUserProfile );
router.get( '/users/social-accounts', usersRoute.getUserSocialAccounts );

// #endregion

// #region USER FILE SYSTEM

router.get( '/users/file-system', fileSystemRoute.getUserItem );
router.put( '/users/file-system', fileSystemRoute.putUserItem );
router.post( '/users/file-system', fileSystemRoute.postUserItem );
router.delete( '/users/file-system', fileSystemRoute.deleteUserItem );

// #endregion

// #region APP STORE

router.get( '/app-store', ( req, res, next ) => { req.schema = addAppDTOSchema; }, appStoreRoute.postApp );
//router.put( '/file-system', ensureAuthentication, fileSystemRoute.putUserItem );
//router.post( '/file-system', ensureAuthentication, fileSystemRoute.postUserItem );
//router.delete( '/file-system', ensureAuthentication, fileSystemRoute.deleteUserItem );

// #endregion

module.exports = router;

