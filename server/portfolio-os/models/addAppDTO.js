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

module.exports = Object.freeze( {
  "type": "object",
  "required": ["name", "htmlIndexUrl"],
  "properties": {
    "name": { "type": "string", "maxLength": 50 },
    "description": { "type": "string" },
    "htmlIndexUrl": { "type": "string", "maxLength": 500, "format": "url" }
  }
} );
