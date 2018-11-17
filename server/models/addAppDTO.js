const Ajv = require( 'ajv' );
const ajv = new Ajv( { allErrors: true } );

module.exports = Object.freeze( {
  "type": "object",
  "required": ["name", "htmlIndexUrl", "creationDate", "lastUpdateDate"],
  "properties": {
    "name": { "type": "string" },
    "description": { "type": "string" },
    "htmlIndexUrl": { "type": "string", "format": "url" },
    "creationDate": { "type": "string", "format": 'date-time' },
    "lastUpdateDate": { "type": "string", "format": 'date-time' }
  }
} );
