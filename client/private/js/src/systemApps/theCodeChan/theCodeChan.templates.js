class TheCodeChanTemplates {
  constructor() {
    throw new Error( 'Can not instatiate the static class "TheCodeChanTemplates"' );
  }

  static get tCCPagePrefix() { return 'tcc-'; }

  static page( processId, boards ) {
    let boardsListItems = '';
    for ( let i = 0; i < boards.length; ++i ) {
      boardsListItems += `<li><a href="#" id="${processId}_board-${boards[i].id}" class="board_btn">${boards[i].name}</a></li>`;
    }

    return `
      <section class="grid-y the-code-chan" id="${this.tCCPagePrefix}${processId}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="menu">
              ${boardsListItems}
            </ul>
          </div>
          <form class="grid-container post-thread">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Message</h5>
                <!-- <input type="text" name="message" class="message" required> -->
                <textarea name="message" class="input-message" placeholder="Remember, be civilized!" required></textarea> 
              </div>

              <div class="cell">
                <button class="success button post-thread-btn">Post Thread</button>
              </div>

            </section>
          </form>
        </div>

        <div class="cell content" id="${processId}_cntnt">
        </div>

      </section>
    `;
  }

  static boardPage( boardName, threads = [] ) {
    let threadCards = '';
    for ( let i = 0; i < threads.length; ++i ) {
      threadCards += TheCodeChanTemplates.threadCard( threads[i].id, threads[i].username, threads[i].timestamp, threads[i].message );
    }

    return `
      <section class="grid-y board">
        <div>
          <h3 class="title"> /${boardName}/ </h3>
        </div>
        <div class="grid-y">
          ${threadCards}
        </div>
      </section>
    `;
  }

  static threadPage( threadId, userName, timestamp, message, replies = [] ) {
    let replyCards = '';
    for ( let i = 0; i < replies.length; ++i ) {
      replyCards += TheCodeChanTemplates.replyCard( replies[i].id, replies[i].username, replies[i].timestamp, replies[i].message );
    }

    return `
      <section class="grid-y thread">

        <div class="t-header">
          <p>User: ${CommonUtils.desanitizeHTML( userName )} | At: ${CommonUtils.desanitizeHTML( timestamp )} | Thread Id: ${CommonUtils.desanitizeHTML(threadId)}</p>
          <textarea class="message" height="auto;" readonly>${CommonUtils.desanitizeHTML(message)}</textarea>
          <form class="grid-container post-reply">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Post Reply</h5>
                <textarea type="text" name="message" class="reply-message" required></textarea>
              </div>

              <div class="cell">
                <a class="success button post-reply-btn">Post Reply</a>
              </div>

            </section>
          </form>
        </div>

        <div class="grid-y t-replies">
          ${replyCards}
        </div>

      </section>
    `;
  }

  static threadCard( threadId, userName, timestamp, message ) {
    return `
      <article class="cell card thread-card">
        <div class="card-section">
          <textarea class="message" wrap="hard" readonly>${CommonUtils.desanitizeHTML(message)}</textarea>
          <p>
            User: <span class="user-name-val">${CommonUtils.desanitizeHTML(userName)}</span> |
            At: <span class="timestamp-val">${CommonUtils.desanitizeHTML(timestamp)}</span> |
            Thread Id: <span class="thead-id-val">${CommonUtils.desanitizeHTML(threadId)}</span>
          </p>
        </div>
      </article>
    `;
  }

  static replyCard( replyId, userName, timestamp, message ) {
    return `
      <article class="cell card reply-card">
        <div class="card-section">
          <p>User: ${CommonUtils.desanitizeHTML(userName)} | At: ${CommonUtils.desanitizeHTML(timestamp)} | Reply Id: ${CommonUtils.desanitizeHTML(replyId)}</p>
          <textarea class="message" height="auto;" readonly>${CommonUtils.desanitizeHTML( message )}</textarea>
        </div>
      </article>
    `;
  }
}