'use strict';

module.exports = {
  getUsers: ( req, res ) => {
    console.info( 'GET: /users/' );
  },

  getUser: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id );
  },

  getUserFiles: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files');
  },

  getUserImages: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/images' );
  },

  putUserImages: ( req, res ) => {
    console.info( 'PUT: /users/' + req.params.id + '/files/images' );
  },

  getUserVideos: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/videos' );
  },

  putUserVideos: ( req, res ) => {
    console.info( 'PUT: /users/' + req.params.id + '/files/videos' );
  },

  getUserDocuments: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/documents' );
  },

  putUserDocuments: ( req, res ) => {
    console.info( 'PUT: /users/' + req.params.id + '/files/documents' );
  },

  getUserSocialAccounts: ( req, res ) => {
    console.info( 'GET: /users/' + req.params.id + '/files/documents' );
  }
};
