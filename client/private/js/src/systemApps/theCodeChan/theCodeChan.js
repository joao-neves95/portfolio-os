class TheCodeChan {
  constructor( processId ) {
    this.model = new TheCodeChanModel();
    this.view = new TheCodeChanView();
    this.model.processId = processId;

    this.boardController = new BoardController();

    this.init();
  }

  async init() {
    try {
      const allBoards = await this.model.getAllBoardsAsync();
      const firstBoardThreads = await this.model.getThreadsPaginatedAsync( allBoards[0].id );

      this.model.allBoards = allBoards;
      const thisProcessId = this.model.processId;

      windowManager.openNewWindow( thisProcessId, TheCodeChanTemplates.page( thisProcessId, allBoards ) );
      this.view.injectContent( thisProcessId, TheCodeChanTemplates.boardPage( allBoards[0].name, firstBoardThreads ) );
      this.__updateBoardListeners();
      this.__updateBoardsBtnsListeners();
      this.model.currentPage = TheCodeChanPageType.Board;

    } catch ( e ) {
      return Notifications.errorToast( 'There was an error while opening the theCodeChan. Please, try again later.' );
    }
  }

  __updateBoardsBtnsListeners() {
    // BOARD BUTTON CLICKS.

    const allBoardBtns = this.view.allBoardBtnsElems;
    for ( let i = 0; i < allBoardBtns.length; ++i ) {
      allBoardBtns[i].addEventListener( 'click', async ( e ) => {
        e.preventDefault();
        const boardId = e.target.id.substring( PROCESS_ID_LENGTH + 7 );
        const firstPageThreads = await this.model.getThreadsPaginatedAsync( boardId );

        let threadCards = '';
        for ( let i = 0; i < firstPageThreads.length; ++i ) {
          threadCards += TheCodeChanTemplates.threadCard( threadCards[i].id, threadCards[i].username, threadCards[i].timestamp, threadCards[i].message );
        }

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.boardPage( e.target.value, '')
        );

        this.__updateBoardListeners();
      } );
    }
  }

  __updateBoardListeners() {
    // THREAD CARD CLICKS.

    /** @type { HTMLElement[] } */
    const allThreadCards = this.view.allThreadCardElems;
    for ( let i = 0; i < allThreadCards.length; ++i ) {
      allThreadCards[i].addEventListener( 'click', async ( e ) => {
        const threadValues = this.view.getThreadCardValues( e.target );
        const firstPageReplies = await this.model.getRepliesPaginatedAsync( threadId );

        let replyCards = '';
        for ( let i = 0; i < firstPageReplies.length; ++i ) {
          replyCards += TheCodeChanTemplates.replyCard( firstPageReplies[i].id, firstPageReplies[i].username, firstPageReplies[i].timestamp, firstPageReplies[i].message );
        }

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.threadPage( threadValues.threadId, threadValues.userName, threadValues.timestamp, threadValues.message, replyCards )
        );
      } );
    }
  }
}
