class TerminalTemplates {

  get welcomeMessage() { return 'Welcome to the Portfolio - OS Terminal!'; };

  window(id) {
    return `
      <section class="grid-y terminal" id="${id}">
      
      </section>
    `;
  }

 addLine(content) {
    return `
      <article class="grid-x input-group line">
        ${content}
      </article>
    `;
  }

  withInfo(content) {
    return `
      <p>${content}<p>
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
