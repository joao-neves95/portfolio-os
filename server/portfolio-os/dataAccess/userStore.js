const db = require( './db' );
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
  getUserProfileAsync: ( userId ) => {
    return new Promise( async ( resolve, reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT
               Users.Name,
               Users.Summary,
               array_to_string(
                   array_agg(
                       (
                           SELECT SocialLinks.Link
                           FROM SocialLinks
                           WHERE Users.Id = SocialLinks.UserId
                           ORDER BY Id
                       )
                   ), ','
               ),
               array_to_string(
                   array_agg(
                       (
                           SELECT SkillSet.Name
                           FROM SkillSet
                           WHERE Users.Id = SkillSet.UserId
                           ORDER BY Id
                       )
                   ), ','
               )
           FROM Users
           WHERE Users.Id = $1`,
          [userId]
        );

        return resolve( queryResult.rows[0] );

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
        const queryResults = await db.transaction( [
          [
            `INSERT INTO Users (Email, Github_Id, Google_Id, LastLogin, Name, Summary)
             VALUES ($1, $2, $3, ${db.utcDateFunc()}, $6, $7)`,
            [email, githubId, googleId, name, summary]
          ],
          [
            `INSERT INTO FS_Local (UserId)
             VALUES ( ( SELECT currval( pg_get_serial_sequence('Users','Id') ) )`,
            []
          ]
        ] );

        if ( Callback )
          return Callback( null, queryResults[0].rows[0] );

        return resolve( queryResult[0].rows[0] );

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
           SET Users.LastLogin = ${db.utcDateFunc()}
           WHERE Users.${loginType} = $2;
           ${getUser}`,
          [userId, userId]
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
