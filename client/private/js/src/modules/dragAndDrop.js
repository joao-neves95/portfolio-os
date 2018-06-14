class DragAndDrop {
  constructor() {
    this.draggableElements = [];

    this.isDragging = Boolean;
    this.currentFreeDragElem = HTMLElement;
    this.currentreeDragData = '';

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
      nonDraggableElements.push(document.getElementsByTagName('img')[0]);
      nonDraggableElements.push(document.getElementsByTagName('a')[0]);

      if (nonDraggableElements.length <= 0)
        return;

      for (let i = 0; i < nonDraggableElements[0].length; i++) {
        nonDraggableElements[i].setAttribute('draggable', 'false');
      }
    };

    this.updateDraggableElements = () => {
      this.draggableElements = [];
      this.draggableElements.push(document.getElementsByClassName('draggable')[0]);
      this.draggableElements.push(document.getElementsByClassName('free-draggable')[0]);

      if (this.draggableElements.length <= 0)
        return;

      for (let i = 0; i < this.draggableElements.length; i++) {
        if (this.draggableElements[i])
          this.draggableElements[i].setAttribute('draggable', 'true');
      }
    };

    // LISTENERS:
    this.updateDraggListeners = () => {
      const constrainedDraggableElems = document.getElementsByClassName('draggable');

      if (constrainedDraggableElems.length <= 0)
        return;

      for (let i = 0; i < constrainedDraggableElems.length; i++) {
        constrainedDraggableElems[i].removeEventListener('dragstart', (e) => { this.eventHandlers.dragstartHandler(e); });
        constrainedDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragstartHandler(e);
        });
      }
    };

    this.updateDroppableListeners = () => {
      const droppableElems = document.getElementsByClassName('droppable');

      if (droppableElems.length <= 0)
        return;

      for (let i = 0; i < droppableElems.length; i++) {
        droppableElems[i].removeEventListener('dragover', (e) => { this.eventHandlers.dragoverHandler(e) });
        droppableElems[i].addEventListener('dragover', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragoverHandler(e);
        }, false);


        droppableElems[i].removeEventListener('drop', (e) => { this.eventHandlers.dropHandler(e); });
        droppableElems[i].addEventListener('drop', (e) => {
          e.stopPropagation();
          this.eventHandlers.dropHandler(e)
        }, false);
      }
    };

    this.updateFreeDraggListeners = () => {
      const freeDraggableElems = document.getElementsByClassName('free-draggable');

      if (freeDraggableElems.length <= 0)
        return;

      for (let i = 0; i < freeDraggableElems.length; i++) {

        freeDraggableElems[i].removeEventListener('mousedown', (e) => { this.eventHandlers.freeDragHandler(e); });
        freeDraggableElems[i].addEventListener('mousedown', (e) => {
          this.eventHandlers.freeDragHandler(e);
          return false;
        });

        window.removeEventListener('mouseup', (e) => { this.eventHandlers.freeDragendHandler(e); });
        window.addEventListener('mouseup', (e) => {
          this.eventHandlers.freeDragendHandler(e);
        });
      }
    };

    // HANDLERS:
    this.eventHandlers = {

      dragstartHandler: (e) => {
        e.stopPropagation();
        this.utils.populateDataTransfer(e);
        return false;
      },

      dragoverHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        const currentDragData = e.dataTransfer.getData('text/html');

        if (that.children.length > 0 || that.localName !== 'article' || currentDragData === this.currentFreeDragData)
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

      freeDragHandler: (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.isDragging = true;
        this.currentFreeDragElem = DomUtils.getParentByTag(e.target, 'article');
    
        window.addEventListener('mousemove', (e) => {
          this.eventHandlers.mousePositionHandler(e);
        });

        return false;
      },

      mousePositionHandler: (e) => {
        e.stopPropagation();
        if (!this.isDragging)
          return;
      
        const offset = DomUtils.getOffset(this.currentFreeDragElem);

        this.currentFreeDragElem.style.top = (e.pageY).toString() + 'px';
        this.currentFreeDragElem.style.left = (e.pageX).toString() + 'px';
        // this.currentFreeDragElem.style.left = (e.pageX - this.currentFreeDragElem.offsetTop).toString() + 'px';
      },

      freeDragendHandler: (e) => {
        e.stopPropagation();
        window.removeEventListener('mousemove', (e) => {
          this.eventHandlers.mousePositionHandler(e)
        });
        // Hack.
        this.isDragging = false;
        this.currentFreeDragData = '';
        this.currentFreeDragElem = null;
      },
    };

    // UTILITIES:
    this.utils = {

      populateDataTransfer: (e) => {
        const that = e.target;
        const id = that.id;
        const tag = that.localName;
        const classes = that.className;
        const data = `<${tag} id="${id}" class="${classes}"> ${that.innerHTML} </${tag}>`;
        e.dataTransfer.setData('text/html', data);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';

        if (classes.includes('window-manager'))
          this.currentFreeDragData = e.dataTransfer.getData('text/html');
      },

      acceptDrop: (e) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';
      }
    };

    this.init();
  }
}

const dragAndDrop = new DragAndDrop();
