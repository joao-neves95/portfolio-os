/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

module.exports = ( req, res, next ) => {
  if ( req.cookies.IS_GUEST )
    return res.status( 401 ).json( { msg: 'The user must be authenticated.' } );

  return next();
};
