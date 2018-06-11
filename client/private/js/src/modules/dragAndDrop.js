class DragAndDrop {
  constructor() {
    this.draggableElements = [];

    this.init = () => {
      this.updateDraggables();
      this.updateFreeDraggListeners();
    };

    this.updateDraggables = () => {
      this.cancelNonDraggableElements();
      this.updateDraggableElements();
      this.updateDraggListeners();
      this.updateDroppableListeners();
    };

    this.cancelNonDraggableElements = () => {
      let nonDraggableElements = [];
      nonDraggableElements.push(document.getElementsByTagName('img'));
      nonDraggableElements.push(document.getElementsByTagName('a'));

      for (let i = 0; i < nonDraggableElements[0].length; i++) {
        nonDraggableElements[0][i].setAttribute('draggable', 'false');
      }
    };

    this.updateDraggableElements = () => {
      this.draggableElements = [];
      this.draggableElements.push(document.getElementsByClassName('draggable'));
      this.draggableElements.push(document.getElementsByClassName('free-draggable'));

      for (let i = 0; i < this.draggableElements.length; i++) {
        this.draggableElements[i][0].setAttribute('draggable', 'true');
      }
    };

    this.updateFreeDraggListeners = () => {
      const freeDraggableElems = document.getElementsByClassName('free-draggable');
      for (let i = 0; i < freeDraggableElems.length; i++) {
        freeDraggableElems[i].removeEventListener('dragstart', this.eventHandlers.freeDragstartHandler);
        freeDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.freeDragstartHandler(e);
        });
      }
    };

    this.updateDraggListeners = () => {
      const constrainedDraggableElems = document.getElementsByClassName('draggable');
      for (let i = 0; i < constrainedDraggableElems.length; i++) {
        constrainedDraggableElems[i].removeEventListener('dragstart', this.eventHandlers.dragstartHandler);
        constrainedDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragstartHandler(e);
        });
      }
    };

    this.updateDroppableListeners = () => {
      const droppableElems = document.getElementsByClassName('droppable');
      for (let i = 0; i < droppableElems.length; i++) {
        droppableElems[i].removeEventListener('dragover', this.eventHandlers.dragoverHandler);
        droppableElems[i].addEventListener('dragover', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragoverHandler(e);
        }, false);


        droppableElems[i].removeEventListener('drop', this.eventHandlers.dropHandler);
        droppableElems[i].addEventListener('drop', (e) => {
          e.stopPropagation();
          this.eventHandlers.dropHandler(e)
        }, false);
      }
    };

    this.eventHandlers = {

      dragstartHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        this.utils.populateDataTransfer(e);
        return false;
      },

      dragoverHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        if (that.children.length > 0)
          return;

        this.utils.acceptDrop(e);
        return false;
      },

      dropHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        const newElement = new DOMParser().parseFromString(e.dataTransfer.getData('text/html'), 'text/html').body.firstChild;
        document.getElementById(newElement.id).remove();
        // data.classList.add('animated', 'bounceIn');
        that.insertAdjacentElement('afterbegin', newElement);
        this.updateDraggables();
        desktopManager.updateListeners();
      },

      // TODO: Finish the free draggable handler (for windows).
      freeDragstartHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        this.utils.populateDataTransfer(e);
        return false;
      }
    };

    this.utils = {

      populateDataTransfer: (e) => {
        const that = e.target;
        const id = that.id;
        const tag = that.localName;
        const classes = that.className;
        const data = `<${tag} id="${id}" class="${classes}"> ${that.innerHTML} </${tag}>`;
        e.dataTransfer.setData('text/html', data)
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.dropEffect = 'move'
      },

      acceptDrop: (e) => {
        e.preventDefault()
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.dropEffect = 'move'
      }
    };
  }
}
