/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const jwt = require( 'jsonwebtoken' );

module.exports = ( token ) => {
  return new Promise( ( resolve, reject ) => {
    try {
      jwt.verify(
        token,
        process.env.JWT_KEY,
        {
          audience: process.env.JWT_AUDIENCE,
          issuer: process.env.JWT_ISSUER,
          maxAge: process.env.JWT_EXPIRATION
        },
        ( err, decoded ) => {
          if ( err || !decoded )
            return reject( err || null );

          return resolve( decoded );
        } );

    } catch ( e ) {
      return reject( e );
    }
  } );
};
