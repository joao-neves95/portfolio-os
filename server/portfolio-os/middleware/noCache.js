'use strict'

module.exports = ( req, res, next ) => {
  res.set( 'Cache-Control', 'private, no-cache, no-store, must-revalidate, proxy-revalidate' );
  res.set( 'Surrogate-Control', 'no-store' );
  res.set( 'Pragma', 'no-cache' );
  res.set( 'Expires', '0' );
  next();
};
