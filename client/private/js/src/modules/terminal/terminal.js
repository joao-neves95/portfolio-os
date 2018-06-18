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
      thisTerminal.innerHTML += terminalTemplates.addLine(terminalTemplates.withInput());
      const activeInput = document.getElementById('active-input');
      this.focusActiveInput()
      thisTerminal.addEventListener('focus', this.focusActiveInput, true);
      thisTerminal.addEventListener('click', this.focusActiveInput, true);
      activeInput.addEventListener('blur', this.focusActiveInput, true);
      activeInput.addEventListener('keypress', (e) => { this.executeCommand(e, activeInput.value) });
    }, 2000);
  };

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
        console.log('cmd: dir')
        break;
      case 'CD':
        console.log('cmd: cd')
        break;
      case 'RUN':
        console.log('cmd: run')
        break;
      default:
        document.getElementById(this.id).innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo(`'${cmd}' is not recognized as an internal or external command, operable program or batch file.`));
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
