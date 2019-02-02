class TheCodeChanView {
  constructor() {
  }

  /** @returns { HTMLElement[] } */
  get allThreadCardElems() { return DomUtils.getAll( `${this.model.processId}_cntn .thread-card` ); }
  get allBoardBtnsElems() { return DomUtils.getAll( `${this.model.processId}_cntn .board_btn` ); }

  /**
   * Returns: { userName: <string>, timestamp: <string>, threadId: <string> }
   * @param { HTMLElement } cardElem
   */
  getThreadCardValues( cardElem ) {
    return {
      userName: cardElem.getElementsByClassName( 'user-name-val' )[0].nodeValue,
      timestamp: cardElem.getElementsByClassName( 'timestamp-val' )[0].nodeValue,
      threadId: cardElem.getElementsByClassName( 'thead-id-val' )[0].nodeValue,
      message: cardElem.getElementsByClassName( 'message' )[0].nodeValue
    };
  }

  injectContent( processId, content ) {
    DomUtils.get( `${processId}_cntnt` ).innerHTML = content;
  }
}
