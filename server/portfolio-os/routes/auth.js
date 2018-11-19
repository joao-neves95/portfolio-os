// " portfolio-os/auth/ "
'use strict';
const router = require( 'express' ).Router();
const passport = require( 'passport' );
const signJWT = require( '../middleware/signJWT' );

// #region GITHUB AUTH

router.get( '/github', passport.authenticate( 'github' ) );

router.get( '/github/callback', passport.authenticate( 'github', { failureRedirect: '/' } ), async ( req, res ) => {
  return await ____sendJWT( req, res );
} );

// #endregion

// #region GOOGLE AUTH

router.get( '/google', passport.authenticate( 'google' ) );

router.get( '/google/callback', passport.authenticate( 'google', { failureRedirect: '/' } ), async ( req, res ) => {
  return await ____sendJWT( req, res );
} );

// #endregion

// #region LOGOUT

router.get( '/logout', ( req, res ) => {
  req.logout();
  res.status( 202 ).redirect( '/' );
} );

// #endregion

module.exports = router;

const ____sendJWT = async ( req, res ) => {
  try {
    return res.status( 200 ).send( await signJWT( { id: req.user.Id } ) );

  } catch {
    return res.status( 401 ).redirect( '/' );
  }
};
