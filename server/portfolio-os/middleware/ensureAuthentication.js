/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const verifyJWT = require( './verifyJWT' );
const setResetCookie = require( '../middleware/setResetCookie' );

/**
 * Its blocks the req and returns 401 res if not successfull.
 *
 * @param { Request } req
 * @param { Response } res
 * @param { Function } next If successfull, receives the decoded JWT token.
 */
module.exports = async ( req, res, next ) => {
  try {
    if ( req.cookies.IS_GUEST ) {
      req.user = req.cookies.GUEST_SESSION;
      return next();
    }

    let decoded;

    if ( req.signedCookies.JWT !== undefined ) {
      decoded = Object.freeze( await verifyJWT( req.signedCookies.JWT ) );

    } else if ( req.cookies.JWT !== undefined ) {
      decoded = Object.freeze( await verifyJWT( req.cookies.JWT ) );

    } else if ( req.headers.authorization !== undefined ) {
      decoded = Object.freeze( await verifyJWT( req.headers.authorization.split(' ')[1] ) );

    } else {
      return ____notAuthorized( res );
    }

    if ( !decoded ) {
      setResetCookie( res );
      return ____notAuthorized( res );
    }

    req.user = decoded;
    return next();

  } catch ( e ) {
    setResetCookie( res );
    return ____notAuthorized( res );
  }
};

const ____notAuthorized = ( res ) => {
  return res.status( 401 ).redirect( '/portfolio-os/auth' );
};
