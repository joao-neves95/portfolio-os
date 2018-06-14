class Terminal {
  contructor() {
    this.id = '';
    this.active = Boolean;

    this.init = () => {
      this.id = 'terminal'
    };


    this.executeCommand = (input) => {
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
    this.parseInput = (input) => {
      const splitInput = cammand.split(/\s/);
      return {
        cmd: splitInput[0].toUpperCase(),
        value: splitInput.slice(1, splitInput.lenght)
      }
    };
  }
}
