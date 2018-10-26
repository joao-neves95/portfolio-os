'use strict';

module.exports = {
  // Queries:
  // ?firstLeter=a
  getUsers: ( req, res ) => {
    console.info( 'GET: /users/' );
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

  getUser: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id );
  },

  getUserSocialAccounts: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/documents' );
  }
};
