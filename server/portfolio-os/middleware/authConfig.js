/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: (SERVER) PRODUCTION - Remove the exceptions from the passport callbacks.
'use strict';
const passport = require( 'passport' );
const GitHubStrategy = require( 'passport-github' ).Strategy;
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const userStore = require( '../dataAccess/userStore' );
const db = require( '../../db' );
const verifyJWT = require( './verifyJWT' );
const { sanitizeHTML } = require('../../../common/commonUtils');
const LoginType = require( '../../../common/enums/loginType' );

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
    callbackURL: `http://localhost:${process.env.PORT}/portfolio-os/auth/github/callback`,
    passReqToCallback: true
  }, async ( req, accessToken, refreshToken, profile, done ) => {
    const jsonProfile = profile._json;

    try {
      // Link account to existing user, if the request has a JWT token.
      const userOrNot = await __linkAccountToUserIfTrue( req, profile.id, done );

      if ( typeof userOrNot === 'object' )
        return done( null, userOrNot );

      const queryResult = await db.query(
        `SELECT Github_Id
         FROM Users
         WHERE Users.Github_Id = $1`,
        [profile.id]
      );

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
      return done( e, null );
    }
  }
  ) );

  // #endregion

  // #region GOOGLE STRATEGY

  passport.use( new GoogleStrategy( {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/portfolio-os/auth/google/callback`,
    passReqToCallback: true
  }, async ( req, accessToken, refreshToken, profile, done ) => {
    const jsonProfile = profile._json;

    try {
      // Link account to existing user, if the request has a JWT token.
      const userOrNot = await __linkAccountToUserIfTrue( req, profile.id, done );

      if ( typeof userOrNot === 'object' )
        return done( null, userOrNot );

      const queryResult = await db.query(
        `SELECT Google_Id
         FROM Users
         WHERE Google_Id = $1`,
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
      if ( req.cookies.JWT !== undefined ) {
        const cookie = JSON.parse( req.cookies.JWT );
        const decoded = Object.freeze( await verifyJWT( cookie.JWT ) );

        if ( !decoded )
          throw new Error();

        const queryResult = await userStore.updateSocialAccountId( decoded.id, sanitizeHTML( cookie.accountType ), profileId );
        if ( queryResult.rowCount <= 0 )
          reject();

        return resolve( queryResult );
      }

      return resolve( false );

    } catch ( e ) {
      return reject( e );
    }
  } );
};
