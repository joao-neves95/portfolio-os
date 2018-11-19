'use strict';
const userStore = require( '../dataAccess/userStore' );

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


  getUserProfile: ( req, res ) => {
    console.info( 'GET: /user/profile' );
  },

  getUserSocialAccounts: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/social-accounts' );
  }
};
