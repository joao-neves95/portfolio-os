class DragAndDrop {
  constructor() {
    this.draggableElements = [];

    this.init = () => {
      this.updateDraggables();
      this.updateFreeDraggListeners();
    };

    // UPDATES:

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

    // LISTENERS:
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

    this.updateFreeDraggListeners = () => {
      const freeDraggableElems = document.getElementsByClassName('free-draggable');

      for (let i = 0; i < freeDraggableElems.length; i++) {
  
        freeDraggableElems[i].removeEventListener('dragstart', this.eventHandlers.dragstartHandler);
        freeDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragstartHandler(e);
        });

        freeDraggableElems[i].removeEventListener('dragover', this.eventHandlers.freeDragHandler);
        freeDraggableElems[i].addEventListener('dragover', (e) => {
          e.stopPropagation();
          this.eventHandlers.freeDragHandler(e);
        });
      }
    };

    // HANDLERS:
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
        if (that.children.length > 0 || !that.className.includes('cell desktop-cell'))
          return;

        this.utils.acceptDrop(e);
        return false;
      },

      dropHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        console.log(that)
        if (!that.className.includes('cell desktop-cell'))
          return;

        const newElement = new DOMParser().parseFromString(e.dataTransfer.getData('text/html'), 'text/html').body.firstChild;
        document.getElementById(newElement.id).remove();
        // data.classList.add('animated', 'bounceIn');
        that.insertAdjacentElement('afterbegin', newElement);
        this.updateDraggables();
        desktopManager.updateListeners();
      },

      freeDragHandler: (e) => {
        // e.stopPropagation();
        const that = e.target;
        const thisWindow = DomUtils.getParentByTag(that, 'article')
        console.debug(e)
        console.debug('that.style.top:', thisWindow.style.top);
        console.debug('e.clientX:', e.clientX);
        console.debug('that.style.left:', thisWindow.style.left);
        console.debug('e.clientY:', e.clientY);
        // TODO: Fix the final position of the window.
        thisWindow.style.top = e.offsetTop + 'px';
        thisWindow.style.left = e.target.offsetLeft + 'px';
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
