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
