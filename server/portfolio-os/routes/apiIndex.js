/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// " portfolio-os/api/ "
'use strict';
const router = require( 'express' ).Router();
const usersRoute = require( './users' );
const fileSystemRoute = require( './fileSystem' );
const appStoreRoute = require( './appStore' );
const addAppDTOSchema = require( '../models/addAppDTO' );
const jsonValidator = require( '../middleware/jsonValidator' );
const theCodeChanRoute = require( '../routes/theCodeChan' );

// #region USER PROFILES

router.get( '/users/last-logged-in', usersRoute.getUsersLastLoggedIn );
router.get( '/users/:id/profile', usersRoute.getUserProfileById );

router.get( '/user/profile', usersRoute.getThisUserProfile );
router.put( '/user/profile/summary', usersRoute.putUserSummary );
router.post( '/user/profile/skills', usersRoute.addSkill );
router.put( '/user/profile/skills/:skillId', usersRoute.updateSkill );
router.delete( '/user/profile/skills/:skillId', usersRoute.deleteSkill );
router.get( '/user/profile/links/codepen', usersRoute.getThisUserCodePenLinks );
router.post( '/user/profile/links', usersRoute.addLink );
router.put( '/user/profile/links/:linkId', usersRoute.updateLink );
router.delete( '/user/profile/links/:linkId', usersRoute.deleteLink );
router.get( '/user/installed-apps', usersRoute.getInstalledApps );
router.post( '/user/installed-apps/:appId', usersRoute.installApp );

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
router.delete( '/app-store/:appId', appStoreRoute.deleteApp );

// #endregion

// #region THE CODE CHAN

router.get( '/the-code-chan/boards', theCodeChanRoute.getAllBoards );
router.get( '/the-code-chan/:boardId/threads', theCodeChanRoute.getThreadsPaginated );
router.post( '/the-code-chan/:boardId/threads', theCodeChanRoute.postThread );
router.get( '/the-code-chan/:threadId/replies', theCodeChanRoute.getRepliesPaginated );
router.post( '/the-code-chan/:threadId/replies', theCodeChanRoute.postReply );

// #endregion

module.exports = router;
