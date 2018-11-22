/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Authentication {
  constructor() {

  }

  init() {
    let jwt = Cookies.get( 'JWT' );

    try {

      jwt = jwt.split( ':' )[1].split( '.' );
      jwt.pop();
      jwt = jwt.join( '.' );

      //if ( !jwt )
      //  window.location = `${SERVER_ROOT_PATH}portfolio-os/auth`;

    } catch  {
      //
    } finally {
      Cookies.remove( 'JWT' );
      localStorage.setItem( AUTH_TOKEN_ID, jwt );
    }
  }

  getJWT() {
    return localStorage.getItem( AUTH_TOKEN_ID );
  }
}
const authentication = new Authentication();
