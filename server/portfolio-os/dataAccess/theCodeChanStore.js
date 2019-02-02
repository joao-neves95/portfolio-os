const db = require('../../db');

module.exports = {

  // #region SELECT

  getAllBoardsAsync: () => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT Id, Name
           FROM Boards
           ORDER BY Id ASC
          `
        );

        return _resolve( queryResult.rows );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  getThreadsPaginatedAsync: ( boardId, lastPageId = 0, limit = 10 ) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryResult = await db.query(
          `SELECT Threads.Id, Users.Name AS username, Threads.Message, Threads.CreateDate AS timestamp
           FROM Threads
               INNER JOIN Users
               ON Threads.UserId = Users.Id
           WHERE BoardId = $1 AND Id > $2
           ORDER BY Id $3 ASC
           LIMIT $4
          `,
          [boardId, lastPageId, limit]
        );

        return _resolve( queryResult.rows );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  getRepliesPaginatedAsync: ( threadId, lastPageId = 0, limit = 10 ) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `SELECT Replies.Id, Users.Name AS username, Replies.Message, Replies.CreateDate AS timestamp
           FROM Replies
               INNER JOIN Users
               ON Threads.UserId = Users.Id
           WHERE ThreadId = $1 AND Id > $2 
           ORDER BY Id ASC
           LIMIT $3
           `,
          [threadId, lastPageId, limit]
        );

        return _resolve( queryhResult.rows );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  getThreadIsClosed: ( threadId ) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `SELECT IsClosed
           FROM Threads
           WHERE Id = $1
          `,
          [threadId]
        );

        if ( queryhResult.rows.length <= 0 )
          return _resolve( [] );
        
        return _resolve( queryhResult.rows[0].isClosed );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  // #endregion

  // #region INSERT

  insertNewThread: (boardId, userId, message) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `INSERT INTO Threads (BoardId, UserId, Message, CreateDate})
           VALUES ($1, $2, $3, ${db.utcDateFunc()})
          `,
          [boardId, userId, message]
        );

        return _resolve( queryhResult.rowCount );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  insertNewReply: (threadId, userId, message) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `INSERT INTO Replies (ThreadId, UserId, Message, CreateDate)
           VALUES ($1, $2, $3, ${db.utcDateFunc()})
          `,
          [threadId, userId, message]
        );

        return _resolve( queryhResult.rowCount );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  // #endregion

  // #region DELETE

  deleteThread: ( threadId ) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `DELETE FROM Threads
           WHERE Id = $1
          `,
          [threadId]
        );

        return _resolve( queryResult.rowCount );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  },

  deleteReply: ( replyId ) => {
    return new Promise( async ( _resolve, _reject ) => {
      try {
        const queryhResult = await db.query(
          `DELETE FROM Replies
           WHERE Id = $1
          `,
          [replyId]
        );

        return _resolve( queryResult.rowCount );

      } catch ( e ) {
        console.error( e );
        return _reject( e );
      }
    } );
  }

  // #endregion
};

