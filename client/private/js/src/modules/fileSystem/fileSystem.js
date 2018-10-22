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
    let currDir = dir;

    for ( let i = 0; i < path.length; ++i ) {
      try {
        currDir = dir[path[i]];

        if ( !currDir ) {
          try {
            currDir = dir;
            currDir = dir[path[i] + '/'];

            if ( !currDir )
              return false;

            dir = currDir;
          } catch {
            return false;
          }
        }

        dir = currDir;
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
