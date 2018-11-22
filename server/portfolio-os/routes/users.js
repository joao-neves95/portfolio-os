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

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( 'Error updating the user summary.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  getUserProfile: async ( req, res ) => {
    const userProfile = await userStore.getProfileAsync( req.user.id );
    console.debug( userProfile );
    return res.status( 200 ).json( userProfile );
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
        return res.status( 200 ).json( result[1] );

      return res.status( 500 ).json( 'Error adding user skill.' );

    } catch ( e ) {
      console.debug( e );
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
      console.debug( e );
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
      console.debug( e );
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  getUserSocialAccounts: async ( req, res ) => {
  }
};
