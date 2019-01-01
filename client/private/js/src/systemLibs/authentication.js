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

    } catch ( e ) {
      //
    } finally {
      Cookies.remove( 'JWT' );
      if ( jwt !== undefined )
        localStorage.setItem( AUTH_TOKEN_ID, jwt );
    }
  }

  /**
   * 
   * @param { object } additionalData <object> ( {} ) or null. Defaults to null.
   */
  JWTLocalStorageToCookie( additionalData = null ) {
    let data = !additionalData ? this.getJWT() : JSON.stringify( Object.assign( { JWT: this.getJWT() }, additionalData ) );
    Cookies.set( 'JWT', data );
    localStorage.removeItem( AUTH_TOKEN_ID );
  }

  getJWT() {
    return localStorage.getItem( AUTH_TOKEN_ID );
  }

  logout() {
    localStorage.removeItem( AUTH_TOKEN_ID );
    Cookies.remove( 'JWT' );
    window.location = `${SERVER_ROOT_PATH}portfolio-os/auth`;
  }

}
const authentication = new Authentication();
