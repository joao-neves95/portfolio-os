class ContextMenuTemplates {
  menuWindow(content = '') {
    return `
      <nav class="grid-y context-menu">
        <ul>${content}</ul>
      </nav>
    `;
  }

  /**
   * 
   * @param {string} label
   */
  menuItem(label) {
    return `
      <li class="item">${ label }</li>
    `;
  }
}
