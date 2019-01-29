/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// api/portfolio-os/(users | user )/

'use strict';
const userStore = require( '../dataAccess/userStore' );
const { sanitizeHTML } = require( '../../../common/commonUtils' );

// NO VALIDATION:
// TODO: VALIDATION.

module.exports = {
  // Queries:
  // ?lastId=<int>&limit=<int>
  // Default: 0 & 10
  getUsersLastLoggedIn: async ( req, res ) => {
    try {
      const lastId = !req.query.lastId ? 0 : req.query.lastId;
      const limit = !req.query.limit ? 10 : req.query.limit;
      const result = await userStore.getUsersOrderByLastLogin( lastId, limit );

      if ( result.length > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( 'Error updating the user summary.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  getThisUserProfile: async ( req, res ) => {
    try {
      const userProfile = await userStore.getProfileAsync( req.user.id );
      return res.status( 200 ).json( userProfile );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error.' );
    }
  },

  getUserProfileById: async ( req, res ) => {
    try {
      const userProfile = await userStore.getProfileAsync( sanitizeHTML( req.params.id ) );
      return res.status( 200 ).json( userProfile );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error.' );
    }
  },

  putUserSummary: async ( req, res ) => {
    try {
      const result = await userStore.updateSummaryAsync( req.user.id, sanitizeHTML( req.body.summary ) );

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( 'Error updating the user summary.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  addSkill: async ( req, res ) => {
    try {
      const result = await userStore.addSkillAsync( req.user.id, sanitizeHTML( req.body.skill ) );

      if ( result[0] > 0 )
        // example "{ id: 2 }"
        return res.status( 200 ).json( result[1] );

      return res.status( 500 ).json( 'Error adding user skill.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  updateSkill: async ( req, res ) => {
    try {
      const result = await userStore.updateSkillAsync( req.user.id, sanitizeHTML( req.params.skillId ), sanitizeHTML( req.body.skill ) );

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  deleteSkill: async ( req, res ) => {
    try {
      const result = await userStore.deleteSkillAsync( req.user.id, sanitizeHTML( req.params.skillId ) );

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  },

  addLink: async ( req, res ) => {
    try {
      const result = await userStore.addLinkAsync( req.user.id, sanitizeHTML( req.body.hostId ), sanitizeHTML( req.body.urlPath ) );

      if ( result[0] > 0 )
        return res.status( 200 ).json( result[1] );

      return res.status( 500 ).json( -1 );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  },

  updateLink: async ( req, res ) => {
    try {
      const result = await userStore.updateLinkAsync( req.user.id, sanitizeHTML( req.params.linkId ), sanitizeHTML( req.body.newPath ) );

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( -1 );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  },

  deleteLink: async ( req, res ) => {
    try {
      const result = await userStore.deleteLinkAsync( req.user.id, sanitizeHTML( req.params.linkId ) );

      if ( result <= 0 )
        return res.status( 500 ).json( -1 );

      return res.status( 200 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  },

  getInstalledApps: async ( req, res ) => {
    try {
      const apps = await userStore.getInstalledApps( req.user.id );
      return res.status( 200 ).json( apps );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  },

  installApp: async ( req, res ) => {
    try {
      const affectedRows = await userStore.installApp( req.user.id, req.params.appId );
      if ( affectedRows <= 0 )
        return res.status( 500 ).json( 0 );

      return res.status( 200 ).json( affectedRows );

    } catch ( e ) {
      return res.status( 500 ).json( -1 );
    }
  }
};
