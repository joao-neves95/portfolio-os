class TheCodeChanTemplates {
  constructor() {
    throw new Error( 'Can not instatiate the static class "TheCodeChanTemplates"' );
  }

  static get tCCPagePrefix() { return 'tcc-'; }

  static page( processId, boards ) {
    let boardsListItems = '';
    for ( let i = 0; i < boards.length; ++i ) {
      boardsListItems += `<li><a href="#" id="${processId}_board-${boards.id}" class="board_btn">${boards.name}</a></li>`;
    }

    return `
      <section class="grid-y profiles" id="${this.tCCPagePrefix}${id}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="menu">
              <li class="menu-text">theCodeChan</li>
              ${boardsListItems}
            </ul>
          </div>
          <form class="grid-container post-thread">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Message</h5>
                <input type="text" name="message" class="message" required>
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

  static boardPage( boardName, threads ) {
    return `
      <section class="grid-y board">
        <h3 class="title">${boardName}</h3>
      </section>
    `;
  }

  static threadPage( threadId, userName, timestamp, message, replies = '' ) {
    return `
      <section class="grid-y thread">

        <div class="t-header">
          <p>User: ${userName} nbsp; At: ${timestamp} nbsp; ThreadId: ${threadId}</p>
          <p class="message">${message}</p>
          <form class="grid-container post-reply">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Message</h5>
                <input type="text" name="message" class="message" required>
              </div>

              <div class="cell">
                <button class="success button post-reply-btn">Post Reply</button>
              </div>

            </section>
          </form>
        </div>

        <div class="t-replies">
          ${replies}
        </div>

      </section>
    `;
  }

  static threadCard( threadId, userName, timestamp, message ) {
    return `
      <article class="cell card thread-card">
        <div class="card-section">
          <p class="message">${message}</p>
          <p>
            User: <span class="user-name-val">${userName}</span> nbsp;
            At: <span class="timestamp-val">${timestamp}</span> nbsp;
            ThreadId: <span class="thead-id-val">${threadId}</span>
          </p>
        </div>
      </article>
    `;
  }

  static replyCard( replyId, userName, timestamp, message ) {
    return `
      <article class="cell card reply-card">
        <div class="card-section">
          <p>User: ${userName} nbsp; At: ${timestamp} nbsp; ReplyId: ${replyId}</p>
          <p>${message}</p>
        </div>
      </article>
    `;
  }
}