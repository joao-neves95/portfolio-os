'use strict';
const passport = require( 'passport' );
const GitHubStrategy = require( 'passport-github' ).Strategy;
const authRoute = require( '../routes/auth' );

module.exports = ( app ) => {
  app.use( passport.initialize() );
  app.use( passport.session() );

  passport.serializeUser( ( user, done ) => {
    done( null, user.id );
  } );

  passport.deserializeUser( ( id, done ) => {
    // Find user by id.
    // done( err, user );
  } );

  passport.use( new GitHubStrategy( {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  }, ( accessToken, refreshToken, profile, cb ) => {
    // Find user or register new.
  }
  ) );
};
