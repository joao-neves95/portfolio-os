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

router.get( '/', ( req, res ) => {
  res.contentType = 'html';
  return res.status( 200 ).sendFile( path.join( process.cwd(), './client/wwwroot/portfolio-os_auth.html' ) );
} );

// #region GITHUB AUTH

router.get( '/github', passport.authenticate( 'github', { scope: ['user'] } ) );

router.get( '/github/callback', passport.authenticate( 'github', { failureRedirect: '/portfolio-os/auth', failureFlash: false } ), async ( req, res ) => {
  return ____setJWTCookie( req, res );
} );

// #endregion

// #region GOOGLE AUTH

router.get( '/google', passport.authenticate( 'google', { scope: ['profile', 'email', 'openid'] } ) );

router.get( '/google/callback', passport.authenticate( 'google', { failureRedirect: '/portfolio-os/auth', failureFlash: false } ), async ( req, res ) => {
  return ____setJWTCookie( req, res );
} );

// #endregion

// #region LOGOUT

router.get( '/logout', ( req, res ) => {
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
        maxAge: 999999,
        path: '/',
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
        // TODO: Change to true in production (HTTPS).
        secure: false,
        signed: true
      }
    );

    return res.status( 200 ).redirect( '/portfolio-os/desktop' );

  } catch ( e ) {
    console.debug( e );
    return res.status( 401 ).redirect( '/' );
  }
};
