'use strict';
const userStore = require( '../dataAccess/userStore' );

// NO VALIDATION:
// TODO: VALIDATION.

module.exports = {
  // Queries:
  // ?firstLeter=a
  getUsers: ( req, res ) => {
    console.info( 'GET: /users/' );
  },

  getUser: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id );
  },

  // Queries:
  // ?count=10
  getUsersRecentLogins: ( req, res ) => {
    console.info( 'GET: /users/recent-logins' );
  },

  // Queries:
  // ?count=10
  getUsersRecentSignUps: ( req, res ) => {
    console.info( 'GET: /users/recent-sign-ups' );
  },

  getUserProfile: async ( req, res ) => {
    const userProfile = await userStore.getProfileAsync( req.user.id );
    console.debug( userProfile );
    return res.status( 200 ).json( userProfile );
  },

  putUserSummary: async ( req, res ) => {
    try {
      const result = await userStore.updateSummaryAsync( req.user.id, req.body.summary );

      if ( result > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( 'Error updating the user summary.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  addSkill: async ( req, res ) => {
    try {
      const result = await userStore.addSkillAsync( req.user.id, req.body.skill );

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
      const result = await userStore.updateSkillAsync( req.user.id, req.params.skillId, req.body.skill );

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
      const result = await userStore.deleteSkillAsync( req.user.id, req.params.skillId );

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
