/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const allowedOrigins = [process.env.HOST, 'https://shivayl.com', 'https://cdn.jsdelivr.net'];

module.exports = Object.freeze( {
  origin: ( origin, callback ) => {
    if ( allowedOrigins.includes( origin ) )
      return callback( null, true );

    return callback( null, false );
  },
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,PUT,POST,DELETE'
} );
