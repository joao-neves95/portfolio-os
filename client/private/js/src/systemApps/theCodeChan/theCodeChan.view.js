class TheCodeChanView {
  constructor() {
  }

  /** @returns { HTMLElement[] } */
  getAllThreadCardElems( processId ) { return DomUtils.getAll( `#${processId}_cntnt article.thread-card` ); }
  getAllBoardBtnsElems( processId ) { return DomUtils.getAll( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .board_btn` ); }
  getPostThreadBtn( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .post-thread-btn` ); }
  getThreadFormInput( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} textarea.input-message` ).value; }
  getThreadReplyBtn( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .post-reply-btn` ); }
  getThreadReplyInput( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} textarea.reply-message` ).value; }

  /**
   * Returns: { userName: <string>, timestamp: <string>, threadId: <string> }
   * @param { HTMLElement } cardElem
   */
  getThreadCardValues( eventTarget ) {
    eventTarget = DomUtils.getParentByClassInclude( eventTarget, 'thread-card' );

    return {
      userName: eventTarget.getElementsByClassName( 'user-name-val' )[0].innerText,
      timestamp: eventTarget.getElementsByClassName( 'timestamp-val' )[0].innerText,
      threadId: eventTarget.getElementsByClassName( 'thead-id-val' )[0].innerText,
      message: eventTarget.getElementsByClassName( 'message' )[0].value
    };
  }

  injectContent( processId, content ) {
    document.getElementById( `${processId}_cntnt` ).innerHTML = content;
  }
}
