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
