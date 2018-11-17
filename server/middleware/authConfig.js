'use strict';
const passport = require( 'passport' );
const GitHubStrategy = require( 'passport-github' ).Strategy;
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const userStore = require( '../dataAccess/userStore' );
const db = require( '../dataAccess/db' );
const verifyJWT = require( './verifyJWT' );
const LoginType = require( '../enums/loginType' );

module.exports = ( app ) => {
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

  // #region GITHUB STRATEGY

  passport.use( new GitHubStrategy( {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/github/callback`,
    passReqToCallback: true
  }, async ( req, accessToken, refreshToken, profile, done ) => {
    const jsonProfile = profile._json;

    try {
      // Link account to existing user, if the request has a JWT token.
      try {
        const userOrNot = await __linkAccountToUserIfTrue( req, profile.id, done );

        if ( typeof userOrNot === 'object' )
          return done( null, userOrNot );

      } catch ( e ) {
        return done( e, null );
      }

      const queryResult = await db.query(
        `SELECT Github_Id
         FROM Users
         WHERE Users.Github_Id = '$1'`,
        [profile.id] );

      let user;

      // No user.
      if ( queryResult.rows.length <= 0 ) {
        user = await userStore.registerUserAsync( jsonProfile.name, jsonProfile.email, jsonProfile.bio, profile.id );

      // Login.
      } else {
        user = await userStore.updateLastLoginAsync( profile.id, LoginType.GitHub );
      }

      req.user = user;
      return done( null, user );

      // This catch block catches any possible exceptions that may occure from above.
    } catch ( e ) {
      return done( err, null );
    }
  }
  ) );

  // #endregion

  // #region GOOGLE STRATEGY

  passport.use( new GoogleStrategy( {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://www.example.com/auth/google/callback',
    passReqToCallback: true
  }, async ( req, accessToken, refreshToken, profile, done ) => {
    const jsonProfile = profile._json;

    try {
      // Link account to existing user, if the request has a JWT token.
      try {
        const userOrNot = await __linkAccountToUserIfTrue( req, profile.id, done );

        if ( typeof userOrNot === 'object' )
          return done( null, userOrNot );

      } catch ( e ) {
        return done( e, null );
      }

      const queryResult = await db.query(
        `SELECT Google_Id
         FROM Users
         WHERE Google_Id = '$1'`,
        [profile.id]
      );

      let user;

      // No user.
      if ( queryResult.rows.length <= 0 ) {
        user = await userStore.registerUserAsync( jsonProfile.displayName, jsonProfile.email, jsonProfile.bio, '', profile.id );

      // Login.
      } else {
        user = await userStore.updateLastLoginAsync( profile.id, LoginType.Google );
      }

      req.user = user;
      return done( null, user );

    } catch ( e ) {
      return done( e, null );
    }
    }
  ) );

  // #endregion
};

const __linkAccountToUserIfTrue = ( req, profileId ) => {
  return new Promise( async ( resolve, reject ) => {
    try {
      // Add to existing account.
      if ( req.headers.authorization ) {
        const decoded = await verifyJWT( req.headers.authorization );

        if ( !decoded )
          throw new Error();

        return resolve( await userStore.insertSocialAccountId( decoded.Id, req.body.socialAccountType, profileId ) );
      }

      return resolve( false );

    } catch ( e ) {
      return reject( e );
    }
  } );
};
