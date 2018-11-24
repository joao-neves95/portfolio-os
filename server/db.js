/*
 *
 * Copyright (c) 2018 Jo�o Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const { Pool } = require( 'pg' );

const pool = new Pool( {
  // connectionString: 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb',
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
} );

module.exports = {
  openClient: async () => {
    return await pool.connect();
  },

  /**
   * @param { string } queryString
   * @param { any[] } params
   * @param { Function } Callback Receives (error, <QueryResult>)
   * @returns { Promise<QueryResult | Error> }
   */
  query: ( queryString, params, Callback ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const query = await pool.query( queryString, params );

        if ( Callback )
          return Callback( null, query );

        return resolve( query );

      } catch ( e ) {
        if ( Callback )
          return Callback( e, null );

        return reject( e );
      }
    } );
  },

  /**
   *
   * @param { string[][] } commands [ [ <string> , (params)[] ] ]
   */
  transaction: ( commands ) => {
    return new Promise( async ( _resolve, _reject ) => {
      let client;

      try {
        let queryResults = [];
        client = await pool.connect();
        await client.query( 'BEGIN' );

        for ( let i = 0; i < commands.length; ++i ) {
          if ( commands[i].length > 1 )
            queryResults.push( await client.query( commands[i][0], commands[i][1] ) );
          else
            queryResults.push( await client.query( commands[i][0] ) );
        }

        await client.query( 'COMMIT' );
        client.release();
        return _resolve( queryResults );

      } catch ( e ) {
        await client.query( 'ROLLBACK' );
        client.release();
        return _reject( e );
      }
    } );
  },

  utcDateFunc: () => {
    return "SELECT now() at time zone 'UTC'";
  }
};
