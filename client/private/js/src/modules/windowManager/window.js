/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Add the z-index of each each window.

class Window {
  /**
   * 
   * @param { string } processId
   * @param { string } title
   * @param { string } content
   */
  constructor( processId, title = '', content ) {
    this.id = `${Window.idPrefix}${processId}`;
    this.title = title;
    this.content = content;
    this.icon = TaskbarIcon;

    this.isMinimized = false;
    this.init();
  }

  get element() { return document.getElementById( this.id ); }
  static get idPrefix() { return 'win-'; }

  get windowTemplate() {
    return `
      <article class="window-manager grid-y resizable selected-win" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell small-6 medium-8 large-8">
              <p class="window-title free-draggable">${this.title}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}maximize-white.svg" alt="Maximize Window Icon" class="max-size-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
        <section class="content">
          ${this.content}
        </section>
        <div class="resizer"></div>
      </article>
    `;
  }

  /**
   * Note: Currently in only supports having one modal.
   * @param {any} content
   */
  static modalTemplate( content ) {
    return `
      <div class="reveal" id="modal" data-reveal>
        ${content}
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
  }

  static appStoreAppWindowTemplate( appTitle, codePenUserName, penCode ) {
    return `
      <iframe
        scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="false" referrerpolicy="origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin"
        height="406" style="width: 100%;"
        class="user-app-window"
        title="${appTitle}"
        src="${Utils.spoofRefererRedirectUrl( `https://codepen.io/${codePenUserName}/embed/${penCode}/?height=406&theme-id=0&default-tab=result`)}">
        See the Pen <a href='${HIDE_REFERER}https://codepen.io/${codePenUserName}/pen/${penCode}/'  rel="noreferrer">${appTitle}</a> by João Neves
        (<a href='${HIDE_REFERER}https://codepen.io/${codePenUserName}'  rel="noreferrer">@${codePenUserName}</a>) on <a href='${HIDE_REFERER}https://codepen.io'  rel="noreferrer">CodePen</a>.
      </iframe>
    `;
  }

  init() {
    document.getElementById( 'window-manager-container' ).innerHTML += this.windowTemplate;
  }

  kill() {
    if ( this.element ) this.element.remove();
  }

  minimize() {
    this.element.style.display = 'none';
    this.isMinimized = true;
  }

  unminimize() {
    this.element.style.display = 'block';
    this.isMinimized = false;
  }

  maxSize() {
    this.element.style.width = '100%';
    this.element.style.height = '92%';
    this.element.style.top = '0%';
    this.element.style.left = '0%';
  }

  select() {
    if ( this.element ) this.element.classList.add( 'selected-win' );
  }

  unselect() {
    this.element.classList.remove( 'selected-win' );
  }
}
