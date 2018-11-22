// " portfolio-os/api/ "
const router = require( 'express' ).Router();
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );
const addAppDTOSchema = require( '../models/addAppDTO' );
const jsonValidator = require( '../middleware/jsonValidator' );

// #region USER PROFILES

router.get( '/users/last-logged-in', usersRoute.getUsersLastLoggedIn );
router.get( '/users/:id/profile', usersRoute.getUser );
router.get( '/users/social-accounts', usersRoute.getUserSocialAccounts );

router.get( '/user/profile', usersRoute.getUserProfile );
router.put( '/user/profile/summary', usersRoute.putUserSummary );
router.post( '/user/profile/skills', usersRoute.addSkill );
router.put( '/user/profile/skills/:skillId', usersRoute.updateSkill );
router.delete( '/user/profile/skills/:skillId', usersRoute.deleteSkill );

// #endregion

// #region USER FILE SYSTEM

router.get( '/users/file-system', fileSystemRoute.getUserItem );
router.put( '/users/file-system', fileSystemRoute.putUserItem );
router.post( '/users/file-system', fileSystemRoute.postUserItem );
router.delete( '/users/file-system', fileSystemRoute.deleteUserItem );

// #endregion

// #region APP STORE

router.get( '/app-store', appStoreRoute.getApps );
router.post( '/app-store',
  ( req, res, next ) => {
    req.schema = addAppDTOSchema;
    next();
  },
  jsonValidator,
  appStoreRoute.postApp
);
//router.post( '/file-system', ensureAuthentication, fileSystemRoute.postUserItem );
//router.put( '/file-system', ensureAuthentication, fileSystemRoute.putUserItem );
//router.delete( '/file-system', ensureAuthentication, fileSystemRoute.deleteUserItem );

// #endregion

module.exports = router;

