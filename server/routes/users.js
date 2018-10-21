'use strict';

module.exports = {
  getUsers: ( req, res ) => {
    console.info( 'GET: /users/' );
  },

  getUser: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id );
  },

  getUserSocialAccounts: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/documents' );
  }
};
