module.exports = ( req, res, next ) => {
  if ( req.cookies.IS_GUEST )
    return res.status( 401 ).json( { msg: 'The user must be authenticated.' } );

  return next();
};
