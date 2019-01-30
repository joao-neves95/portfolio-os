/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// " portfolio-os/auth/ "
'use strict';
const path = require( 'path' );
const router = require( 'express' ).Router();
const passport = require( 'passport' );
const signJWT = require( '../middleware/signJWT' );
const setResetCookie = require( '../middleware/setResetCookie' );

router.get( '/', ( req, res ) => {
  res.contentType = 'html';
  return res.status( 200 ).sendFile( path.join( process.cwd(), './client/wwwroot/portfolio-os_auth.html' ) );
} );

// #region GITHUB AUTH

router.get( '/github', passport.authenticate( 'github', { scope: ['user'] } ) );

router.get( '/github/callback', ( req, res, next ) => {
  passport.authenticate( 'github', ( err, user, info ) => {
    ____redirectIfLoginFail( err, res, next );

  } )( req, res, next );
  },
  async ( req, res ) => {
    return ____setJWTCookie( req, res );
} );

// #endregion

// #region GOOGLE AUTH

router.get( '/google', passport.authenticate( 'google', { scope: ['profile', 'email', 'openid'] } ) );

router.get( '/google/callback', ( req, res, next ) => {
  passport.authenticate( 'google', ( err, user, info ) => {
    ____redirectIfLoginFail( err, res, next );

  } )( req, res, next );
  },
  async ( req, res ) => {
    return ____setJWTCookie( req, res );
} );

// #endregion

// #region LOGOUT

router.get( '/logout', ( req, res ) => {
  setResetCookie();
  req.logout();
  res.status( 202 ).redirect( '/' );
} );

// #endregion

module.exports = router;

/**
 *
 * @param { Request } req
 * @param { Response } res
 */
const ____setJWTCookie = async ( req, res ) => {
  try {
    res.cookie(
      'JWT',
      await signJWT( { id: req.user.id } ),
      {
        maxAge: parseInt( process.env.JWT_EXPIRATION ),
        path: '/',
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
        secure: false,
        signed: true
      }
    );

    return res.status( 200 ).redirect( '/portfolio-os/desktop' );

  } catch ( e ) {
    setResetCookie( res );
    return res.status( 401 ).redirect( '/' );
  }
};

const ____redirectIfLoginFail = ( err, res, next ) => {
  try {
    if ( err ) {
      setResetCookie( res );
      return res.status( 401 ).redirect( '/portfolio-os/auth' );
    }

    return next();

  } catch ( e ) {
    return res.status( 401 ).redirect( '/portfolio-os/auth' );
  }
};
