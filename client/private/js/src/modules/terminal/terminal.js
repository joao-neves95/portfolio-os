class Terminal {
  contructor() {
    this.id = 'terminal-1';
    this.active = Boolean;

    this.init();
  }

  init() {
    console.debug('hi')
    windowManager.openNewWindow('Terminal', terminalTemplates.window(this.id));

    const thisTerminal = document.getElementById(this.id);
    thisTerminal.innerHTML += terminalTemplates.info('Welcome to the Portfolio-OS Terminal!');
    setTimeout(() => {
      thisTerminal.innerHTML += terminalTemplates.addInput();
    }, 2000);
  };

  executeCommand(input){
    const parsedInput = this.parseInput(input);
    const cmd = parsedInput.cmd;
    const val = parsedInput.value;

    switch (cmd) {
      case 'dir':
      case 'ls':
        break;
      case 'cd':
        break;
      case 'run':
        break;
      default:
    }
  };

  /**
    * @returns {object} { cmd: 'String', value: 'String[]' }
    *
  */
  parseInput (input) {
    const splitInput = cammand.split(/\s/);
    return {
      cmd: splitInput[0].toUpperCase(),
      value: splitInput.slice(1, splitInput.lenght)
    }
  };
}
