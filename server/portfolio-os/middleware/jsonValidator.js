const Ajv = require( 'ajv' );
const ajv = new Ajv( { allErrors: true } );

module.exports = async ( req, res, next ) => {
  const validSchema = await ajv.compileAsync( req.schema );
  const validateSchema = validSchema( req.body );

  if ( !validateSchema ) {
    return res.status( 400 ).json( { "msg": "Wrong input.", "Error": validSchema.errors } );

  } else
    return next();
};
