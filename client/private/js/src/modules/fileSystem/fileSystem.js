// Conect to server.
class FileSystem {

  get structure() {
    return {
      C: {
        // For shivayl (João Neves).
        portfolioOs: {
          documents: [
            { name: 'Curriculum' }
          ],
          images: [],
          videos: []
        },
        applications: {
          system: [
            { name: 'Terminal', initMethod: 'undefined' }
          ],
          appStore: [
            // Just a model.
            { name: 'Calculator', creator: 'shivayl', htmlIndexUrl: 'https://rawgit.com/' },
            { name: 'Wikipedia Viewer', creator: 'shivayl', htmlIndexUrl: 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' }
          ]
        },
        user: {
          documents: [],
          images: [],
          videos: []
        }
      }
    };
  }
}

const fileSystem = new FileSystem().structure;
