// Conect to server.
class FileSystem {

  _fetchFileSystem() {

  }

  get structure() {

    return {
      C: {
        // For shivayl (João Neves).
        portfolioOS: {
          documents: [
            { name: 'MyDocument', content: '' }
          ],
          images: [
            { name: '', url: '' }
          ],
          videos: [
            { name: '', url: '' }
          ],
          music: []
        },
        applications: {
          system: [
            { name: 'Terminal', initMethod: 'undefined' }
          ],
          appStore: [
            // Just a model.
            { name: 'Calculator', creator: 'shivayl', htmlIndexUrl: 'https://rawgit.com/', upVotes: 0, downVotes: 0, ratio: 0 },
            {
              name: 'Wikipedia Viewer',
              creator: 'shivayl',
              htmlIndexUrl: 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html',
              upVotes: 0,
              downVotes: 0,
              ratio: 0
            }
          ]
        },
        user: {
          documents: [],
          images: [],
          videos: [],
          music: [],
          trash: []
        }
      }
    };

  }
}

const fileSystem = new FileSystem().structure;
