'use strict';
const router = require( 'express' ).Router();
const passport = require( 'passport' );
const jwt = require( 'jsonwebtoken' );

// GITHUB:
router.get( '/github', passport.authenticate( 'github' ) );

router.get( '/github/callback', passport.authenticate( 'github', { failureRedirect: '/' } ), ( req, res ) => {
  jwt.sign( { Id: global.user.Id }, process.env.JWT_KEY, { audience: process.env.JWT_AUDIENCE, issuer: process.env.JWT_ISSUER, expiresIn: process.env.JWT_EXPIRATION }, ( err, token ) => {
    if ( err )
      return res.status( 401 ).redirect( '/' );

    return res.status( 200 ).send( token );
  } );
} );

// LOGOUT:
router.get( '/logout', ( req, res ) => {
  req.logout();
  res.status( 202 ).redirect( '/' );
} );

module.exports = router;
