class ContextMenuTemplates {
  menuWindow(content = '') {
    return `
      <nav class="grid-y context-menu">
        <ul>${content}</ul>
      </nav>
    `;
  }

  menuItem() {
    return `
      <li class="item">Remove</li>
    `;
  }
}
