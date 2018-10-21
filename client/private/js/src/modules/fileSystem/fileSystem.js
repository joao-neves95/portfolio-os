// Conect to server.
class FileSystem {

  _fetchFileSystem() {

  }

  /**
   * Get a directory using its complete path.
   * 
   * It returns false if the directory was not found.
   * 
   * @param { string[] } name
   */
  getDiretory( path ) {
    let dir = this.structure;

    for ( let i = 0; i < path.length; ++i ) {
      try {
        dir = dir[path[i] + '/'];

        if ( !dir ) {
          try {
            dir = this.structure[path[i]];

            if ( !dir )
              return false;
          } catch {
            return false;
          }
        }
      } catch {
        return false;
      }
    }

    return dir;
  }

  get structure() {

    return {
      "root/": {
        // For shivayl (João Neves).
        "portfolioOS/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Video', 'www' )
          ],
          "music/": []
        },
        "applications/": {
          "system/": [
            new SystemApp( 'Terminal', '', '', console.log )
          ],
          "appStore/": [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ]
        },
        "user/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Video', 'www' )
          ],
          "music/": [],
          "trash/": []
        }
      }
    };

  }
}

const fileSystem = new FileSystem();
