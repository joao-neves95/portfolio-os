class TerminalTemplates {

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
   addLine(content = '') {
      return `
        <article class="grid-x input-group line">
          ${content}
        </article>
      `;
   }

  /**
   * 
   * @param {string} content
   */
  withInfo(content = '') {
    return `
      <p class="info">${content}<p>
    `;
  }

  withLastInput(lastInput = '') {
    return `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <p class="cell medium-11 no-border input" type="text" autofocus>${lastInput}<p>
    `;
  }

  withInput() {
    return `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <input id="active-input" class="cell medium-11 no-border input" type="text" autofocus>
    `;
  }
}

const terminalTemplates = new TerminalTemplates();
