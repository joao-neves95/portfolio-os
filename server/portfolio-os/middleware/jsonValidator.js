/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const Ajv = require( 'ajv' );
const ajv = new Ajv( { allErrors: true } );

module.exports = ( req, res, next ) => {
  try {
    const validateSchema = ajv.compile( req.schema );
    const validSchema = validateSchema( req.body );

    if ( !validateSchema )
      return res.status( 400 ).json( { "msg": "Wrong input.", "Error": validateSchema.errors } );

    return next();

  } catch ( e ) {
    console.error( e );
    return res.status( 500 ).json( { "msg": "Unknown Error.", "Error": 'Unknown' } );
  }
};
