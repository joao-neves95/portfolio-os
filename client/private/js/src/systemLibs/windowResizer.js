// https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d

let windowResizer = null;

class WindowResizer {
  constructor() {
    if ( windowResizer )
      throw new Error( 'There can only be one instance of WindowResizer' );

    this.currentResizer = null;

    windowResizer = this;
    Object.seal( windowResizer );
  }

  get _() { return windowResizer; }

  updateListeners() {
    const resizers = document.getElementsByClassName( 'resizer' );

    for ( let i = 0; i < resizers.length; ++i ) {
      resizers[i].addEventListener( 'mousedown', ( e ) => {
        e.preventDefault();
        this.currentResizer = e.target;
        window.addEventListener( 'mousemove', resizeWindowHandler );
        // Multiple cancel events just to be sure.
        window.addEventListener( 'mouseup', this.stopResizing );
        window.addEventListener( 'mouseleave', this.stopResizing );
        window.addEventListener( 'mousemouseout', this.stopResizing );
      } );
    }
  }

  stopResizing( e ) {
    e.preventDefault();
    window.removeEventListener( 'mousemove', resizeWindowHandler );
    this.currentResizable = null;
  }
}

const resizeWindowHandler = ( e ) => {
  const thisWindow = DomUtils.getParentByClassInclude( windowResizer.currentResizer, 'resizable' );
  const currWidth = e.pageX - thisWindow.getBoundingClientRect().left;
  const currHigth = e.pageY - thisWindow.getBoundingClientRect().top;

  if ( currWidth >= 799 )
    thisWindow.style.width = currWidth.toString() + 'px';

  if ( currHigth >= 418 )
    thisWindow.style.height = currHigth.toString() + 'px';
};

new WindowResizer();
