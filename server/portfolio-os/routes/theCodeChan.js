const theCodeChanStore = require( '../dataAccess/theCodeChanStore' );

const { sanitizeHTML } = require( '../../../common/commonUtils' );

// "portfolio-os/api/the-code-chan"

module.exports = {

  // #region GET

  // "/boards"
  getAllBoards: async ( req, res ) => {
    try {
      const result = await theCodeChanStore.getAllBoardsAsync();

      if ( result.length > 0 )
        return res.status( 200 ).json( result );

      return res.status( 500 ).json( 'Error getting the boards.' );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  // "/:boardId/threads?lastId=<int>&limit=<int>"
  getThreadsPaginated: async ( req, res ) => {
    try {
      const lastId = !req.query.lastId ? 0 : req.query.lastId;
      const limit = !req.query.limit ? 10 : req.query.limit;
      const result = await theCodeChanStore.getThreadsPaginatedAsync( sanitizeHTML( req.params.boardId ), sanitizeHTML( lastId ), sanitizeHTML( limit ) );

      if ( result.length <= 0 )
        return res.status( 404 ).json( 'No threads found.' );

      return res.status( 200 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  // "/:theardId/replies?lastId=<int>&limit=<int>"
  getRepliesPaginated: async ( req, res ) => {
    try {
      const lastId = !req.query.lastId ? 0 : req.query.lastId;
      const limit = !req.query.limit ? 10 : req.query.limit;
      const result = await theCodeChanStore.getRepliesPaginatedAsync( sanitizeHTML( req.params.threadId ), sanitizeHTML( lastId ), sanitizeHTML( limit ) );

      if ( result.length <= 0 )
        return res.status( 404 ).json( 'No replies found.' );

      return res.status( 200 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  // #endregion

  // #region POST

  // "/:boardId/threads"
  postThread: async ( req, res ) => {
    try {
      const result = await theCodeChanStore.insertNewThread( sanitizeHTML( req.params.boardId ), req.user.id, sanitizeHTML( req.body.message ) );

      if ( result <= 0 )
        throw new Error();

      return res.status( 201 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  },

  // "/:threadId/replies"
  postReply: async ( req, res ) => {
    try {
      const result = await theCodeChanStore.insertNewReply( sanitizeHTML( req.params.threadId ), req.user.id, sanitizeHTML( req.body.message ) );

      if ( result <= 0 )
        throw new Error();

      return res.status( 201 ).json( result );

    } catch ( e ) {
      return res.status( 500 ).json( 'Unknown Error' );
    }
  }

  // #endregion
};
