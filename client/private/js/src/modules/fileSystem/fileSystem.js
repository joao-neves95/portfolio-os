// Conect to server.
class FileSystem {

  get structure() {
    return {
      C: {
        portfolioOs: {
          documents: [],
            images: [],
              videos: []
        },
        applications: {
          system: [],
            appStore: [
              { name: 'Example', creator: 'User231', codeUrl: 'www.kjhzdf.com' }
            ]
        },
        user: {
          documents: [],
            images: [],
              videos: []
        }
      }
    }
  };
}

const fileSystem = new FileSystem().structure;
