class Trash {
  constructor() {
    this.items = [];

    this.open = () => {
      windowManager.openNewWindow('Trash');
    }
  }
}