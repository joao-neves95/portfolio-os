const initAnimMessage = terminalTemplates.welcomeMessage;
const INIT_ANIM_DELAY = 50;

class Terminal {
  constructor(processId) {
    this.id = `terminal-${ processId }`;
    this.processId = processId;

    this.initAnimTarget = HTMLElement;
    this.initAnimI = 0;

    this.currentInput = '';
    this.currentDir = fileSystem.structure["root/"];
    this.currentDirName = 'root/';
    this.currentPath = ['root/'];
    /** @type { fileSystem.structure } */

    this.init();
  }

  get element() { return document.getElementById(this.id); };

  init() {
    windowManager.openNewWindow(this.processId, terminalTemplates.window(this.id));

    this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo());
    this.initAnimTarget = document.querySelector(`#${ this.id } > .line > .info`);
    this.__typeWriterAnimation();
  }

  __typeWriterAnimation() {
    if (this.initAnimI < initAnimMessage.length) {
      this.initAnimTarget.innerHTML += initAnimMessage[this.initAnimI];
      ++this.initAnimI;
      setTimeout( this.__typeWriterAnimation.bind( this ), INIT_ANIM_DELAY );

    } else {
      this.initAnimI = 0;
      setTimeout( () => { this.addNewInput(); }, 500 );
    }
  }

  /**
   *
   * @param {string} lastInput
   * (optional) Default -> ""
   * 
   * @param {string} aditionalInfo
   * (optional) Default -> ""
   */
  deativateLastInput( lastInput = null, aditionalInfo = '' ) {
    const currentActiveInput = document.getElementById( 'active-input' );

    if (currentActiveInput) {
      if ( !lastInput )
        lastInput = this.currentInput;

      DomUtils.getParentByClassInclude( currentActiveInput, 'grid-x input-group line' ).remove();
      this.element.innerHTML += terminalTemplates.withLastInput( lastInput ).addLine();

      if (aditionalInfo !== '')
        this.element.innerHTML += terminalTemplates.withInfo( aditionalInfo ).addLine();

      this.currentInput = '';
    }
  }

  __addInfo( info ) {
    this.element.innerHTML += terminalTemplates.withInfo( info ).addLine();
  }

  __addCurrentDirLine() {
    this.element.innerHTML += terminalTemplates.withInfo( this.currentPath.join( '' ), 'current-path' ).addLine();
  }

  addNewInput() {
    this.__addCurrentDirLine();
    this.element.innerHTML += terminalTemplates.withInput().addLine();
    const activeInput = document.getElementById('active-input');
    this.focusActiveInput();
    this.element.removeEventListener('focus', this.focusActiveInput, true);
    this.element.addEventListener('focus', this.focusActiveInput, true);
    this.element.removeEventListener('click', this.focusActiveInput, true);
    this.element.addEventListener('click', this.focusActiveInput, true);
    activeInput.addEventListener( 'blur', this.focusActiveInput, true );

    activeInput.addEventListener( 'keypress', ( e ) => {
      if ( e.keyCode === 13 ) {
        this.currentInput = activeInput.value;
        this.executeCommand( e );
      }
    } );
  }

  focusActiveInput() {
    document.getElementById('active-input').focus();
  }

  executeCommand( e ) {
    e.preventDefault();
    const parsedInput = this.parseInput( this.currentInput );
    const cmd = parsedInput.cmd;
    const val = parsedInput.value;
    this.deativateLastInput();

    switch ( cmd.toUpperCase() ) {
      case 'CLEAR':
        this.clear();
        break;
      case 'DIR':
      case 'LS':
        this.listCurrentDirectory();
        break;
      case 'CD':
        if ( !val[0] )
          this.__addInfo( 'It was not provided any directory name.' );
        else
          this.changeDirectory( val[0] );
        break;
      case 'CD..':
      case 'CD-':
        this.previousDirectory();
        break;
      case 'HELP':
      case 'H':
        this.printHelp();
        break;
      case 'RUN':
        break;
      default:
        this.__addInfo( `"${cmd}" is not recognized as an internal or external command, operable program or executable file.` );
    }

    this.addNewInput();
  }

  // COMMAND HANDLERS:
  printHelp() {
    this.__addInfo(
      `Commands: </br>
       </br>
       dir / ls </br>
       cd </br>
       cd.. / cd- </br>
       clear`
    );
  }

  listCurrentDirectory() {
    let dirInfo = '';

    for ( let key in this.currentDir ) {
      if ( this.currentDir[key] instanceof FileModel )
        dirInfo += this.currentDir[key].name;
      else
        dirInfo += key + '<br>';
    }

    this.__addInfo( dirInfo );
  }

  changeDirectory( dirName ) {
    const path = this.currentPath.slice();
    path.push( dirName );
    const newDir = fileSystem.getDiretory( path );

    if ( !newDir )
      return this.__addInfo( `'${dirName}' is not a valid directory name.` );

    if ( !dirName.endsWith( '/' ) ) {
      dirName += '/';
    }

    this.currentDirName = dirName;
    this.currentPath.push( dirName );
    this.currentDir = newDir;
  }

  previousDirectory() {
    this.currentPath.pop();
    this.currentDirName = this.currentPath[this.currentPath.length - 1];
    // this.currentDir = 
  }

  clear() {
    this.element.innerHTML = '';
  }

  createFile() { }

  /**
   * Terminal input parser.
   * Returns:(object) { cmd: 'String', value: 'String[]' }
   * @param {string} input
   *
   */
  parseInput( input ) {
    const splitInput = input.split( /\s/ );

    return {
      cmd: splitInput[0],
      value: splitInput.slice( 1, splitInput.length )
    };
  }
}
