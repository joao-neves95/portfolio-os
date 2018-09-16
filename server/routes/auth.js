'use strict';
const router = require( 'express' ).Router();
const passport = require( 'passport' );

// GITHUB:
router.get( '/github', passport.authenticate( 'github' ) );

router.get( '/github/callback', passport.authenticate( 'github', { failureRedirect: '/' } ), ( red, res ) => {
  res.redirect( '/dashboard' );
} );

// LOGOUT:
router.get( '/logout', ( req, res ) => {
  req.logout();
  res.status( 202 ).redirect( '/' );
} );

module.exports = router;
