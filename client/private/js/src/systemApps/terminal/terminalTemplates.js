/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class TerminalTemplates {
  constructor() {
    this.lineContent = '';
  }

  get welcomeMessage() { return 'Welcome to the Portfolio - OS Terminal!'; };

  window(id) {
    return `
      <section class="grid-y terminal" id="${id}">
      
      </section>
    `;
  }

  /**
   * 
   * @param {function} content 
   * withInfo() | withInput()
   */
   addLine() {
      return `
        <article class="grid-x input-group line">
          ${this.lineContent}
        </article>
      `;

     this.lineContent = '';
   }

  /**
   * 
   * @param {string} content
   */
  withInfo( content = '', additionalClasses = '') {
    this.lineContent = `
      <p class="info ${additionalClasses}">${content}<p>
    `;

    return this;
  }

  withLastInput(lastInput = '') {
    this.lineContent = `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <p class="cell medium-11 no-border input" type="text" autofocus>${lastInput}<p>
    `;

    return this;
  }

  withInput() {
    this.lineContent = `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <input id="active-input" class="cell medium-11 no-border input" type="text" autofocus>
    `;

    return this;
  }
}

const terminalTemplates = new TerminalTemplates();
