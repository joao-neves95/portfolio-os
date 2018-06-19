class Terminal {
  constructor() {
    this.id = 'terminal-1';

    this.init();
  }

  init() {
    windowManager.openNewWindow('Terminal', terminalTemplates.window(this.id));

    const thisTerminal = document.getElementById(this.id);
    thisTerminal.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo(terminalTemplates.welcomeMessage));

    setTimeout(() => {
      this.addNewInput();
    }, 2000);
  };

  focusActiveInput() {
    document.getElementById('active-input').focus();
  }

  /**
   * 
   * @param {string} insertInLastInput 
   * (optional) The content of the last input.
   * 
   * @param {any} aditionalInfo 
   * (optional) Additional information. (E.g. errors, warnings, etc).
   */
  addNewInput(insertInLastInput = '', aditionalInfo = '') {
    const thisTerminal = document.getElementById(this.id);

    // If there is one, first remove the last input.
    const currentActiveInput = document.getElementById('active-input');
    if (currentActiveInput) {
      currentActiveInput.parentNode.remove();
      thisTerminal.innerHTML += terminalTemplates.addLine(terminalTemplates.withLastInput(insertInLastInput));
      if (aditionalInfo !== '')
        thisTerminal.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo(aditionalInfo));
    }
    
    thisTerminal.innerHTML += terminalTemplates.addLine(terminalTemplates.withInput());
    const activeInput = document.getElementById('active-input');
    this.focusActiveInput()
    thisTerminal.addEventListener('focus', this.focusActiveInput, true);
    thisTerminal.addEventListener('click', this.focusActiveInput, true);
    activeInput.addEventListener('blur', this.focusActiveInput, true);
    activeInput.addEventListener('keypress', (e) => { this.executeCommand(e, activeInput.value) });
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
        this.addNewInput(cmd + ' ' + val.toString());
        break;
      case 'CD':
        break;
      case 'RUN':
        break;
      default:
        this.addNewInput(`${cmd} ${val.toString()}`, `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`);
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
}
