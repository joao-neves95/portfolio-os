const jwt = require( 'jsonwebtoken' );

module.exports = ( token ) => {
  return new Promise( ( resolve, reject ) => {
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
  } );
};
