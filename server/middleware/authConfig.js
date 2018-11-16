﻿'use strict';
const passport = require( 'passport' );
const GitHubStrategy = require( 'passport-github' ).Strategy;
const passportJWT = require( 'passport-jwt' );
const userStore = require( '../dataAccess/userStore' );
const db = require( '../dataAccess/db' );
const LoginType = require( '../enums/loginType' );

module.exports = async ( app ) => {
  app.use( passport.initialize() );
  app.use( passport.session() );

  passport.serializeUser( ( user, done ) => {
    done( null, user.id );
  } );

  passport.deserializeUser( ( id, done ) => {
    userStore.getUserAsync( id, LoginType.Local, ( err, user ) => {
      if ( err )
        return done( err, null );

      return done( null, user );
    } );
  } );

  passport.use( new GitHubStrategy( {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/github/callback`
  }, async ( accessToken, refreshToken, profile, done ) => {
    const jsonProfile = profile._json;

    try {
      const githubId = await db.query(
        `SELECT Github_Id
         FROM Users
         WHERE Users.Github_Id = '$1'`,
        [profile.id] );

      // No user
      if ( data.rows.length <= 0 ) {
        const newUser = await userStore.registerUserAsync( jsonProfile.name, jsonProfile.email, jsonProfile.bio, profile.id );
        global.user = newUser;
        return done( null, newUser );

        // Login
      } else {
        const user = await userStore.updateLastLoginAsync( profile.id, LoginType.GitHub );
        global.user = user;
        return done( null, user );
      }

      // This catch block catches any possible exceptions that may occure from above.
    } catch ( e ) {
      return done( err, null );
    }
  }
  ) );
};
