/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const db = require( '../../db' );
const LoginType = require( '../../../common/enums/loginType' );

module.exports = {
  /**
   * @param { number } lastIdOfLastPage Defaults to 0.
   * @param { number } limit Defaults to 10.
   * @return { Promise<Error | [{}]> }
   */
  getUsersOrderByLastLogin: ( lastIdOfPreviousPage = 0, limit = 10 ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT Id, Name, Summary, UNIX_TIMESTAMP( LastLogin ) LastLoginUnix
           FROM App
           WHERE Id > $1
           ORDER BY LastLoginUnix DESC
           LIMIT $2`,
          [lastIdOfPreviousPage, limit]
        );

        return resolve( queryResult.rows );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  getUserAsync: ( userId, loginType, Callback ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT *
           FROM Users
           WHERE ${loginType} = $1`,
          [userId]
        );

        if ( Callback )
          return Callback( null, queryResult.rows[0] );

        return resolve( queryResult.rows[0] );

      } catch ( e ) {
        if ( Callback )
          return Callback( e, null );

        return reject( e );
      }
    } );
  },

  getProfileAsync: ( userId ) => {
    return new Promise( async ( resolve, reject ) => {
      /** @type {PoolClient} */
      const dbClient = await db.openClient();

      try {
        const queryResult = await dbClient.query(
          `SELECT Users.Name, Users.Summary
           FROM Users
           WHERE Users.Id = $1`,
          [userId]
        );

        const queryResult2 = await dbClient.query(
          `SELECT SocialLinks.Id, Hosts.Label AS HostLabel, Hosts.Url AS HostUrl, SocialLinks.UrlPath
           FROM SocialLinks
               INNER JOIN Hosts
               ON SocialLinks.HostId = Hosts.Id
           WHERE SocialLinks.UserId = $1
           ORDER BY Id ASC`,
          [userId]
        );

        const queryResult3 = await dbClient.query(
          `SELECT SkillSet.Id, SkillSet.Name
           FROM SkillSet
           WHERE SkillSet.UserId = $1
           ORDER BY Id ASC`,
          [userId]
        );

        queryResult.rows[0].socialLinks = queryResult2.rows;
        queryResult.rows[0].skillSet = queryResult3.rows;

        dbClient.release();
        return resolve( queryResult.rows[0] );

      } catch ( e ) {
        dbClient.release();
        return reject( e );
      }
    } );
  },

  updateSummaryAsync: ( userId, summary ) => {
    return new Promise( async ( resolve, reject ) => {

      try {
        const queryResult = await db.query(
          `UPDATE Users
           SET Summary = $1
           WHERE Users.Id = $2`,
          [summary, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  addLinkAsync: ( userId, hostId, urlPath ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `INSERT INTO SocialLinks (UserId, HostId, UrlPath)
           VALUES ($1, $2, $3)
           RETURNING Id`,
          [userId, hostId, urlPath]
        );

        return resolve( [queryResult.rowCount, queryResult.rows[0]] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  updateLinkAsync: ( userId, linkId, newPath ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `UPDATE SocialLinks
           SET UrlPath = $1
           WHERE Id = $2 AND UserId = $3`,
          [newPath, linkId, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  deleteLinkAsync: ( userId, linkId ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `DELETE FROM SocialLinks
           WHERE Id = $1 AND UserId = $2`,
          [linkId, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  /**
   * Return [ rowCount(<int>), id(<int>) ]
   * @returns { Promise<Error | []> }
   */
  addSkillAsync: ( userId, skill ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `INSERT INTO SkillSet (UserId, Name)
           VALUES ($1, $2)
           RETURNING Id`,
          [userId, skill]
        );

        return resolve( [queryResult.rowCount, queryResult.rows[0] || null] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  updateSkillAsync: ( userId, skillId, skill ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `UPDATE SkillSet
           SET Name = $1
           WHERE Id = $2 AND UserId = $3`,
          [skill, skillId, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  deleteSkillAsync: ( userId, skillId ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `DELETE FROM SkillSet
           WHERE Id = $1 AND UserId = $2`,
          [skillId, userId]
        );

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  /**
   * Returns the new user (TO TEST)
   * @param { string } name
   * @param { string } email
   * @param { string } email Defaults to '' (empty <string>)
   * @param { string } githubId Defaults to '' (empty <string>)
   * @param { string } googleId Defaults to '' (empty <string>)
   * @param { Function } Callback Receives the new user.
   * 
   * @return { Promise<object | Error> }
   */
  registerUserAsync: ( name, email, summary = '', githubId = '', googleId = '', Callback ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        email = !email ? '' : email;

        const queryResults = await db.transaction( [
          [
            `INSERT INTO Users (Email, Github_Id, Google_Id, LastLogin, Name, Summary)
             VALUES ($1, $2, $3, (${db.utcDateFunc()}), $4, $5)
             RETURNING *`,
            [email, githubId, googleId, name, summary]
          ],
          [
            `INSERT INTO FS_Local (UserId)
             VALUES ( ( SELECT currval( pg_get_serial_sequence('Users', 'id') ) ) )`
          ]
        ] );

        if ( Callback )
          return Callback( null, queryResults[0].rows[0] );

        return resolve( queryResults[0].rows[0] );

      } catch ( e ) {
        if ( Callback )
          return Callback( e, null );

        return reject( e );
      }
    } );
  },

  /**
   * @param { string | number } userId
   * @param { LoginType } loginType
   * @param { boolean } getUser Defaults to true.
   * @param { string } timestamp Optional. A custom timestamp.
   */
  updateLastLoginAsync: ( userId, loginType, timestamp = null ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        timestamp = !timestamp ? db.utcDateFunc() : timestamp;

        const queryResult = await db.query(
          `UPDATE Users
           SET LastLogin = (${timestamp})
           WHERE ${loginType} = $1
           RETURNING *`,
          [userId]
        );

        return resolve( queryResult.rows[0] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  /**
   * Note: This method overides the current value.
   */
  updateSocialAccountId: ( userId, socialAccountType, accountId ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `UPDATE Users
           SET ${socialAccountType} = $1
           WHERE Id = $2
           RETURNING *`,
          [accountId, userId]
        );

        return resolve( queryResult.rows[0] );

      } catch ( e ) {
        return reject( e );
      }
    } );
  }
};
