class CommandHandlers {

  listCurrentDirectory() {
    return Object.keys(fileSystem['']);
  };

  changeDirectory(value) { };

  createFile() { };
}

const commandHandlers = new CommandHandlers();

/*
Object.keys(f2.model['C']["portfolioOs"])
*/
