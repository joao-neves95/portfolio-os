﻿const db = require( '../../db' );
const LoginType = require( '../enums/loginType' );

module.exports = {

  getUserQuery: ( loginType ) => {
    return `SELECT *
            FROM Users
            WHERE Users.${loginType} = $1`;
  },

  getUserAsync: ( userId, loginType, Callback ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          getUserQuery( loginType ),
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

  // TODO: Test this.
  getProfileAsync: ( userId ) => {
    return new Promise( async ( resolve, reject ) => {
      /** @type {PoolClient} */
      const dbClient = await db.openClient();

      try {
        const queryResult = await dbClient.query(
          `SELECT Users.Name, Users.Summary
           FROM Users
           WHERE Users.Id = $1
           GROUP BY Id`,
          [userId]
        );

        const queryResult2 = await dbClient.query(
          `SELECT SocialLinks.Id, Hosts.Name AS HostName, SocialLinks.UrlPath
           FROM SocialLinks
               INNER JOIN Hosts
               ON SocialLinks.HostId = Hosts.Id
           WHERE SocialLinks.UserId = $1`,
          [userId]
        );

        const queryResult3 = await dbClient.query(
          `SELECT SkillSet.Id, SkillSet.Name
           FROM SkillSet
           WHERE SkillSet.UserId = $1
           ORDER BY Id`,
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

        console.debug( queryResult );

        //const queryResult2 = await dbClient.query(
        //  `UPDATE SocialLinks
        //   SET UrlPath = $1
        //   WHERE Id = $2 AND UserId = $3`,
        //  [userId]
        //);

        //const queryResult3 = await dbClient.query(
        //  `UPDATE SkillSet
        //   SET Name = $1
        //   WHERE Id = $2 AND UserId = $3`,
        //  [userId]
        //);

        return resolve( queryResult.rowCount );

      } catch ( e ) {
        return reject( e );
      }
    } );
  },

  addSocialLinkAsync: ( userId, hostId, urlPath ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `INSERT INTO SocialLinks (UserId, HostId, UrlPath)
           VALUES ($1, $2, $3)`,
          [userId, hostId, urlPath]
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

  // TODO: Test.
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

        console.debug( queryResults[0].rows );
        console.debug( queryResults[0].rows[0] );

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
  updateLastLoginAsync: ( userId, loginType, getUser = true, timestamp = null ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        timestamp = !timestamp ? db.utcDateFunc() : timestamp;
        getUser = getUser ? getUserQuery( loginType ) : '';

        const queryResult = await db.query(
          `UPDATE Users
           SET Users.LastLogin = (${db.utcDateFunc()})
           WHERE Users.${loginType} = $2;
           ${getUser}`,
          [userId, userId]
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
  updateSocialAccountId: ( userId, socialAccountType, accountId, getUser = true ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        getUser = getUser ? getUserQuery( loginType ) : '';

        const queryResult = await db.query(
          `UPDATE Users
           SET Users.${socialAccountType} = $2
           WHERE Users.Id = $3
           ${getUser}`,
          [userId, accountId, userId]
        );

        return resolve( queryResult );

      } catch ( e ) {
        return reject( e );
      }
    } );
  }
};
