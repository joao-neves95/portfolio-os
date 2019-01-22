/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/**
 * Note: All methods are asynchronous.
 */
class HttpClient {
  constructor() {
    throw new Error( 'Can not instantiate the static classs HttpClient' );
  }

  /**
   * Awaitable (async/await) Fetch JSON object or an error.
   * 
   * @param { string } url
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static get( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Get, url, null, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( e => reject( e ) );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   *
   * @param {any} url
   * @param {any} body
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static post( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Post, url, body, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( e => { reject( e ); } );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param {any} url
   * @param {any} body
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static put( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Put, url, body, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  static delete( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Delete, url, null, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  /**
   * Returns a Fetch Response object, false (and a notification to the user) if it's a guest session (not authenticated) or an error.
   * 
   * @param { RequestType } requestType
   * @param { string } url
   * @param { any } body
   * @param { boolean } jwtAuth Whether or not to use JWT authentication (from localStorage).
   * 
   * @return { Primise<Response | Error> }
   */
  static request( requestType, url, body = null, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {

      let requestObject = {
        method: requestType,
        headers: {}
      };

      if ( jwtAuth )
        requestObject.headers['Authorization'] = 'Bearer ' + localStorage.getItem( AUTH_TOKEN_ID );

      if ( requestType === RequestType.Post || requestType === RequestType.Put ) {
        requestObject.body = !body ? '' : JSON.stringify( body );
        requestObject.headers['Content-Type'] = 'application/json;charset=utf-8';
      }

      await fetch( url, requestObject )
        .then( res => {
          if ( res.status == 401 ) {
            Notifications.errorToast( 'The user must be authenticated.' );
            return false;
          }

          return resolve( res );
        } )
        .catch( err => { return reject( err ); } );
    } );
  }
}
