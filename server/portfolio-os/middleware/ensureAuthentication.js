const verifyJWT = require( './verifyJWT' );

/**
 * Its blocks the req and returns 401 res if not successfull.
 * 
 * @param { Request } req
 * @param { Response } res
 * @param { Function } next If successfull, receives the decoded JWT token.
 */
module.exports = async ( req, res, next ) => {
  // if ( !req.headers.authorization )
    // return ____notAuthorized( res );

  let decoded;
  try {
    decoded = Object.freeze( await verifyJWT( req.headers.authorization ) );

    // if ( !decoded )
      // return ____notAuthorized();

    req.user = decoded;
    return next();

  } catch {
    // return ____notAuthorized();
    // TODO: Temporary.
    return next();
  }
};

const ____notAuthorized = ( res ) => {
  return res.status( 401 ).redirect( '/' );
};
