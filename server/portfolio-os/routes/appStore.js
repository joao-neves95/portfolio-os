/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const appStoreStore = require( '../dataAccess/appStoreStore' );
const { sanitizeHTML } = require( '../../../common/commonUtils' );
const GET_APPS_ERROR_MESSAGE = 'There was an error while getting the apps.';

// "portfolio-os/app-store"

// TODO: Test errors.

module.exports = {
  // Queries:
  // ?lastId=<int>&limit=<int>
  // Default: 0 & 10
  getApps: async ( req, res ) => {
    try {
      const lastId = !req.query.lastId ? 0 : req.query.lastId;
      if ( !Number.isInteger( lastId ) )
        return res.status( 400 ).json( { 'msg': GET_APPS_ERROR_MESSAGE + ' The parameter "lastId" must be an integer.' } );

      const limit = !req.query.limit ? 10 : req.query.limit;
      if ( !Number.isInteger( limit ) )
        return res.status( 400 ).json( { 'msg': GET_APPS_ERROR_MESSAGE + ' The parameter "limit" must be an integer.' } );

      const queryResult = await appStoreStore.getAppsPaginatedOrderByRatingAsync( lastId, limit );
      return res.status( 200 ).json( queryResult );

    } catch ( e ) {
      return res.status( 500 ).json( { 'msg': 'There was an unknown error while getting the apps.' } );
    }
  },

  // The app name must not exist.
  postApp: async ( req, res ) => {
    try {
      const appExists = await appStoreStore.appExistsByName( sanitizeHTML( req.body.name ) );
      if ( appExists.length > 0 )
        return res.status( 400 ).json( { 'msg': 'App name already exists.' } );

      const insertApp = await appStoreStore.insertApp( req.user.id, sanitizeHTML( req.body.name ), sanitizeHTML( req.body.description ), sanitizeHTML( req.body.htmlIndexUrl ), sanitizeHTML( req.body.startMenuIconUrl ) );
      if ( insertApp[0] <= 0 )
        return res.status( 500 ).json( { 'msg': 'There was an error while creating the new app.' } );

      return res.status( 201 ).json( { 'msg': 'App successfully added.', appId: insertApp[1] } );

    } catch ( e ) {
      return res.status( 500 ).json( { 'msg': 'There was an error while creating the new app.' } );
    }
  },

  putApp: async ( req, res ) => {
    try {
      const queryResult = await appStoreStore.updateApp(
        req.user.id, sanitizeHTML( req.params.appId ),
        sanitizeHTML( req.body.name ),
        sanitizeHTML( req.body.description ),
        sanitizeHTML( req.body.htmlIndexUrl )
      );
      if ( queryResult.length <= 0 )
        return res.status( 500 ).json( { 'msg': `There was an error while updating app "${sanitizeHTML( req.body.name )}".` } );

      return res.status( 201 ).json( { 'msg': 'App successfully created.' } );

    } catch ( e ) {
      return res.status( 500 ).json( { 'msg': `There was an unknown error while updating app "${sanitizeHTML( req.body.name )}".` } );
    }
  },

  deleteApp: async ( req, res ) => {
    try {
      const queryResult = await appStoreStore.deleteApp( req.user.id, req.params.appId );

      if ( queryResult.length <= 0 )
        return res.status( 404 ).json( { 'msg': 'There was an error while finding the app. App not found.' } );

      return res.status( 200 ).json( { 'msg': 'App successfully deleted.' } );

    } catch ( e ) {
      return res.status( 500 ).json( { 'msg': 'There was an unknown error while deletng the app.'})
    }
  },


  rateApp: ( req, res ) => {

  },

  rerateApp: ( req, res ) => {

  }
};
