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

// #region DESKTOP
router.get( '/desktop', desktopRoute.getDesktopHtmlPage );
router.get( ['/desktop/js/:fileName', '/desktop/css/:fileName'], desktopRoute.getDesktopFiles );
// #endregion

// #region USERS
router.get( '/users', usersRoute.getUsers );
router.get( '/users/:id', usersRoute.getUser );
router.get( '/users/:id/socialAccounts', usersRoute.getUserSocialAccounts );
// #endregion

// #region FILE SYSTEM
  // USER:
//router.get( '/file-system', fileSystemRoute.getFileSystem );
//router.get( '/file-system/user', fileSystemRoute.getUserFolder );
//router.get( '/file-system/user/images', fileSystemRoute.getUserImages );
//router.put( '/file-system/user/images', fileSystemRoute.putUserImages );
//router.post( '/file-system/user/images', fileSystemRoute.postUserImage );
//router.delete( '/file-system/user/images', fileSystemRoute.deleteUserImage );
//router.get( '/file-system/user/videos', fileSystemRoute.getUserVideos );
//router.put( '/file-system/user/videos', fileSystemRoute.putUserVideos );
//router.post( '/file-system/user/videos', fileSystemRoute.postUserVideo );
//router.delete( '/file-system/user/videos', fileSystemRoute.deleteUserVideo );
//router.get( '/file-system/user/documents', fileSystemRoute.getUserDocuments );
//router.put( '/file-system/user/documents', fileSystemRoute.putUserDocuments );
//router.post( '/file-system/user/documents', fileSystemRoute.postUserDocument );
//router.delete( '/file-system/user/documents', fileSystemRoute.deleteUserDocument );
//router.get( '/file-system/user/music', fileSystemRoute.getUserMusic );
//router.put( '/file-system/user/music', fileSystemRoute.putUserMusic );
//router.post( '/file-system/user/music', fileSystemRoute.postUserMusic );
//router.delete( '/file-system/user/music', fileSystemRoute.deleteUserMusic );
  // PORTFOLIO OS
//router.get( '/file-system/portfolio-os', fileSystemRoute.getPortfolioOSFolder );
//router.get( '/file-system/portfolio-os/images', fileSystemRoute.getPortfolioOSImages );
//router.post( '/file-system/portfolio-os/images', fileSystemRoute.postPortfolioOSImage );
//router.get( '/file-system/portfolio-os/videos', fileSystemRoute.getPortfolioOSVideos );
//router.post( '/file-system/portfolio-os/videos', fileSystemRoute.postPortfolioOSVideo );
//router.get( '/file-system/portfolio-os/documents', fileSystemRoute.getPortfolioOSDocuments );
//router.post( '/file-system/portfolio-os/documents', fileSystemRoute.getPortfolioOSDocument );
//router.get( '/file-system/portfolio-os/music', fileSystemRoute.getPortfolioOSMusic );
//router.post( '/file-system/portfolio-os/music', fileSystemRoute.postPortfolioOSMusic );
// #endregion

// APP STORE:
//router.get( '/app-store', appStoreRoute.getAll );
//router.post( '/app-store', appStoreRoute.postApp );
//router.get( '/app-store/:appName', appStoreRoute.getApp );
//router.put( '/app-store/:appName', appStoreRoute.putApp );
//router.delete( '/app-store/:appName', appStoreRoute.deleteApp );
//router.post( '/app-store/:appName/rating', appStoreRoute.rateApp );
//router.put( '/app-store/:appName/rating', appStoreRoute.rerateApp );

module.exports = router;
