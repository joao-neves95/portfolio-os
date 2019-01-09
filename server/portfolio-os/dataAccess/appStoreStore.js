/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const db = require( '../../db' );

module.exports = {
  appExistsByName: ( appName ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT 1
           FROM App
           WHERE Name = $1`,
          [appName]
        );

        return resolve( queryResult.rows[0] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  /**
   * @param { number } lastIdOfLastPage Defaults to 0.
   * @param { number } limit Defaults to 10.
   * @return { Promise<Error | [{}]> }
   */
  getAppsPaginatedOrderByRatingAsync: ( lastIdOfPreviousPage = 0, limit = 10 ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT Id, UserId AS Creator, Name, Description, HtmlIndexUrl, Rating
           FROM App
           WHERE Id > $1
           ORDER BY Rating DESC
           LIMIT $2`,
          [lastIdOfPreviousPage, limit]
        );

        return resolve( queryResult.rows );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  /**
   * Returns the rowCount and newAppId [ <int>, <int> ]
   * @returns { Promise<Error | []> }
   */
  insertApp: ( userId, appName, description, htmlIndexUrl ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `INSERT INTO App (UserId, Name, Description, HtmlIndexUrl)
           VALUES ($1, $2, $3, $4)
           RETURNING Id`,
          [userId, appName, description, htmlIndexUrl]
        );

        return resolve( [queryResult.rowCount, queryResult.rows[0]] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  updateApp: ( userId, appId, appName, description, htmlIndexUrl) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `UPDATE App
           SET Name = $1,
               Description = $2,
               HtmlIndexUrl = $3
               LastUpdateDate = (${db.utcDateFunc()})
           WHERE Id = $4 AND UserId = $5`,
          [appName, description, htmlIndexUrl, appId, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  deleteApp: ( userId, appId ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.transaction( [
          [
            `DELETE FROM App
             WHERE Id = $1 AND UserId = $2`,
            [appId, userId]
          ],
          [
            `DELETE FROM AppRating
             WHERE AppId = $1`,
            [appId]
          ]
        ]);

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  }
};
