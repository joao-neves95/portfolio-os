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
