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

module.exports = {
  // Queries:
  // ?lastId=<int>&limit=<int>
  // Default: 0 & 10
  getApps: async ( req, res ) => {
    try {
      const lastId = !req.query.lastId ? 0 : req.query.lastId;
      const limit = !req.query.limit ? 10 : req.query.limit;
      const queryResult = await appStoreStore.getAppsPaginatedOrderByRatingAsync( lastId, limit );

      return res.status( 200 ).json( queryResult );

    } catch ( e ) {
      return res.status( 201 ).json( { 'msg': `There was an error while updating app "${sanitizeHTML( req.body.name )}".` } );
    }
  },

  getApp: ( req, res ) => {

  },

  // The app name must not exist.
  postApp: async ( req, res ) => {
    try {
      const queryResult1 = await appStoreStore.appExistsByName( sanitizeHTML( req.body.name ) );
      if ( queryResult1.length > 0 )
        return res.status( 400 ).json( { 'msg': 'App name already exists.' } );

      const queryResult2 = await appStoreStore.insertApp( req.user.id, sanitizeHTML( req.body.name ), sanitizeHTML( req.body.description ), sanitizeHTML( req.body.htmlIndexUrl ) );
      if ( queryResult2[0] <= 0 )
        return res.status( 500 ).json( { 'msg': 'There was an error while creating the new app.' } );

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

    } catch ( e ) {
      return res.status( 201 ).json( { 'msg': `There was an error while updating app "${sanitizeHTML( req.body.name )}".` } );
    }
  },

  deleteApp: ( req, res ) => {

  },


  rateApp: ( req, res ) => {

  },

  rerateApp: ( req, res ) => {

  }
};
