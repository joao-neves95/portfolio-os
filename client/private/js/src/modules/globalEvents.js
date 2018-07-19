/**
 * Document events.
 * */
class GlobalEvents {
  constructor() {
    this.clickEventFunctions = [];
  }

  init() {
    document.addEventListener('click', (e) => {
      for (let i = 0; i < this.clickEventFunctions.length; ++i) {
        this.clickEventFunctions[i](e);
      }
    });
  };

  bindEvent(eventType, executeFunction) {
    switch (eventType.toUpperCase()) {
      case 'CLICK':
        this.clickEventFunctions.push( executeFunction );
      default:
        return;
    }
  };
}

const globalEvents = new GlobalEvents();
