/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let dragAndDrop = null;

class DragAndDrop {
  constructor() {
    if ( dragAndDrop )
      throw new Error( 'There can only be one instance of DragAndDrop' );

    this.isDragging = Boolean;
    this.currentFreeDragElem = HTMLElement;
    // This is an hack because chrome only allows me to read dataTrasfer on the drop event
    // and I need to access it before the drop...
    this.currentDragData = '';
    this.currentFreeDragData = '';

    // #region UTILITIES

    this.utils = {
      populateDataTransfer: ( e ) => {
        const that = e.target;
        const id = that.id;
        const tag = that.localName;
        const classes = that.className;
        const data = `<${tag} id="${id}" class="${classes}"> ${that.innerHTML} </${tag}>`;
        e.dataTransfer.setData( 'text/plain', data );
        this.currentDragData = data;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';

        if ( classes.includes( 'window-manager' ) )
          this.currentFreeDragData = e.dataTransfer.getData( 'text/plain' );
      },

      acceptDrop: ( e ) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';
      }

    };

    // #endregion

    dragAndDrop = this;
    Object.seal( dragAndDrop );

    this.init();
  }

  static _() { return dragAndDrop; }

  init() {
    this.updateDraggables();
    this.updateFreeDraggListeners();
  }

  // #region UPDATES

  updateDraggables() {
    this.cancelNonDraggableElements();
    this.updateDraggableElements();
    this.updateDraggListeners();
    this.updateDroppableListeners();
  }

  cancelNonDraggableElements() {
    Array.from(document.getElementsByTagName( 'img' )).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );

    Array.from(document.getElementsByTagName( 'a' )).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );
  }

  updateDraggableElements() {
    Array.from(document.getElementsByClassName( 'draggable' )).forEach( value => {
      value.setAttribute( 'draggable', 'true' );
    } );

    Array.from(document.getElementsByClassName( 'free-draggable' )).forEach( value => {
      value.setAttribute( 'draggable', 'true' );
    } );
  }

  // #endregion

  // #region LISTENERS

  updateDraggListeners() {
    const constrainedDraggableElems = document.getElementsByClassName( 'draggable' );

    if (constrainedDraggableElems.length <= 0)
      return;

    for (let i = 0; i < constrainedDraggableElems.length; i++) {
      constrainedDraggableElems[i].removeEventListener('dragstart', (e) => { this.dragstartHandler(e); });
      constrainedDraggableElems[i].addEventListener( 'dragstart', ( e ) => {
        e.stopPropagation();
        this.dragstartHandler( e );
      } );
    }
  }

  updateDroppableListeners() {
    const droppableElems = document.getElementsByClassName('droppable');

    if (droppableElems.length <= 0)
      return;

    for (let i = 0; i < droppableElems.length; i++) {
      droppableElems[i].removeEventListener( 'dragover', ( e ) => { this.dragoverHandler( e ); });
      droppableElems[i].addEventListener('dragover', (e) => {
        e.stopPropagation();
        this.dragoverHandler(e);
      }, false);

      droppableElems[i].removeEventListener( 'drop', ( e ) => { this.dropHandler( e ); });
      droppableElems[i].addEventListener('drop', (e) => {
        e.stopPropagation();
        this.dropHandler(e)
      }, false);
    }
  }

  updateFreeDraggListeners() {
    const freeDraggableElems = document.getElementsByClassName('free-draggable');

    if (freeDraggableElems.length <= 0)
      return;

    for (let i = 0; i < freeDraggableElems.length; i++) {

      freeDraggableElems[i].removeEventListener('mousedown', (e) => { this.freeDragHandler(e); });
      freeDraggableElems[i].addEventListener('mousedown', (e) => {
        this.freeDragHandler(e);
        return false;
      });

      window.removeEventListener('mouseup', (e) => { this.freeDragendHandler(e); });
      window.addEventListener('mouseup', (e) => {
        this.freeDragendHandler(e);
      });
    }
  }

  // #endregion

  // #region EVENT HANDLERS

  dragstartHandler( e ) {
    e.stopPropagation();
    this.utils.populateDataTransfer( e );
    return false;
  }

  dragoverHandler( e ) {
    e.stopPropagation();
    const that = e.target;

    if ( that.children.length > 0 || that.localName !== 'article' || this.currentDragData === this.currentFreeDragData )
      return;

    this.utils.acceptDrop( e );
    return false;
  }

  dropHandler( e ) {
    e.stopPropagation();
    e.preventDefault();
    const that = e.target;

    const newElement = new DOMParser().parseFromString( e.dataTransfer.getData( 'text/plain' ), 'text/html' ).body.firstChild;
    document.getElementById( newElement.id ).remove();
    this.currentDragData = '';
    // data.classList.add('animated', 'bounceIn');
    that.insertAdjacentElement( 'afterbegin', newElement );
    this.updateDraggables();
    desktopManager.updateListeners();
  }

  freeDragHandler( e ) {
    e.stopPropagation();
    e.preventDefault();
    this.isDragging = true;
    this.currentFreeDragElem = DomUtils.getParentByTag( e.target, 'article' );

    window.addEventListener( 'mousemove', ( e ) => {
      this.mousePositionHandler( e );
    } );

    return false;
  }

  mousePositionHandler( e ) {
    e.stopPropagation();
    if ( !this.isDragging )
      return;

    // const offset = DomUtils.getOffset( this.currentFreeDragElem );

    this.currentFreeDragElem.style.top = ( e.pageY ).toString() + 'px';
    this.currentFreeDragElem.style.left = ( e.pageX ).toString() + 'px';
    // this.currentFreeDragElem.style.left = (e.pageX - this.currentFreeDragElem.offsetTop).toString() + 'px';
  }

  freeDragendHandler( e ) {
    e.stopPropagation();
    window.removeEventListener( 'mousemove', ( e ) => {
      this.mousePositionHandler( e );
    } );
    // Hack.
    this.isDragging = false;
    this.currentFreeDragData = '';
    this.currentFreeDragElem = null;
  }

  // #ENDREGION
}

new DragAndDrop();
