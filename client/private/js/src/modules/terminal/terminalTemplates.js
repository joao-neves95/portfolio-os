class TerminalTemplates {

  window(id) {
    return `
      <article class="grid-y" id="${id}">
      
      </article>
    `;
  }

  info(content) {
    return `
      <p>${content}<p>
    `;
  }

  addInput() {
    return `
      <span>&gt;<span><input type="text">
    `;
  }
}

const terminalTemplates = new TerminalTemplates();
