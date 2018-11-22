/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Pass to the server.
class FileSystem {

  __fetchFileSystem() {

  }

  /**
   * Get a directory using its complete path.
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

  /**
   * [CONNECT TO THE DB]
   * 
   * @param { string } path E.g: "root/users/local/"
   * @param { DirectoryModel } newDirectory
   */
  addDirectory( path, newDirectory ) {
    // Get directory.
    const dir = [];
    dir.push( newDirectory );
  }

  ____getDiretoryV2( path ) {
    let dir = this.____fsv2;
    let currDir = dir;

    for ( let i = 0; i < path.length; ++i ) {
      try {
        const thisDirContent = dir.content;

        for ( let j = 0; j < thisDirContent.length; ++j ) {
          if ( thisDirContent[j].name === path[i].trim() || thisDirContent[j].name === path[i].trim() + '/' )
            dir = thisDirContent[j];
          else
            return false;
        }

      } catch {
        return false;
      }
    }

    return dir;
  }

  /**
   * IN DEVELOPMENT. ONLY A CONCEPT.
   */
  get ____fsv2() {
    return new SystemDirectoryModel( 'root/',
      [

        new SystemDirectoryModel( 'portfolioOS/', [
          new SystemDirectoryModel( 'documents/', [] ),
          new SystemDirectoryModel( 'images/', [] ),
          new SystemDirectoryModel( 'videos/', [] ),
          new SystemDirectoryModel( 'music/', [] )
        ] ),
        new SystemDirectoryModel( 'applications/', [
          new SystemDirectoryModel( 'system/', [
            new SystemApp( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, console.log ),
            new SystemApp( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, console.log )
          ] ),
          new DirectoryModel( PermissionType.UserWrite, 'appStore/', null, null, [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ] )
        ] ),
        new SystemDirectoryModel( 'users/', [
          new SystemDirectoryModel( 'local/', [
            new DirectoryModel( PermissionType.UserWrite, 'desktop/', null, null, [] ),
            new DirectoryModel( PermissionType.UserWrite, 'documents/', null, null, [
              new FileModel( FileSystemItemType.File, PermissionType.UserDelete, 'My Document', 'Hello World.' )
            ] ),
            new DirectoryModel( PermissionType.UserWrite, 'images/', null, null, [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Image', 'www' )
            ] ),
            new DirectoryModel( PermissionType.UserWrite, 'videos/', null, null, [] ),
            new DirectoryModel( PermissionType.UserWrite, 'music/', null, null, [] ),
            new DirectoryModel( PermissionType.UserRead, 'shared/', null, null, [] )
          ] ),
          new DirectoryModel( PermissionType.Admin, 'public/', null, FileSystemItemType.ExecutableDirectory, [] )
        ] )

      ]
    );
  }

  get structure() {

    return {
      "root/": {
        // For shivayl (João Neves).
        "portfolioOS/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, PermissionType.UserRead, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, PermissionType.UserRead, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, PermissionType.UserRead, 'My Video', 'www' )
          ],
          "music/": []
        },
        "applications/": {
          "system/": [
            new SystemApp( 'Terminal', '', '', console.log ),
            new SystemApp( 'Explorer', '', '', console.log )
          ],
          "appStore/": [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ]
        },
        "users/": {
          "local/": {
            "documents/": [
              new FileModel( FileSystemItemType.File, PermissionType.UserDelete, 'My Document', 'Hello World.' )
            ],
            "images/": [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Image', 'www' )
            ],
            "videos/": [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Video', 'www' )
            ],
            "music/": [],
            "shared/": [],
            "trash/": []
          },
          // "public" is the PortfolioOS's users profiles.
          "public/": []
        }
      }
    };

  }
}

const fileSystem = new FileSystem();
