/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';

module.exports = ( req, res, next ) => {
  res.set( 'Cache-Control', 'private, no-cache, no-store, must-revalidate, proxy-revalidate' );
  res.set( 'Surrogate-Control', 'no-store' );
  res.set( 'Pragma', 'no-cache' );
  res.set( 'Expires', '0' );
  next();
};
