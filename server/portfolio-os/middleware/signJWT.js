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

/**
 *
 * @param { object } payload <object>
 */
module.exports = ( payload ) => {
  return new Promise( ( resolve, reject ) => {
    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
        expiresIn: process.env.JWT_EXPIRATION
      }, ( err, token ) => {
        if ( err )
          return reject( err );

        return resolve( token );
      } );
  } );
};
