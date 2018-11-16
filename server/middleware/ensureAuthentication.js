const jwt = require( 'jsonwebtoken' );

/**
 * Its blocks the req and returns 401 res if not successfull.
 * 
 * @param {any} req
 * @param {any} res
 * @param {any} next Receives the decoded JWT token if successfull.
 */
module.exports = ( req, res, next ) => {
  if ( !req.headers.authorization )
    return ____notAuthorized( res );

  jwt.verify(
    req.headers.authorization,
    process.env.JWT_KEY,
    {
      audience: process.env.JWT_AUDIENCE,
      issuer: process.env.JWT_ISSUER,
      maxAge: process.env.JWT_EXPIRATION
    },
    ( err, decoded ) => {
      if ( err || !decoded )
        return ____notAuthorized( res );

      global.user = decoded;
      return next();
    } );
};

const ____notAuthorized = ( res ) => {
  return res.status( 401 ).redirect( '/' );
};
