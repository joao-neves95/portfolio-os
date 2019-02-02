﻿class TheCodeChanModel {
  constructor() {
    this.processId;
    this.currentPage;
    this.allBoards = [];
  }

  async allBoardsAsync() {
    try {
      let allBoards = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/boards` );
      if ( !allBoards.ok() )
        throw new Error();

      return await allBoards.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the boards.' );
      return [];
    }
  }

  async getThreadsPaginatedAsync( boardId, lastPageId = 0 ) {
    try {
      let boardThreads = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/${boardId}/threads?lastId=${lastPageId}&limit=20` );

      if ( boardThreads.status !== 500 && boardThreads.status !== 404 ) {
        boardThreads = await firstBoardThreads.json();
      } else {
        boardThreads = [];
      }

      return boardThreads;

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the threads. Please, try again later.' );
      return [];
    }
  }

  async getRepliesPaginatedAsync( threadId, lastPageId = 0 ) {
    try {
      let threadReplies = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/${threadId}/replies?lastId=${lastPageId}&limit=50` );

      if ( threadReplies.status !== 500 && threadReplies.status !== 404 ) {
        threadReplies = await threadReplies.json();
      } else {
        threadReplies = [];
      }

      return threadReplies;

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the threads. Please, try again later.' );
      return [];
    }
  }

  async postNewThread( boardId, message ) {
    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}the-code-chan/${boardId}/threads`, { message: CommonUtils.sanitizeHTML( message ) } );

      if ( !res.ok )
        throw new Error();

      return await threadReplies.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while posting the thread. Please, try again later.' );
    }
  }

  async postReply( threadId, message ) {
    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}the-code-chan/${threadId}/replies`, { message: CommonUtils.sanitizeHTML( message ) } );

      if ( !res.ok )
        throw new Error();

      return await threadReplies.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while posting the reply. Please, try again later.' );
    }
  }
}
