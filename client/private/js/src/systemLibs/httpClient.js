/**
 * Note: All methods are asynchronous.
 */
class HttpClient {
  constructor() {
    throw new Error( 'Can not instantiate the static classs HttpClient' );
  }

  // res.json()
  /**
   * Awaitable (async/await) Fetch Response object or an error.
   * 
   * @param { string } url
   * @param { boolean } jwtAuth
   * 
   * @return { Promise<Response | Error> }
   */
  static get( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Get, url, null, jwtAuth )
        .then( res => resolve( res ) )
        .catch( e => reject( e ) );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   *
   * @param {any} url
   * @param {any} body
   * @param {any} jwtAuth
   * @param {any} Callback
   * 
   * @return { Response }
   */
  static post( url, body, jwtAuth = true, Callback ) {
    //HttpClient.request( RequestType.Post, url, body, jwtAuth )
    //  .then( res => { Callback( null, res ); } )
    //  .catch( err => { Callback( err, null ); } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param {any} url
   * @param {any} body
   * @param {any} jwtAuth
   * @param {any} Callback
   * 
   * @return { Response }
   */
  static put( url, body, jwtAuth = true, Callback ) {
    //HttpClient.request( RequestType.Put, url, body, jwtAuth )
    //  .then( res => { Callback( null, res ); } )
    //  .catch( err => { Callback( err, null ); } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param { RequestType } requestType
   * @param { string } url
   * @param { any } body
   * @param { boolean } jwtAuth Whether or not to use JWT authentication (from localStorage).
   * @param {any} Callback
   * 
   * @return { Response }
   */
  static request( requestType, url, body = null, jwtAuth = true, Callback ) {
    return new Promise( async ( resolve, reject ) => {

      let requestObject = {
        method: requestType,
        headers: new Headers()
      };

      if ( jwtAuth )
        requestObject.headers['Authorization'] = 'Bearer ' + localStorage.getItem( AUTH_TOKEN_ID );

      if ( requestType === RequestType.Post || requestType === RequestType.Put ) {
        requestObject.body = body | '';
        requestObject.headers['Content-Type'] = 'application/json;charset=utf-8';
      }

      await fetch( url, requestObject )
        //.then( res => { return res.json(); } )
        //.then( jsonData => { return Callback( null, jsonData ); } )
        .then( res => { return resolve( res ); } )
        .catch( err => { return reject( err ); } );
    } );
  }
}

}
