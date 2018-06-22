let initAnimI = 0;
const initAnimMessage = terminalTemplates.welcomeMessage;
const initAnimDelay = 50;
let initAnimTarget = HTMLElement;

class Terminal {
  constructor(processId) {
    this.id = `terminal-${ processId }`;

    this.currentDir = 'C';

    this.init();
  }

  get element() { return document.getElementById(this.id); };

  init() {
    windowManager.openNewWindow('Terminal', terminalTemplates.window(this.id));
    console.debug('init')

    this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo());
    initAnimTarget = document.querySelector(`#${ this.id } > .line > .info`);
    this.typeWriterAnimation();
  };

  typeWriterAnimation() {
    if (initAnimI < initAnimMessage.length) {
      initAnimTarget.innerHTML += initAnimMessage[initAnimI];
      ++initAnimI;
      setTimeout(this.typeWriterAnimation.bind(this), initAnimDelay);
    }
    else {
      initAnimI = 0;
      setTimeout(() => { this.addNewInput() }, 500)
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
  // TODO: Fix Id's.
  deativateLastInput(lastInput = '', aditionalInfo = '') {
    const currentActiveInput = document.getElementById('active-input');

    if (currentActiveInput) {
      DomUtils.getParentByClassInclude(currentActiveInput, 'grid-x input-group line').remove();
      this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withLastInput(lastInput));

      if (aditionalInfo !== '')
        this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo(aditionalInfo));
    }
  }

  addNewInput() {
    this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInput());
    const activeInput = document.getElementById('active-input');
    this.focusActiveInput();
    this.element.removeEventListener('focus', this.focusActiveInput, true);
    this.element.addEventListener('focus', this.focusActiveInput, true);
    this.element.removeEventListener('click', this.focusActiveInput, true);
    this.element.addEventListener('click', this.focusActiveInput, true);
    activeInput.addEventListener('blur', this.focusActiveInput, true);
    activeInput.addEventListener('keypress', (e) => { this.executeCommand(e, activeInput.value) });
  }

  focusActiveInput() {
    document.getElementById('active-input').focus();
  }

  executeCommand(e, input) {
    e.preventDefault;
    if (e.keyCode !== 13)
      return;

    const parsedInput = this.parseInput(input);
    const cmd = parsedInput.cmd;
    const val = parsedInput.value;

    switch (cmd.toUpperCase()) {
      case 'DIR':
      case 'LS':
        this.deativateLastInput(cmd + ' ' + val.toString())
        this.listCurrentDirectory();
        this.addNewInput();
        break;
      case 'CD':
        break;
      case 'RUN':
        break;
      default:
        this.deativateLastInput(`${cmd} ${val.toString()}`, `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`);
        this.addNewInput();
    }
  };

  /**
   * Terminal input parser.
   * Returns:(object) { cmd: 'String', value: 'String[]' }
   * @param {string} input
   *
   */
  parseInput (input) {
    const splitInput = input.split(/\s/);
    return {
      cmd: splitInput[0],
      value: splitInput.slice(1, splitInput.length)
    }
  };

  // COMMAND HANDLERS:
  listCurrentDirectory() {
    const dirInfo = Object.keys(fileSystem[this.currentDir]);
    this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo(dirInfo));
  };

  changeDirectory(value) { };

  createFile() { };
}
