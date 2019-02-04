class TheCodeChan {
  constructor( processId ) {
    this.model = new TheCodeChanModel( processId );
    this.view = new TheCodeChanView();

    this.init();
  }

  async init() {
    try {
      const allBoards = await this.model.getAllBoardsAsync();
      this.model.currentBoardId = allBoards[0].id;
      const firstBoardThreads = await this.model.getThreadsPaginatedAsync( allBoards[0].id );

      this.model.allBoards = allBoards;
      const thisProcessId = this.model.processId;
      windowManager.openNewWindow( thisProcessId, TheCodeChanTemplates.page( thisProcessId, allBoards ) );

      this.view.injectContent( thisProcessId, TheCodeChanTemplates.boardPage( allBoards[0].name, firstBoardThreads ) );
      this.__updateBoardListeners();
      this.__updateBoardsBtnsListeners();

    } catch ( e ) {
      console.error( e );
      return Notifications.errorToast( 'There was an error while opening the theCodeChan. Please, try again later.' );
    }
  }

  __updateBoardsBtnsListeners() {
    // BOARD BUTTON CLICKS.

    const allBoardBtns = this.view.getAllBoardBtnsElems( this.model.processId );
    for ( let i = 0; i < allBoardBtns.length; ++i ) {
      allBoardBtns[i].addEventListener( 'click', async ( e ) => {
        e.preventDefault();
        const thisBoardId = e.target.id.substring( PROCESS_ID_LENGTH + 7 );
        const firstPageThreads = await this.model.getThreadsPaginatedAsync( thisBoardId );

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.boardPage( e.target.text, firstPageThreads )
        );

        this.model.currentBoardId = thisBoardId;
        this.__updateBoardListeners();
      } );
    }

    // POST THREAD BUTTON.
    this.view.getPostThreadBtn( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      const postContent = this.view.getThreadFormInput( this.model.processId );

      const rowCount = await this.model.postNewThread( this.model.currentBoardId, postContent );
      if ( rowCount <= 0 )
        return Notifications.errorToast( `There was an error while posting the new thread. Please, try again later.` );

      // TODO: Add the card to the view.
      Notifications.successToast( 'New thread successfully added!' );
    } );
  }

  __updateBoardListeners() {
    // THREAD CARD CLICKS.

    /** @type { HTMLElement[] } */
    const allThreadCards = this.view.getAllThreadCardElems( this.model.processId );
    for ( let i = 0; i < allThreadCards.length; ++i ) {
      allThreadCards[i].addEventListener( 'click', async ( e ) => {
        const threadValues = this.view.getThreadCardValues( e.target );
        const firstPageReplies = await this.model.getRepliesPaginatedAsync( threadValues.threadId );
        this.model.currentThreadId = threadValues.threadId;

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.threadPage( threadValues.threadId, threadValues.userName, threadValues.timestamp, threadValues.message, firstPageReplies )
        );

        this.__updateThreadListeners();
      } );
    }
  }

  __updateThreadListeners() {
    // REPLY BUTTON.
    this.view.getThreadReplyBtn( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      const rowCount = await this.model.postReply( this.model.currentThreadId, this.view.getThreadReplyInput( this.model.processId ) );

      if ( rowCount <= 0 )
        return Notifications.errorToast( `There was an error while posting the reply. Please, try again later.` );

      // TODO: Add the card to the view.
      Notifications.successToast( 'Your reply was successfully added!' );
    } );
  }
}
